import {
  Numeric,
  Nullable,
  EmptyObject,
  PickExactlyByType,
  TestType,
} from 'src';
import { test, expect } from 'vitest';

type OneLevelDeep = {
  foo: boolean;
  bar?: Numeric;
  baz: Nullable;
  fooBaz: bigint;
  bazFoo: string | boolean;
  seven: 7;
  aNum: number;
};

test('_', () => {
  const result: TestType<
    PickExactlyByType<OneLevelDeep, bigint>,
    {
      fooBaz: bigint;
    },
    true
  > = true;
  expect(result).toBe(true);
});

test('does not pick up 7', () => {
  const result: TestType<
    PickExactlyByType<OneLevelDeep, number>,
    {
      aNum: number;
    },
    true
  > = true;
  expect(result).toBe(true);
});

test('picks exactly 7', () => {
  const result: TestType<
    PickExactlyByType<OneLevelDeep, 7>,
    {
      seven: 7;
    },
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    PickExactlyByType<OneLevelDeep, string | boolean>,
    {
      bazFoo: string | boolean;
    },
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    PickExactlyByType<OneLevelDeep, true>,
    EmptyObject,
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    PickExactlyByType<OneLevelDeep, boolean>,
    {
      foo: boolean;
    },
    true
  > = true;
  expect(result).toBe(true);
});
