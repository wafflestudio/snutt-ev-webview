import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const PORT = 3001;

const config: PlaywrightTestConfig = {
  testDir: './e2e',
  timeout: 30 * 1000,

  expect: { timeout: 5000 },

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    actionTimeout: 0,
    baseURL: `http://localhost:${PORT}`,
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    { name: 'Mobile Chrome', use: { ...devices['Pixel 5'] } },
    { name: 'Mobile Safari', use: { ...devices['iPhone 12'] } },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: 'e2e-results/',

  /* Run your local dev server before starting the tests */
  webServer: {
    command: `PORT=${PORT} yarn dev:test`,
    port: PORT,
  },
};

export default config;
