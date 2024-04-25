import { Numeric, ObjectProperties, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<
    ObjectProperties<{
      foo: () => void;
      bar: (a: any) => string;
      barBaz: string;
      bazBar: Numeric;
    }>,
    'barBaz' | 'bazBar',
    true
  > = true;
  expect(result).toBe(true);
});

test('Does not work on deep nested objects', () => {
  const result: TestType<
    ObjectProperties<{
      foo: () => void;
      bar: (a: any) => string;
      barBaz: string;
      x: {
        t: number;
      };
      bazBar: Numeric;
    }>,
    'x' | 'barBaz' | 'bazBar',
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    ObjectProperties<{
      barBaz: string;
      x: {
        a: () => number;
      };
      bazBar: Numeric;
    }>,
    'bazBar' | 'barBaz' | 'x',
    true
  > = true;
  expect(result).toBe(true);
});

test('', () => {
  const result: TestType<
    ObjectProperties<{
      barBaz: string;
      x: {
        a: () => number;
      };
      bazBar: Numeric;
      i: (x: string, b: symbol) => () => void;
    }>,
    'x' | 'bazBar' | 'barBaz',
    true
  > = true;
  expect(result).toBe(true);
});