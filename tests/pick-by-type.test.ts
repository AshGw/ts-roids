import { Numeric, Nullable, EmptyObject, PickByType, TestType } from 'src';
import { test, expect } from 'vitest';

type OneLevelDeep = {
  foo: boolean;
  bar?: Numeric;
  baz: Nullable;
  fooBaz: bigint;
  bazFoo: string | boolean;
};

test('_', () => {
  const result: TestType<
    PickByType<OneLevelDeep, bigint>,
    {
      fooBaz: bigint;
    },
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    PickByType<OneLevelDeep, string | boolean>,
    {
      foo: boolean;
      bazFoo: string | boolean;
    },
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    PickByType<OneLevelDeep, true>,
    EmptyObject,
    true
  > = true;
  expect(result).toBe(true);
});
