import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Паралельний запуск тестів
  fullyParallel: true,

  // Забороняє залишати test.only у коді при запуску в CI
  forbidOnly: !!process.env.CI,

  // Ретраї при падінні тестів у CI
  retries: process.env.CI ? 2 : 0,

  // Менше воркерів на CI для стабільності
  workers: process.env.CI ? 1 : undefined,

  // Репортери — Allure + HTML
  reporter: [
    ['list'],                      // консольний вивід
    ['html', { outputFolder: 'playwright-report', open: 'never' }], // звичайний html
    ['allure-playwright'],          // основний репортер
  ],

  use: {

    trace: 'on-first-retry',

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
