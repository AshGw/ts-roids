import { EvenNumeric, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<
    EvenNumeric<200000000000000>,
    200000000000000,
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<EvenNumeric<0>, 0, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<EvenNumeric<2029>, never, true> = true;
  expect(result).toBe(true);
});
