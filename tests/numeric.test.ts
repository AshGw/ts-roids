import { Numeric } from 'src';
import { describe, assertType, expect, expectTypeOf, test, it } from 'vitest';

test.fails('fail test', () => {
  // @ts-expect-error, it cannot be null, it should error out
  expect(assertType<Numeric>(null)).rejects.toBe(true);
});

test('concrete types', () => {
  expectTypeOf(21).toMatchTypeOf<Numeric>();
  expectTypeOf(9007199254099).toMatchTypeOf<Numeric>();
  expectTypeOf(BigInt(69)).toMatchTypeOf<Numeric>();
  expectTypeOf(Number(69)).toMatchTypeOf<Numeric>();
});

describe('_', () => {
  it('should be defined', () => {
    const _: Numeric = 1;
    expect(_).toBeDefined();
  });
});
