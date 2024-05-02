import { Numeric, ReplaceKeys, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  type A = {
    bar: string;
    foo: number;
    fooBar: string;
  };
  const result: TestType<
    ReplaceKeys<A, 'bar', { bar: Numeric }>,
    {
      bar: Numeric;
      foo: number;
      fooBar: string;
    },
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  type A = {
    bar: string;
    foo: number;
    fooBar: string;
  };
  const result: TestType<
    ReplaceKeys<A, 'fooBar' | 'foo', { fooBar: Numeric; foo: string }>,
    {
      bar: string;
      foo: string;
      fooBar: Numeric;
    },
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  type A = {
    bar: string;
    foo: number;
    fooBar: string;
  };
  const result: TestType<
    ReplaceKeys<A, 'fooBar' | 'foo', { noFoo: Numeric }>,
    {
      bar: string;
      foo: never;
      fooBar: never;
    },
    true
  > = true;
  expect(result).toBe(true);
});
