import { _MaxInTwoNums, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<_MaxInTwoNums<2, 1>, 2, true> = true;
  expect(result).toBe(true);
});

test('not a limitation', () => {
  const result: TestType<_MaxInTwoNums<-87, 777>, 777, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<_MaxInTwoNums<-54, 21>, 21, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<_MaxInTwoNums<-877, -999>, -877, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<_MaxInTwoNums<-0, 0>, 0, true> = true;
  expect(result).toBe(true);
});
