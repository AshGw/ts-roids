import { IsOdd, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<IsOdd<200000000000001>, true, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsOdd<1>, true, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsOdd<215848141>, true, true> = true;
  expect(result).toBe(true);
});
