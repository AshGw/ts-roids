/* eslint-disable */
import { describe } from 'node:test';
import {
  IsArray,
  IsArrayOf,
  IsNullable,
  IsAnyFunction,
  IsFunction,
  IsObject,
  UnknownFunction,
  AnyFunction,
  TestType,
} from 'src';

import { test, expect } from 'vitest';
describe('Test IsObject<T>', () => {});
test('_', () => {
  const result: TestType<IsObject<{ name: string }>, true, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsObject<object>, true, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsObject<string>, false, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsObject<Record<string, boolean>>, true, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsObject<string | boolean>, false, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsObject<UnknownFunction>, false, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsObject<AnyFunction>, false, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsObject<any[]>, false, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsObject<undefined>, false, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsObject<null>, false, true> = true;
  expect(result).toBe(true);
});
