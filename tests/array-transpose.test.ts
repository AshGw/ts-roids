import { Optional, Nullable, Numeric, TestType, ArrayTranspose } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<
    ArrayTranspose<[[1, Optional<Numeric>, Nullable, 3], [4, 5, 6]]>,
    [[1, 4], [Optional<Numeric>, 5], [Nullable, 6], [3, never]],
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<ArrayTranspose<[[1]]>, [[1]], true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    ArrayTranspose<[[1, true, 3], [4, 5, 6]]>,
    [[1, 4], [true, 5], [3, 6]],
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    ArrayTranspose<[[1, 'i'], [3, 4]]>,
    [[1, 3], ['i', 4]],
    true
  > = true;
  expect(result).toBe(true);
});
