import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',

  timeout: Number(process.env.TIMEOUT) || 60000,

  expect: {
    timeout: 10000
  },

  retries: 1,

  fullyParallel: true,

  reporter: [
    ['list'],
    ['html', { outputFolder: 'reports/html', open: 'never' }]
  ],

  use: {
    baseURL: process.env.BASE_URL,

    browserName: 'chromium',

    headless: process.env.HEADLESS === 'true',

    viewport: {
      width: 1920,
      height: 1080
    },

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure'
  },

  projects: [
    {
      name: 'setup',

      testMatch: /.*login\.setup\.ts/
    },

    {
      name: 'chromium',

      use: {
        ...devices['Desktop Chrome'],

        storageState: 'playwright/.auth/user.json'
      },

      dependencies: ['setup']
    }
  ]
});