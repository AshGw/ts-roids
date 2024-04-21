import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    includeSource: ['src/**/[!index]*.ts'],
    coverage: {
      provider: 'istanbul',
      reporter: ['lcov', 'text', 'json', 'html'],
      all: true,
      include: ['src/**/*'],
      watermarks: {
        lines: [80, 95],
        functions: [80, 95],
        branches: [80, 95],
        statements: [80, 95],
      },
    },
  },
});
