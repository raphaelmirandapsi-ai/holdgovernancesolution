import { writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { chromium } from "@playwright/test";

const browser = await chromium.launch({
  executablePath:
    process.env.CHROMIUM_PATH ||
    (existsSync("/usr/bin/chromium") ? "/usr/bin/chromium" : undefined),
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
try {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(process.env.BASE_URL || "http://127.0.0.1:5173", {
    waitUntil: "networkidle",
  });
  const assets = await page.evaluate(() => {
    const ns = "http://www.w3.org/2000/svg";
    const outer = document.createElementNS(ns, "svg");
    outer.setAttribute("xmlns", ns);
    outer.setAttribute("viewBox", "0 0 480 140");
    outer.setAttribute("width", "1440");
    outer.setAttribute("height", "420");
    outer.setAttribute("color", "#eef9f8");
    outer.setAttribute("role", "img");
    outer.setAttribute(
      "aria-label",
      "HOLD — Humanizar, Organizar, Liderar e Desenvolver",
    );
    const mark = document
      .querySelector(".hold-brand-logo__wordmark")
      .cloneNode(true);
    mark.removeAttribute("class");
    mark.removeAttribute("aria-hidden");
    mark.removeAttribute("focusable");
    mark.setAttribute("x", "4");
    mark.setAttribute("y", "6");
    mark.setAttribute("width", "310");
    mark.setAttribute("height", "124");
    outer.append(mark);
    ["HUMANIZAR&", "ORGANIZAR&", "LIDERAR&", "DESENVOLVER"].forEach(
      (word, index) => {
        const text = document.createElementNS(ns, "text");
        text.setAttribute("x", "329");
        text.setAttribute("y", String(45 + index * 19));
        text.setAttribute("fill", "#68ded5");
        text.setAttribute("font-family", "Arial, Helvetica, sans-serif");
        text.setAttribute("font-size", "15");
        text.setAttribute("font-weight", "700");
        const initial = document.createElementNS(ns, "tspan");
        initial.setAttribute("fill", "#eef9f8");
        initial.textContent = word[0];
        text.append(initial, document.createTextNode(word.slice(1)));
        outer.append(text);
      },
    );
    const brain = document.querySelector(".about-brain").cloneNode(true);
    brain.removeAttribute("class");
    brain.removeAttribute("aria-hidden");
    brain.removeAttribute("focusable");
    brain.setAttribute("width", "360");
    brain.setAttribute("height", "372");
    brain.setAttribute("role", "img");
    brain.setAttribute("aria-label", "Símbolo da HOLD");
    const serializer = new XMLSerializer();
    return {
      logo: serializer.serializeToString(outer),
      brain: serializer.serializeToString(brain),
    };
  });
  await mkdir("public/brand", { recursive: true });
  await writeFile("public/brand/hold-logo.svg", assets.logo + "\n");
  await writeFile("public/brand/hold-simbolo.svg", assets.brain + "\n");
  console.log(
    "Exported public/brand/hold-logo.svg and hold-simbolo.svg from the website components.",
  );
} finally {
  await browser.close();
}
