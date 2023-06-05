import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    name: 'puppeteer-tests',
    include: ['test/unit/puppeteer/delete-me-test.js'],
    // include: ['test/unit/puppeteer/puppeteer-test.js'],
    coverage: {
      provider: 'istanbul',
      include: ['src/**/*.js'],
      reporter: ['lcov', 'text', 'text-summary'],
    },
    globals: true,
    // browser: {
    //   enabled: true,
    //   headless: true,
    //   name: 'chrome',
    // },
  },
});
