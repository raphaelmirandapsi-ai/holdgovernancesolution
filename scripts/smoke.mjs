import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { chromium, expect } from "@playwright/test";

const baseURL = process.env.BASE_URL || "http://127.0.0.1:5173";
const runtimeErrors = [];
let checks = 0;
let browser;

async function check(label, run) {
  await run();
  checks += 1;
  console.log(`✓ ${label}`);
}

function watchErrors(page) {
  page.on("pageerror", (error) => runtimeErrors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") runtimeErrors.push(message.text());
  });
}

async function assertNoOverflow(page) {
  const dimensions = await page.evaluate(() => ({
    viewport: window.innerWidth,
    content: document.documentElement.scrollWidth,
  }));
  assert.ok(
    dimensions.content <= dimensions.viewport + 1,
    `Horizontal overflow: ${dimensions.content}px content in ${dimensions.viewport}px viewport`,
  );
}

try {
  browser = await chromium.launch({
    executablePath:
      process.env.CHROMIUM_PATH ||
      (existsSync("/usr/bin/chromium") ? "/usr/bin/chromium" : undefined),
    headless: true,
    args: ["--no-sandbox", "--disable-dev-shm-usage"],
  });
  const desktop = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
  });
  const page = await desktop.newPage();
  watchErrors(page);
  const response = await page.goto(baseURL, { waitUntil: "networkidle" });
  assert.equal(response?.status(), 200, "Application must return HTTP 200");

  await check("Desktop: headline and all core sections render", async () => {
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      /Estrutura para\s*crescer\.\s*Clareza para\s*decidir\./,
    );
    await expect(page.locator("#solucoes")).toBeVisible();
    await expect(page.locator("#como-atuamos")).toBeVisible();
    await expect(page.locator("#sobre")).toBeVisible();
    await expect(page.locator("#contato")).toBeVisible();
    await assertNoOverflow(page);
    await page.screenshot({
      path: "/tmp/hold-desktop.png",
      fullPage: true,
      animations: "disabled",
      timeout: 60000,
    });
  });

  const solutions = [
    {
      name: "Governança",
      heading: "Boas decisões precisam de uma base sólida.",
    },
    {
      name: "Gestão & processos",
      heading: "Uma operação mais simples. Uma gestão mais forte.",
    },
    {
      name: "Estratégia & crescimento",
      heading: "O próximo capítulo começa com uma direção.",
    },
  ];
  await check(
    "Solutions: every tab selects its matching panel and content",
    async () => {
      for (const solution of solutions) {
        const tab = page.getByRole("tab", { name: new RegExp(solution.name) });
        await tab.click();
        await expect(tab).toHaveAttribute("aria-selected", "true");
        const panel = page.getByRole("tabpanel");
        await expect(panel).toHaveCount(1);
        await expect(panel.getByRole("heading", { level: 3 })).toHaveText(
          solution.heading,
        );
        await expect(panel.locator("li")).toHaveCount(3);
        assert.equal(
          await tab.getAttribute("aria-controls"),
          await panel.getAttribute("id"),
        );
      }
    },
  );

  await check(
    "Solutions: arrow, Home, and End keys move selection and focus",
    async () => {
      const tabs = page.getByRole("tab");
      await tabs.nth(2).focus();
      await page.keyboard.press("ArrowRight");
      await expect(tabs.nth(0)).toBeFocused();
      await expect(tabs.nth(0)).toHaveAttribute("aria-selected", "true");
      await page.keyboard.press("ArrowLeft");
      await expect(tabs.nth(2)).toBeFocused();
      await expect(tabs.nth(2)).toHaveAttribute("aria-selected", "true");
      await page.keyboard.press("Home");
      await expect(tabs.nth(0)).toBeFocused();
      await page.keyboard.press("End");
      await expect(tabs.nth(2)).toBeFocused();
      await expect(tabs.nth(2)).toHaveAttribute("aria-selected", "true");
    },
  );

  const dialog = page.getByRole("dialog");
  await check(
    "Contact: service CTA opens modal with the chosen service",
    async () => {
      await page
        .getByRole("button", { name: "É disso que minha empresa precisa" })
        .click();
      await expect(dialog).toBeVisible();
      await expect(dialog.getByLabel("Como podemos ajudar?")).toHaveValue(
        "Estratégia & crescimento",
      );
      assert.equal(
        await dialog.evaluate((element) => element.matches(":modal")),
        true,
      );
    },
  );

  await check(
    "Contact: browser validation prevents an empty briefing",
    async () => {
      await dialog
        .getByRole("button", { name: "Preparar meu briefing" })
        .click();
      await expect(dialog.locator("form")).toBeVisible();
      assert.equal(
        await dialog
          .getByLabel("Seu nome")
          .evaluate((input) => input.validity.valueMissing),
        true,
      );
      await expect(
        dialog.getByRole("link", { name: "Enviar por e-mail" }),
      ).toHaveCount(0);
    },
  );

  const details = {
    name: "Ana Júlia Silva",
    company: "Empresa & Cia",
    email: "ana.silva@example.com",
    interest: "Estratégia & crescimento",
    challenge:
      "Precisamos alinhar decisões, processos e crescimento com clareza. Prioridade: equipe & operação.",
  };
  const expectedBriefing = `BRIEFING — HOLD\n\nNome: ${details.name}\nEmpresa: ${details.company}\nE-mail: ${details.email}\nInteresse: ${details.interest}\n\nDesafio:\n${details.challenge}\n`;

  await check(
    "Contact: real typed content appears in encoded email and WhatsApp links",
    async () => {
      await dialog.getByLabel("Seu nome").fill(details.name);
      await dialog.getByLabel("Empresa", { exact: true }).fill(details.company);
      await dialog.getByLabel("E-mail profissional").fill(details.email);
      await dialog.getByLabel("Qual é o seu desafio?").fill(details.challenge);
      await dialog
        .getByRole("button", { name: "Preparar meu briefing" })
        .click();
      await expect(dialog.locator(".briefing-preview")).toHaveText(
        expectedBriefing,
      );

      const email = new URL(
        await dialog
          .getByRole("link", { name: "Enviar por e-mail" })
          .getAttribute("href"),
      );
      assert.equal(email.protocol, "mailto:");
      assert.equal(email.pathname, "raphael@holdsolution.com");
      assert.equal(
        email.searchParams.get("subject"),
        "Vamos conversar — novo projeto",
      );
      assert.equal(email.searchParams.get("body"), expectedBriefing);

      const whatsapp = new URL(
        await dialog
          .getByRole("link", { name: "Enviar pelo WhatsApp" })
          .getAttribute("href"),
      );
      assert.equal(whatsapp.origin, "https://wa.me");
      assert.equal(whatsapp.pathname, "/5522992886582");
      assert.equal(whatsapp.searchParams.get("text"), expectedBriefing);
      await expect(dialog.getByRole("status")).toContainText(
        "Nenhum dado é enviado automaticamente",
      );
    },
  );

  await check("Contact: editing preserves every submitted field", async () => {
    await dialog.getByRole("button", { name: "Editar meu briefing" }).click();
    await expect(dialog.getByLabel("Seu nome")).toHaveValue(details.name);
    await expect(dialog.getByLabel("Empresa", { exact: true })).toHaveValue(
      details.company,
    );
    await expect(dialog.getByLabel("E-mail profissional")).toHaveValue(
      details.email,
    );
    await expect(dialog.getByLabel("Como podemos ajudar?")).toHaveValue(
      details.interest,
    );
    await expect(dialog.getByLabel("Qual é o seu desafio?")).toHaveValue(
      details.challenge,
    );
    await dialog.getByRole("button", { name: "Preparar meu briefing" }).click();
  });

  await check(
    "Contact: downloading produces the complete UTF-8 briefing",
    async () => {
      const downloadPromise = page.waitForEvent("download");
      await dialog.getByRole("button", { name: "Baixar briefing" }).click();
      const download = await downloadPromise;
      assert.equal(download.suggestedFilename(), "meu-briefing-hold.txt");
      const downloadPath = await download.path();
      assert.equal(await readFile(downloadPath, "utf8"), expectedBriefing);
      assert.equal(await download.failure(), null);
    },
  );

  await check(
    "Contact: Escape dismisses dialog and a new CTA reopens a clean form",
    async () => {
      await page.keyboard.press("Escape");
      await expect(dialog).not.toBeVisible();
      await page
        .getByRole("button", { name: "Construa o próximo passo" })
        .click();
      await expect(dialog).toBeVisible();
      await expect(dialog.getByLabel("Seu nome")).toHaveValue("");
      await expect(dialog.getByLabel("Como podemos ajudar?")).toHaveValue(
        "Ainda quero entender melhor",
      );
      await dialog.getByRole("button", { name: "Fechar conversa" }).click();
      await expect(dialog).not.toBeVisible();
    },
  );

  await check(
    "FAQ: expanding and collapsing exposes the matching answer",
    async () => {
      const question = page.getByRole("button", {
        name: "Preciso ter uma estrutura de governança pronta?",
      });
      const answer = page.locator(
        `#${await question.getAttribute("aria-controls")}`,
      );
      await expect(question).toHaveAttribute("aria-expanded", "false");
      await expect(answer).toBeHidden();
      await question.click();
      await expect(question).toHaveAttribute("aria-expanded", "true");
      await expect(answer).toBeVisible();
      await expect(answer).toContainText("Podemos começar pelo diagnóstico");
      await question.click();
      await expect(question).toHaveAttribute("aria-expanded", "false");
      await expect(answer).toBeHidden();
    },
  );

  const mobile = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
  });
  const mobilePage = await mobile.newPage();
  watchErrors(mobilePage);
  await mobilePage.goto(baseURL, { waitUntil: "networkidle" });
  await check(
    "Mobile 390px: responsive content has no horizontal overflow",
    async () => {
      await expect(mobilePage.getByRole("heading", { level: 1 })).toBeVisible();
      await assertNoOverflow(mobilePage);
      await mobilePage.screenshot({
        path: "/tmp/hold-mobile.png",
        fullPage: true,
        animations: "disabled",
        timeout: 60000,
      });
    },
  );

  await check(
    "Mobile: navigation opens, Escape closes, and anchor selection closes it",
    async () => {
      const navigation = mobilePage.getByRole("navigation", {
        name: "Navegação principal",
      });
      await expect(navigation).toBeHidden();
      await mobilePage.getByRole("button", { name: "Abrir menu" }).click();
      await expect(navigation).toBeVisible();
      await expect(
        mobilePage.getByRole("button", { name: "Fechar menu" }),
      ).toHaveAttribute("aria-expanded", "true");
      await mobilePage.keyboard.press("Escape");
      await expect(navigation).toBeHidden();
      await expect(
        mobilePage.getByRole("button", { name: "Abrir menu" }),
      ).toBeFocused();
      await mobilePage.getByRole("button", { name: "Abrir menu" }).click();
      await navigation
        .getByRole("link", { name: "Soluções", exact: true })
        .click();
      await expect(navigation).toBeHidden();
      await expect(mobilePage).toHaveURL(/#solucoes$/);
    },
  );

  await check(
    "Mobile 320px: layout, service tabs, and contact dialog remain usable",
    async () => {
      await mobilePage.setViewportSize({ width: 320, height: 740 });
      await assertNoOverflow(mobilePage);
      await mobilePage.getByRole("tab", { name: /Gestão & processos/ }).click();
      await expect(
        mobilePage.getByRole("tabpanel").getByRole("heading"),
      ).toHaveText(solutions[1].heading);
      await mobilePage
        .getByRole("button", { name: "É disso que minha empresa precisa" })
        .click();
      await expect(mobilePage.getByRole("dialog")).toBeVisible();
      await expect(mobilePage.getByLabel("Como podemos ajudar?")).toHaveValue(
        "Gestão & processos",
      );
      await assertNoOverflow(mobilePage);
      await mobilePage.getByRole("button", { name: "Fechar conversa" }).click();
    },
  );

  await check("Browser: no runtime exceptions or console errors", async () => {
    assert.deepEqual(runtimeErrors, []);
  });

  console.log(
    `\n${checks} functional checks passed. No messages sent to external services.`,
  );
} catch (error) {
  console.error(`\nSmoke test failed after ${checks} completed checks.`);
  console.error(error);
  process.exitCode = 1;
} finally {
  await browser?.close();
}
