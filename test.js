import { browser } from 'k6/browser';

export const options = {
  scenarios: {
    ui: {
      executor: 'constant-vus',
      exec: 'browserTest',
      vus: 20,
      duration: '5h45m',
      options: {
        browser: {
          type: 'chromium',
        },
      },
    },
  },
};

export async function browserTest() {
  const page = await browser.newPage();
  try {
    await page.goto('https://terterr.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(10000); // reste 10s sur la page avant de recommencer
  } finally {
    await page.close();
  }
}
