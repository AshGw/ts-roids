import { Falsy, ArrayFilter, Nullable, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<ArrayFilter<[0, 1, 2], Falsy>, [0], true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<ArrayFilter<[0, 1, 2], Falsy>, [0], true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<ArrayFilter<[0, 1, 2], 0 | 1>, [0, 1], true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<ArrayFilter<[0, 1, 2], 2>, [2], true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    ArrayFilter<[0, 1, 2, null], Nullable>,
    [null],
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    ArrayFilter<[0, 1, 2, null], 0 | ''>,
    [0],
    true
  > = true;
  expect(result).toBe(true);
});
