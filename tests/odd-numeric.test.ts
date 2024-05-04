import { OddNumeric, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<
    OddNumeric<200000000000001>,
    200000000000001,
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<OddNumeric<1>, 1, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<OddNumeric<215848141>, 215848141, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<OddNumeric<21584812>, never, true> = true;
  expect(result).toBe(true);
});
