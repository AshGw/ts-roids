import { Numeric, Nullable, OmitExactlyByType, TestType } from 'src';
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
    OmitExactlyByType<OneLevelDeep, bigint>,
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

test('matches the exact type, if it was OmitByType it would have pulled `foo` out', () => {
  const result: TestType<
    OmitExactlyByType<OneLevelDeep, string | boolean>,
    {
      foo: boolean;
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
    OmitExactlyByType<OneLevelDeep, true>,
    OneLevelDeep,
    true
  > = true;
  expect(result).toBe(true);
});
