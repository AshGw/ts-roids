import { ArrayMin, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<ArrayMin<[2]>, 2, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<ArrayMin<[-54, 2, 0, 999, 69, 2]>, -54, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    ArrayMin<[-54, -2, -90, -72, -69, -202]>,
    -202,
    true
  > = true;
  expect(result).toBe(true);
});
