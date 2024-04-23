import { _MaxInTwoPositiveNums, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<_MaxInTwoPositiveNums<2, 3>, 3, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    _MaxInTwoPositiveNums<0, 0.00004>,
    0.00004,
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    _MaxInTwoPositiveNums<54, 10000000>,
    10000000,
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<_MaxInTwoPositiveNums<0, 1>, 1, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<_MaxInTwoPositiveNums<0, 0>, 0, true> = true;
  expect(result).toBe(true);
});
