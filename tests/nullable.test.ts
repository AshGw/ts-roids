import { Nullable } from 'src';
import { describe, assertType, expect, expectTypeOf, test, it } from 'vitest';

test.fails('fail test', () => {
  // @ts-expect-error, it cannot be this type, it should error out
  expect(assertType<Nullable>({ foo: boolean })).rejects.toBe(true);
});

test('concrete types', () => {
  expectTypeOf(null).toMatchTypeOf<Nullable>();
  expectTypeOf(undefined).toMatchTypeOf<Nullable>();
});

describe('_', () => {
  it('should accept null', () => {
    const value: Nullable = null;
    expect(value).toBeNull();
  });
  it('should accept undefined', () => {
    const value: Nullable = undefined;
    expect(value).toBeUndefined();
  });

  it('should handle type unions with Nullable', () => {
    type _Union = string | Nullable;
    const value1: _Union = 'foo';
    expect(value1).toBe('foo');
    const value2: _Union = null;
    expect(value2).toBeNull();
    const value3: _Union = undefined;
    expect(value3).toBeUndefined();
  });
});
