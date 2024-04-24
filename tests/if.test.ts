import {
  If,
  TestType,
  IsNumeric,
  IsFalsy,
  IsNegative,
  IsInteger,
  IsFloat,
  IsNever,
  Not,
  IsPositive,
} from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  type ExcpectedToBe = true;
  const result: TestType<
    If<IsFloat<5.5>, true, false>,
    ExcpectedToBe,
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  type ExcpectedToBe = true;
  const result: TestType<
    If<IsInteger<5>, true, false>,
    ExcpectedToBe,
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  type ExcpectedToBe = true;
  const result: TestType<
    If<IsFalsy<0>, true, false>,
    ExcpectedToBe,
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  type ExcpectedToBe = false;
  const result: TestType<
    If<IsFalsy<1>, true, false>,
    ExcpectedToBe,
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  type ExcpectedToBe = true;
  const result: TestType<
    If<IsNumeric<1>, true, false>,
    ExcpectedToBe,
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  type ExcpectedToBe = true;
  const result: TestType<
    If<IsNegative<-1>, true, false>,
    ExcpectedToBe,
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  type ExcpectedToBe = true;
  const result: TestType<
    If<IsPositive<1>, true, false>,
    ExcpectedToBe,
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  type ExcpectedToBe = true;
  const result: TestType<
    If<IsNever<never>, true, false>,
    ExcpectedToBe,
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  type ExcpectedToBe = false;
  const result: TestType<
    If<Not<IsNever<never>>, true, false>,
    ExcpectedToBe,
    true
  > = true;
  expect(result).toBe(true);
});
