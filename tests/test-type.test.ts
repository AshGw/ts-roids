import { Keys, Primitive, Nullable, Numeric, TestType } from 'src';
import { test, expect } from 'vitest';

type Foo = {
  bar: string;
  foo: number;
  fooBar: string;
};

test('_', () => {
  type PersonKeys = Keys<Foo>;
  const result: TestType<PersonKeys, 'bar' | 'foo' | 'fooBar', true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    Primitive,
    symbol | Nullable | string | Numeric | boolean,
    true
  > = true;
  expect(result).toBe(true);
});
