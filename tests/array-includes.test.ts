import { ArrayIncludes, NewType, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<
    ArrayIncludes<[string, bigint, 2, 3, 5, 6, 7], string>,
    true,
    true
  > = true;
  expect(result).toBe(true);
});
test('newtypes are unique, even though they are both strings (T and string)', () => {
  type T = NewType<'T', string>;
  const result: TestType<
    ArrayIncludes<[T, 2, 3, 5, 6, 7], string>,
    false,
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    ArrayIncludes<[false, 2, 3, 5, 6, 7], false>,
    true,
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<ArrayIncludes<[-98], -98>, true, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<ArrayIncludes<[null], undefined>, false, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    ArrayIncludes<[{ readonly a: 'A' }], { a: 'A' }>,
    false,
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    ArrayIncludes<[{ readonly a: 'A' }], { readonly a: 'A' }>,
    true,
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    ArrayIncludes<['foo', 'bar', 'baz', 'fooBar'], 'fooBar'>,
    true,
    true
  > = true;
  expect(result).toBe(true);
});
