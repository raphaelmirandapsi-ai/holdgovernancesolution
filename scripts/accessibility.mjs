import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import AxeBuilder from "@axe-core/playwright";
import { chromium, expect } from "@playwright/test";

const baseURL = process.env.BASE_URL || "http://127.0.0.1:5173";
const tags = ["wcag2a", "wcag2aa", "wcag21aa"];
const failures = [];
let statesCompleted = 0;
let browser;

async function audit(page, label) {
  await page.evaluate(() => document.fonts.ready);
  const results = await new AxeBuilder({ page }).withTags(tags).analyze();
  statesCompleted += 1;
  if (results.violations.length === 0) {
    console.log(`✓ ${label}: no automated violations`);
    return;
  }

  const summary = results.violations
    .map((violation) => {
      const selectors = violation.nodes
        .slice(0, 6)
        .map((node) => node.target.join(" > "))
        .join(", ");
      const remaining = violation.nodes.length > 6
        ? ` (+${violation.nodes.length - 6} more)`
        : "";
      return `  ${violation.id} [${violation.impact}]: ${violation.help}\n    ${selectors}${remaining}`;
    })
    .join("\n");
  failures.push(`${label}\n${summary}`);
  console.error(`✗ ${label}: ${results.violations.length} violation rule(s)\n${summary}`);
}

try {
  browser = await chromium.launch({
    executablePath: process.env.CHROMIUM_PATH || (
      existsSync("/usr/bin/chromium") ? "/usr/bin/chromium" : undefined
    ),
    headless: true,
    args: ["--no-sandbox", "--disable-dev-shm-usage"],
  });
  const desktop = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
  });
  const page = await desktop.newPage();
  const response = await page.goto(baseURL, { waitUntil: "networkidle" });
  assert.equal(response?.status(), 200, "Application must return HTTP 200");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await audit(page, "Desktop: main page");

  await page.getByRole("button", { name: "Construa o próximo passo" }).click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(dialog.locator("form")).toBeVisible();
  await audit(page, "Desktop: contact form open");

  await dialog.getByLabel("Seu nome").fill("Teste de acessibilidade");
  await dialog.getByLabel("Empresa", { exact: true }).fill("Empresa de demonstração");
  await dialog.getByLabel("E-mail profissional").fill("teste@example.com");
  await dialog.getByLabel("Qual é o seu desafio?").fill(
    "Organizar os processos e estruturar a governança da empresa.",
  );
  await dialog.getByRole("button", { name: "Preparar meu briefing" }).click();
  await expect(dialog.locator(".briefing-preview")).toBeVisible();
  await audit(page, "Desktop: prepared briefing result");

  const mobile = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
  });
  const mobilePage = await mobile.newPage();
  const mobileResponse = await mobilePage.goto(baseURL, {
    waitUntil: "networkidle",
  });
  assert.equal(mobileResponse?.status(), 200, "Mobile application must return HTTP 200");
  await expect(mobilePage.getByRole("heading", { level: 1 })).toBeVisible();
  await audit(mobilePage, "Mobile 390px: main page");

  await mobilePage.getByRole("button", { name: "Abrir menu" }).click();
  await expect(mobilePage.getByRole("navigation", {
    name: "Navegação principal",
  })).toBeVisible();
  await audit(mobilePage, "Mobile 390px: navigation open");

  assert.equal(
    failures.length,
    0,
    `${failures.length} audited state(s) contain accessibility violations:\n${failures.join("\n\n")}`,
  );
  console.log(
    `\n${statesCompleted} states passed automated axe checks (${tags.join(", ")}). No messages sent. Manual accessibility review is still recommended.`,
  );
} catch (error) {
  console.error(`\nAccessibility checks failed after ${statesCompleted} completed states.`);
  console.error(error.message);
  process.exitCode = 1;
} finally {
  await browser?.close();
}
