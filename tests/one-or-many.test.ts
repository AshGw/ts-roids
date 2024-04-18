import { EitherOneOrMany } from 'src';
import { expectTypeOf, test } from 'vitest';

test('OneOrMany<T> should handle a single value of type T', () => {
  const value1: EitherOneOrMany<number> = 10;
  expectTypeOf(value1).toEqualTypeOf<number>();
});

test('OneOrMany<T> should handle an array of values of type T', () => {
  const value2: EitherOneOrMany<string> = ['hello', 'world'];
  expectTypeOf(value2).toEqualTypeOf<string[]>();
});
