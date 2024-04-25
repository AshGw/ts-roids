import { Assign, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<
    Assign<{ d: 'd' }, [{ a: 'a' }, { b: 'b' }, { c: 'c' }]>,
    { a: 'a'; b: 'b'; c: 'c'; d: 'd' },
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    Assign<{ a: 'd' }, [{ a: 'a' }, { b: 'b' }, { c: 'c' }]>,
    {
      a: 'a';
      b: 'b';
      c: 'c';
    },
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    Assign<{ a: 'd'; d: 'd' }, [{ a: 'a' }, { b: 'b' }, { c: 'c' }]>,
    {
      a: 'a';
      b: 'b';
      c: 'c';
      d: 'd';
    },
    true
  > = true;
  expect(result).toBe(true);
});
