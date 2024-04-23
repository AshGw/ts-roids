import { IsNegative, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<IsNegative<2>, false, true> = true;
  expect(result).toBe(true);
});

test('not a limitation', () => {
  const result: TestType<
    IsNegative<10000000000000000000000000000>,
    false,
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsNegative<-54>, true, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsNegative<-54>, true, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsNegative<0>, false, true> = true;
  expect(result).toBe(true);
});
