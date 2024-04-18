import { OneOrMany } from 'src';
import { expectTypeOf, test } from 'vitest';

test('OneOrMany<T> should handle a single value of type T', () => {
  const value1: OneOrMany<number> = 10;
  expectTypeOf(value1).toEqualTypeOf<number>();
});

test('OneOrMany<T> should handle an array of values of type T', () => {
  const value2: OneOrMany<string> = ['hello', 'world'];
  expectTypeOf(value2).toEqualTypeOf<string[]>();
});
