import { EqualStrlen, TestType } from 'src';
import { test, expect } from 'vitest';

test('not a limitation', () => {
  const result: TestType<EqualStrlen<'foo', 'bar'>, true, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<EqualStrlen<'foo', 'barBaz'>, false, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<EqualStrlen<'54', '22'>, true, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<EqualStrlen<'', ''>, true, true> = true;
  expect(result).toBe(true);
});
