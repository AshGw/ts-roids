import { Even, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<Even<200000000000000>, 200000000000000, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<Even<0>, 0, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<Even<2029>, never, true> = true;
  expect(result).toBe(true);
});
