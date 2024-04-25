import { CommonKeys, EmptyObject, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<
    CommonKeys<{ d: 'd' }, [{ a: 'a' }, { b: 'b' }, { c: 'c' }]>,
    EmptyObject,
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    CommonKeys<{ d: 'd' }, { d: { d: 'a' }; p: { b: 'b' }; x: { c: 'c' } }>,
    { d: 'd' },
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    CommonKeys<
      { d: 'first objects d' },
      { d: 'd'; p: { b: 'b' }; x: { c: 'c' } }
    >,
    { d: 'first objects d' },
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    CommonKeys<
      { d: 'first objects d'; x: 'also first objects x' },
      { d: 'd'; p: { b: 'b' }; x: { c: 'c' } }
    >,
    { d: 'first objects d'; x: 'also first objects x' },
    true
  > = true;
  expect(result).toBe(true);
});
