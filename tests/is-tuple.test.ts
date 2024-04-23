import { Numeric, IsTuple, Nullable, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<IsTuple<69[]>, false, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsTuple<[69]>, true, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsTuple<Nullable[]>, false, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsTuple<Numeric[]>, false, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsTuple<[Numeric | Nullable]>, true, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsTuple<[]>, true, true> = true;
  expect(result).toBe(true);
});
