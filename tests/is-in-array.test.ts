import { TestType, IsInArray } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<IsInArray<[0, 1, 2], 0>, true, true> = true;
  expect(result).toBe(true);
});

test('This is limited to only work on one dimensional arrays', () => {
  const result: TestType<
    IsInArray<[0, 1, [69, 22, [99, 88]]], 88>,
    false,
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsInArray<[99, 88], 88>, true, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsInArray<[unknown, any], number>, false, true> = true;
  expect(result).toBe(true);
});
