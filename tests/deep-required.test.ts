import {
  Falsy,
  DeepRequired,
  Primitive,
  IsDeepRequired,
  Maybe,
  Nullable,
  TestType,
} from 'src';
import { test, expect } from 'vitest';

type Expected = {
  a: () => 1;
  x: string;
  s: {
    q: Nullable;
    s: {
      i: {
        x: {
          o: Maybe<Primitive>;
          n: Falsy;
        };
        e: 'foo';
      };
    };
  };
};

type Actual = {
  a?: () => 1;
  x?: string;
  s?: {
    q?: Nullable;
    s?: {
      i?: {
        x?: {
          o?: Maybe<Primitive>;
          n?: Falsy;
        };
        e?: 'foo';
      };
    };
  };
};

test('_', () => {
  const result: TestType<DeepRequired<Actual>, Expected, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsDeepRequired<Expected>, true, true> = true;
  expect(result).toBe(true);
});
