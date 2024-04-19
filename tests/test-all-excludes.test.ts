import { ExcludeNullable, Nullable, Primitive, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<ExcludeNullable<string>, string, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<ExcludeNullable<string | null>, string, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<ExcludeNullable<null>, never, true> = true;
  expect(result).toBe(true);
});

test('only works on unions', () => {
  const result: TestType<
    ExcludeNullable<null | Primitive | string>,
    string | number | bigint | boolean | symbol,
    true
  > = true;
  expect(result).toBe(true);
});

test('does not work on objects', () => {
  const result: TestType<
    ExcludeNullable<{
      a: string;
      b: Nullable;
      c: unknown;
      d: {
        e: null;
      };
    }>,
    {
      a: string;
      b: Nullable;
      c: unknown;
      d: {
        e: null;
      };
    },
    true
  > = true;
  expect(result).toBe(true);
});
