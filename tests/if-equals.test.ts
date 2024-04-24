import { IfEquals, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<
    IfEquals<string, string | number, true, false>,
    false,
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    IfEquals<number, string | number, true, false>,
    false,
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    IfEquals<boolean, string | number, true, false>,
    false,
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  type _IsString<T> = IfEquals<T, string, true, false>;
  const result: TestType<_IsString<string>, true, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  type _IsNumber<T> = IfEquals<T, number, true, false>;
  const result: TestType<_IsNumber<number>, true, true> = true;
  expect(result).toBe(true);
});
