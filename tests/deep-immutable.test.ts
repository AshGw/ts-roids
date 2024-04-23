import {
  Falsy,
  DeepImmutable,
  IsDeepImmutable,
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
  readonly a: () => 1;
  readonly x: string;
  readonly s: {
    readonly q: Nullable;
    readonly s: {
      readonly i: {
        readonly x: {
          readonly o: Maybe<Primitive>;
          readonly n: Falsy;
        };
        readonly e: 'foo';
      };
    };
  };
};

test('_', () => {
  const result: TestType<DeepImmutable<Actual>, Expected, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<IsDeepImmutable<Expected>, true, true> = true;
  expect(result).toBe(true);
});
