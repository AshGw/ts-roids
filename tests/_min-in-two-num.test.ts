import { _MinInTwoNums, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<_MinInTwoNums<2, 1>, 1, true> = true;
  expect(result).toBe(true);
});

test('not a limitation', () => {
  const result: TestType<_MinInTwoNums<-87, 777>, -87, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<_MinInTwoNums<-54, 21>, -54, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<_MinInTwoNums<-877, -999>, -877, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<_MinInTwoNums<-0, 0>, 0, true> = true;
  expect(result).toBe(true);
});
