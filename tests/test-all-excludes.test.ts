import { IfExtends, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<
    IfExtends<string, string | number, true, false>,
    true,
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    IfExtends<number, string | number, true, false>,
    true,
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    IfExtends<boolean, string | number, true, false>,
    false,
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  type _IsString<T> = IfExtends<T, string, true, false>;
  const result: TestType<_IsString<string>, true, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  type _IsNumber<T> = IfExtends<T, number, true, false>;
  const result: TestType<_IsNumber<number>, true, true> = true;
  expect(result).toBe(true);
});
