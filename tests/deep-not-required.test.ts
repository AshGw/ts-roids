import {
  Falsy,
  DeepNotRequired,
  Primitive,
  Maybe,
  IsDeepNotRequired,
  Nullable,
  TestType,
} from 'src';
import { test, expect } from 'vitest';

type Actual = {
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

type Expected = {
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
  const result: TestType<DeepNotRequired<Actual>, Expected, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsDeepNotRequired<Expected>, true, true> = true;
  expect(result).toBe(true);
});
