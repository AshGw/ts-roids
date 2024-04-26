import { IsEven, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<IsEven<200000000000000>, true, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsEven<0>, true, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsEven<2029>, false, true> = true;
  expect(result).toBe(true);
});
