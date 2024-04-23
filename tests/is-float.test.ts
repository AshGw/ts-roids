import { IsFloat, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<IsFloat<0>, false, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsFloat<100000.001>, true, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsFloat<-54.04>, true, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsFloat<1>, false, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsFloat<0.001>, true, true> = true;
  expect(result).toBe(true);
});
