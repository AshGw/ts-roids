import { StringifyNum, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<StringifyNum<2>, '2', true> = true;
  expect(result).toBe(true);
});

test('not a limitation', () => {
  const result: TestType<
    StringifyNum<10000000000000000000000000000>,
    '1e+28',
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<StringifyNum<-54>, '-54', true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<StringifyNum<-54>, '-11', false> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<StringifyNum<0>, '0', true> = true;
  expect(result).toBe(true);
});
