import { Numeric, Properties, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<
    Properties<{
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
    Properties<{
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
    Properties<{
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
    Properties<{
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
