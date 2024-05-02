import { Numeric, Methods, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<
    Methods<{
      foo: () => void;
      bar: (a: any) => string;
      barBaz: string;
      bazBar: Numeric;
    }>,
    'foo' | 'bar',
    true
  > = true;
  expect(result).toBe(true);
});

test('Does not work on deep nested objects', () => {
  const result: TestType<
    Methods<{
      foo: () => void;
      bar: (a: any) => string;
      barBaz: string;
      x: {
        a: () => number;
      };
      bazBar: Numeric;
    }>,
    'foo' | 'bar',
    true
  > = true;
  expect(result).toBe(true);
});

test('should be never when no method is found', () => {
  const result: TestType<
    Methods<{
      barBaz: string;
      x: {
        a: () => number;
      };
      bazBar: Numeric;
    }>,
    never,
    true
  > = true;
  expect(result).toBe(true);
});

test('', () => {
  const result: TestType<
    Methods<{
      barBaz: string;
      x: {
        a: () => number;
      };
      bazBar: Numeric;
      i: (x: string, b: symbol) => () => void;
    }>,
    'i',
    true
  > = true;
  expect(result).toBe(true);
});
