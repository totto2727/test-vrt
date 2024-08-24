/* eslint-disable node/prefer-global/process */
import { defineConfig, devices, expect } from '@playwright/test'

export default defineConfig({
  testDir: 'src/playwright',
  snapshotPathTemplate: '.snapshot/{testFilePath}/{arg}-{projectName}-{platform}{ext}',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 3 : undefined,
  reporter: 'html',
  use: {
    baseURL: "https://astro.build",
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'android',
      use: { ...devices['Galaxy S8'] },
    },
    {
      name: 'android tab',
      use: { ...devices['Galaxy Tab S4'] },
    },
    {
      name: 'iPhone',
      use: { ...devices['iPhone 8'] },
    },
    {
      name: 'ipad',
      use: { ...devices['iPad Mini'] },
    },
  ],
})
