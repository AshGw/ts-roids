import { PositiveFloat, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<PositiveFloat<2.087>, 2.087, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<PositiveFloat<2>, never, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<PositiveFloat<222222222>, never, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<PositiveFloat<-2.0>, never, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<PositiveFloat<2.1>, 2.1, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<PositiveFloat<0>, never, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<PositiveFloat<0.00001>, 0.00001, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<PositiveFloat<1.9998745>, 1.9998745, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<PositiveFloat<-202.1>, never, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    PositiveFloat<2000.000000002>,
    2000.000000002,
    true
  > = true;
  expect(result).toBe(true);
});
