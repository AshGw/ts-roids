import {
  NonRequiredKeys,
  Primitive,
  Nullable,
  TestType,
  Optional,
  EmptyObject,
} from 'src';
import { test, expect, describe } from 'vitest';

describe('Non required as in, keep any property that is marked with the "?" operator, does not mean it will pick up properties with a type definion having undefined | other types', () => {
  test('_', () => {
    const result: TestType<
      NonRequiredKeys<{
        bar: string;
        foo: number;
        fooBar: string;
        baz?: Nullable;
        bazFoo: null | undefined;
        barFoo: Optional<Primitive>;
      }>,
      'baz',
      true
    > = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<
      NonRequiredKeys<{ a: number; b?: string }>,
      'b',
      true
    > = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<NonRequiredKeys<EmptyObject>, never, true> = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<
      NonRequiredKeys<{ a: undefined; b?: undefined; c: string; d: null }>,
      'b',
      true
    > = true;
    expect(result).toBe(true);
  });
});
