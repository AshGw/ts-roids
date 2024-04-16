import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';
import { MaybeUndefined } from '@/index';

function _getBoolean(enVar: MaybeUndefined<string>): boolean {
  if (enVar === undefined) {
    return false;
  }
  const asNumber = Number(enVar);
  return Number.isNaN(asNumber)
    ? Boolean(String(enVar).toLowerCase().replace('false', ''))
    : Boolean(asNumber);
}

const _useCompiledTests = _getBoolean(process.env['USE_COMPILED_TESTS']);

const _testFilePattern = `${
  _useCompiledTests ? './tests-compiled' : '.'
}/**/*.test.${_useCompiledTests ? 'js' : 'ts'}`;

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    include: [_testFilePattern],
    coverage: {
      all: true,
      include: ['src/**/*'],
      reporter: ['lcov', 'text'],
      watermarks: {
        lines: [80, 95],
        functions: [80, 95],
        branches: [80, 95],
        statements: [80, 95],
      },
    },
  },
});
