import { NegativeFloat, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<NegativeFloat<-2>, never, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<NegativeFloat<-2.0>, never, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<NegativeFloat<-2.1>, -2.1, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<NegativeFloat<0>, never, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<NegativeFloat<-1.9998745>, -1.9998745, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<NegativeFloat<202.1>, never, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    NegativeFloat<-2000.000000002>,
    -2000.000000002,
    true
  > = true;
  expect(result).toBe(true);
});
