import { StringEndsWith, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<StringEndsWith<'barBaz', 'az'>, true, true> = true;
  expect(result).toBe(true);
});
test('_', () => {
  const result: TestType<StringEndsWith<'barBaz', 'Baz'>, true, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<StringEndsWith<'barBaz', 'barBaz'>, true, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    StringEndsWith<'barBaz', 'FoobarBaz'>,
    false,
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<StringEndsWith<'', ''>, true, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<StringEndsWith<'0', '0'>, true, true> = true;
  expect(result).toBe(true);
});
