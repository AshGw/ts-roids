import { DeepOmit, TestType, EmptyObject } from 'src';
import { test, expect } from 'vitest';

type Actual = {
  a: {
    b: string;
    b2: {
      c: {
        d: number;
      };
    };
  };
};

test('_', () => {
  const result: TestType<
    DeepOmit<Actual, 'a.b2.c'>,
    { a: { b: string; b2: EmptyObject } },
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    DeepOmit<Actual, 'a.b2.c'>,
    { a: { b: string; b2: EmptyObject } },
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<DeepOmit<Actual, 'a'>, EmptyObject, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<DeepOmit<Actual, 'b'>, Actual, true> = true;
  expect(result).toBe(true);
});
