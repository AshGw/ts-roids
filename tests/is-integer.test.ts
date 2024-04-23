import { IsInteger, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<IsInteger<0>, true, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsInteger<1000000>, true, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsInteger<-54>, true, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsInteger<1>, true, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsInteger<0.001>, false, true> = true;
  expect(result).toBe(true);
});
