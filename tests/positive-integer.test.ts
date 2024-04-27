import { PositiveInteger, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<PositiveInteger<2>, 2, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<PositiveInteger<0>, 0, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<PositiveInteger<-1>, never, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<PositiveInteger<202.1>, never, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<PositiveInteger<202>, 202, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    PositiveInteger<2000000000002>,
    2000000000002,
    true
  > = true;
  expect(result).toBe(true);
});
