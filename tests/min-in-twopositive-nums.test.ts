import { _MinInTwoPositiveNums, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<_MinInTwoPositiveNums<2, 3>, 2, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<_MinInTwoPositiveNums<0, 0.00004>, 0, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<_MinInTwoPositiveNums<54, 10000000>, 54, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<_MinInTwoPositiveNums<0, 1>, 0, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<_MinInTwoPositiveNums<0, 0>, 0, true> = true;
  expect(result).toBe(true);
});
