import { ArrayMax, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<ArrayMax<[2]>, 2, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<ArrayMax<[-54, 2, 0, 999, 69, 2]>, 999, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    ArrayMax<[-54, -2, -90, -72, -69, -202]>,
    -2,
    true
  > = true;
  expect(result).toBe(true);
});
