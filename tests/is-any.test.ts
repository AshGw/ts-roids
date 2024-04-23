import { IsAny, Nullable, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<IsAny<undefined>, false, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsAny<unknown>, false, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsAny<any>, true, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsAny<string>, false, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsAny<unknown>, false, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsAny<any | unknown>, true, true> = true;
  expect(result).toBe(true);
});

test('any union anything is still any, if some is type unsafe its all unsafe', () => {
  const result: TestType<IsAny<any | Nullable>, true, true> = true;
  expect(result).toBe(true);
});
