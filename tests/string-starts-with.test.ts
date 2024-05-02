import { StringStartsWith, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<StringStartsWith<'barBaz', 'ba'>, true, true> = true;
  expect(result).toBe(true);
});
test('_', () => {
  const result: TestType<StringStartsWith<'barBaz', 'bar'>, true, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    StringStartsWith<'barBaz', 'barBaz'>,
    true,
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    StringStartsWith<'barBaz', 'barBazBar'>,
    false,
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<StringStartsWith<'', ''>, true, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<StringStartsWith<'0', '0'>, true, true> = true;
  expect(result).toBe(true);
});
