import { NumerifyString, TestType, IsNegativeFloat } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<NumerifyString<'54'>, 54, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    NumerifyString<'69962000000000'>,
    69962000000000,
    true
  > = true;
  expect(result).toBe(true);
});

test('works with floats as well', () => {
  const result: TestType<
    NumerifyString<'699620.000000001'>,
    699620.000000001,
    true
  > = true;
  expect(result).toBe(true);
});

test('works with negative floats as well', () => {
  const result: TestType<
    IsNegativeFloat<NumerifyString<'-699620.000000001'>>,
    true,
    true
  > = true;
  expect(result).toBe(true);
});

test('works with negative floats as well', () => {
  const result: TestType<
    NumerifyString<'-699620.000000001'>,
    -699620.000000001,
    true
  > = true;
  expect(result).toBe(true);
});
