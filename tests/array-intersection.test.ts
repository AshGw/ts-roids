import { ArrayIntersection, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<
    ArrayIntersection<[[1, 0, 1], 0 | 1 | -1, 0 | 1]>,
    0 | 1,
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    ArrayIntersection<[[1, 0, 1], [0, 1, -1], 1]>,
    1,
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    ArrayIntersection<[[1, 0], [0, 1], [0, 0]]>,
    0,
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    ArrayIntersection<[[1, 0, 1], [0, 1, -1], [0, 0, 1]]>,
    0 | 1,
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    ArrayIntersection<[[1, 0], [-1, -1], [5, 6]]>,
    never,
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    ArrayIntersection<[[1, 0], [0, 1], [0, 0]]>,
    0,
    true
  > = true;
  expect(result).toBe(true);
});
