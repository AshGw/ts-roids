import { StringifyPrimitive, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<StringifyPrimitive<2>, '2', true> = true;
  expect(result).toBe(true);
});

test('not a limitation', () => {
  const result: TestType<
    StringifyPrimitive<10000000000000000000000000000>,
    '1e+28',
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<StringifyPrimitive<-54>, '-54', true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    StringifyPrimitive<boolean>,
    'false' | 'true',
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<StringifyPrimitive<null>, 'null', true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    StringifyPrimitive<undefined>,
    'undefined',
    true
  > = true;
  expect(result).toBe(true);
});
