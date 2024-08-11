import {
  Numeric,
  Nullable,
  OmitExactlyByTypeDeep,
  TestType,
  EmptyObject,
} from 'src';
import { test, expect } from 'vitest';

type OneLevelDeep = {
  foo: boolean;
  bar?: Numeric;
  baz: Nullable;
  fooBaz: bigint;
  bazFoo: string | boolean;
};

test('_', () => {
  const result: TestType<
    OmitExactlyByTypeDeep<OneLevelDeep, bigint>,
    {
      foo: boolean;
      bar?: Numeric;
      baz: Nullable;
      bazFoo: string | boolean;
    },
    true
  > = true;
  expect(result).toBe(true);
});
test('_', () => {
  const result: TestType<
    OmitExactlyByTypeDeep<
      {
        isActive: boolean;
        count?: number;
        description: string | null;
        details: {
          id: bigint;
          name: string;
          nested: {
            title: string;
            subtitle: string;
            moreDetails: {
              numberId: bigint;
            };
          };
        };
        additionalInfo: string | boolean;
      },
      bigint
    >,
    {
      isActive: boolean;
      count?: number;
      description: string | null;
      details: {
        name: string;
        nested: {
          title: string;
          subtitle: string;
          moreDetails: EmptyObject;
        };
      };
      additionalInfo: string | boolean;
    },
    true
  > = true;
  expect(result).toBe(true);
});

test('matches the exact type, if it was OmitByType it would have pulled `foo` out', () => {
  const result: TestType<
    OmitExactlyByTypeDeep<OneLevelDeep, string | boolean>,
    {
      foo: boolean;
      bar?: Numeric;
      baz: Nullable;
      fooBaz: bigint;
    },
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    OmitExactlyByTypeDeep<OneLevelDeep, true>,
    OneLevelDeep,
    true
  > = true;
  expect(result).toBe(true);
});
