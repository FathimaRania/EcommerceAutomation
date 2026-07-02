// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({

  // Location of test files
  testDir: './tests',

  // Run tests in parallel
  fullyParallel: true,

  // Prevent accidental test.only in CI
  forbidOnly: !!process.env.CI,

  // Retry failed tests in CI
  retries: process.env.CI ? 2 : 0,

  // Limit workers in CI
  workers: process.env.CI ? 1 : undefined,

  // Reporters
  reporter: [
    ['html'],
    ['allure-playwright']
  ],

  // Shared settings
  use: {
    baseURL: 'https://www.saucedemo.com',

    headless: true,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'on-first-retry'
  },

  // Browser Projects
  projects: [

    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox']
      }
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari']
      }
    }

  ]

});