import { ImmutableKeys, Maybe, Nullable, TestType, Newable } from 'src';
import { test, expect } from 'vitest';

test('does not go deep', () => {
  const result: TestType<
    ImmutableKeys<{
      a: number;
      readonly b: string;
      c: {
        a: string;
        d: { readonly x: Nullable; v: Maybe<Newable> };
      };
    }>,
    'b',
    true
  > = true;
  expect(result).toBe(true);
});
