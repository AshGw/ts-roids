import {
  Falsy,
  DeepNonRequired,
  Primitive,
  Maybe,
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
  const result: TestType<DeepNonRequired<Actual>, Expected, true> = true;
  expect(result).toBe(true);
});
