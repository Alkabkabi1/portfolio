import { chromium } from 'playwright';
import { mkdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'assets', 'readme');
const baseUrl = `file:///${path.join(root, 'index.html').replace(/\\/g, '/')}`;

const shots = [
  { name: 'hero-light', theme: 'light', target: null },
  { name: 'hero-dark', theme: 'dark', target: null },
  { name: 'academics', theme: 'light', target: '#academics' },
  { name: 'training', theme: 'light', target: '#training' },
  { name: 'teamhub', theme: 'light', target: '#teamhub' },
  { name: 'ruwad', theme: 'light', target: '#ruwad' },
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

for (const shot of shots) {
  await page.goto(baseUrl, { waitUntil: 'networkidle' });
  await page.evaluate(({ theme }) => {
    localStorage.setItem('portfolio-locale', 'en');
    localStorage.setItem('portfolio-theme', theme);
    document.documentElement.setAttribute('lang', 'en');
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('data-theme', theme);
  }, { theme: shot.theme });

  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(400);

  if (shot.target) {
    await page.locator(shot.target).scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
  }

  await page.screenshot({
    path: path.join(outDir, `${shot.name}.png`),
    fullPage: false,
  });
  console.log(`saved ${shot.name}.png`);
}

await browser.close();
