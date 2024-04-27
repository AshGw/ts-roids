import { NegativeInteger, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<NegativeInteger<-2>, -2, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<NegativeInteger<0>, never, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<NegativeInteger<-1>, -1, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<NegativeInteger<-202.1>, never, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<NegativeInteger<-202>, -202, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    NegativeInteger<-2000000000002>,
    -2000000000002,
    true
  > = true;
  expect(result).toBe(true);
});
