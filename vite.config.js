import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    name: 'stuff',
    include: ['test/**/*.js'],
    coverage: {
      provider: 'istanbul',
      include: ['src/**/*.js'],
      reporter: ['lcov', 'text', 'text-summary'],
    },
    globals: true,
    browser: {
      enabled: true,
      headless: true,
      name: 'chrome',
    },
  },
});
