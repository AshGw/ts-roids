import { IsLiterallyAny, Nullable, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<IsLiterallyAny<undefined>, false, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsLiterallyAny<unknown>, false, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsLiterallyAny<any>, true, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsLiterallyAny<string>, false, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsLiterallyAny<unknown>, false, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsLiterallyAny<any | unknown>, true, true> = true;
  expect(result).toBe(true);
});

test('any union anything is still any, if some is type unsafe its all unsafe', () => {
  const result: TestType<IsLiterallyAny<any | Nullable>, true, true> = true;
  expect(result).toBe(true);
});
