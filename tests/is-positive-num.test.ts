import { IsPositive, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<IsPositive<2>, true, true> = true;
  expect(result).toBe(true);
});

test('not a limitation', () => {
  const result: TestType<
    IsPositive<10000000000000000000000000000>,
    true,
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsPositive<-54>, true, false> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsPositive<-54>, true, false> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsPositive<0>, true, true> = true;
  expect(result).toBe(true);
});
