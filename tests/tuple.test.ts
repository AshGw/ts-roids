import { Numeric, Tuple, Nullable, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<Tuple<69[]>, never, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<Tuple<[69]>, [69], true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<Tuple<Nullable[]>, never, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<Tuple<Numeric[]>, never, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    Tuple<[Numeric | Nullable]>,
    [Numeric | Nullable],
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<Tuple<[]>, [], true> = true;
  expect(result).toBe(true);
});
