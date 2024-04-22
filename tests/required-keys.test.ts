import {
  RequiredKeys,
  Primitive,
  Nullable,
  TestType,
  Optional,
  EmptyObject,
} from 'src';
import { test, expect, describe } from 'vitest';

describe('required as in, pull out any property that is marked with the "?" operator, does not mean it will pick up properties with a type definion having undefined | other types', () => {
  test('_', () => {
    const result: TestType<
      RequiredKeys<{
        bar: string;
        foo: number;
        fooBar: string;
        baz?: Nullable;
        bazFoo: null | undefined;
        barFoo: Optional<Primitive>;
      }>,
      'bar' | 'foo' | 'fooBar' | 'bazFoo' | 'barFoo',
      true
    > = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<
      RequiredKeys<{ a: number; b?: string }>,
      'a',
      true
    > = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<RequiredKeys<EmptyObject>, never, true> = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<
      RequiredKeys<{ a: undefined; b?: undefined; c: string; d: null }>,
      'a' | 'c' | 'd',
      true
    > = true;
    expect(result).toBe(true);
  });
});
