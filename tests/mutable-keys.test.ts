import { MutableKeys, Maybe, Nullable, TestType, Newable } from 'src';
import { test, expect } from 'vitest';

test('does not go deep', () => {
  const result: TestType<
    MutableKeys<{
      a: number;
      readonly b: string;
      c: {
        a: string;
        d: { readonly x: Nullable; v: Maybe<Newable> };
      };
    }>,
    'a' | 'c',
    true
  > = true;
  expect(result).toBe(true);
});
