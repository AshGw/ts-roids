import { Numeric, PartialExcept, Nullable, TestType } from 'src';
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
    PartialExcept<OneLevelDeep, 'foo'>,
    {
      foo: boolean;
    } & Partial<Omit<OneLevelDeep, 'foo'>>,
    true
  > = true;
  expect(result).toBe(true);
});
test('_', () => {
  const result: TestType<
    PartialExcept<OneLevelDeep, 'bazFoo'>,
    {
      bazFoo: string | boolean;
    } & Partial<Omit<OneLevelDeep, 'bazFoo'>>,
    true
  > = true;
  expect(result).toBe(true);
});
