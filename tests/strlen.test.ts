import { Strlen, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<Strlen<'foo'>, 3, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<Strlen<'999999999'>, 9, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<Strlen<'barBaz'>, 6, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<Strlen<''>, 0, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<Strlen<'0'>, 1, true> = true;
  expect(result).toBe(true);
});
