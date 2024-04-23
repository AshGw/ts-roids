import { Numeric, Nullable, OmitByType, TestType } from 'src';
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
    OmitByType<OneLevelDeep, bigint>,
    {
      foo: boolean;
      bar?: Numeric;
      baz: Nullable;
      bazFoo: string | boolean;
    },
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    OmitByType<OneLevelDeep, string | boolean>,
    {
      bar?: Numeric;
      baz: Nullable;
      fooBaz: bigint;
    },
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    OmitByType<OneLevelDeep, true>,
    OneLevelDeep,
    true
  > = true;
  expect(result).toBe(true);
});
