import { Abs, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<Abs<2>, 2, true> = true;
  expect(result).toBe(true);
});

test('not a limitation', () => {
  const result: TestType<Abs<1000000>, 1000000, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<Abs<-54>, 54, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<Abs<54>, 54, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<Abs<0>, 0, true> = true;
  expect(result).toBe(true);
});
