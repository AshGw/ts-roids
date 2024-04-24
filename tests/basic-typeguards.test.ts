/* eslint-disable */
import { BlobOptions } from 'node:buffer';
import { describe } from 'node:test';
import {
  IsArray,
  IsArrayIncludesTypeof,
  IsArrayOf,
  IsNullable,
  IsAnyFunction,
  IsFunction,
  IsObject,
  UnknownFunction,
  AnyFunction,
  TestType,
} from 'src';

import { test, expect } from 'vitest';

describe('Test IsObject<T>', () => {
  test('_', () => {
    const result: TestType<IsObject<{ name: string }>, true, true> = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<IsObject<object>, true, true> = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<IsObject<string>, false, true> = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<
      IsObject<Record<string, boolean>>,
      true,
      true
    > = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<IsObject<string | boolean>, false, true> = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<IsObject<UnknownFunction>, false, true> = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<IsObject<AnyFunction>, false, true> = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<IsObject<any[]>, false, true> = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<IsObject<undefined>, false, true> = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<IsObject<null>, false, true> = true;
    expect(result).toBe(true);
  });
});

describe('Test IsArray<T>', () => {
  test('_', () => {
    const result: TestType<IsArray<{ name: string }>, false, true> = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<IsArray<object>, false, true> = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<IsArray<string>, false, true> = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<
      IsArray<Record<string, boolean>[]>,
      true,
      true
    > = true;
    expect(result).toBe(true);
  });
});

describe('Test IsArrayIncludesTypeof<T>', () => {
  test('_', () => {
    const result: TestType<
      IsArrayIncludesTypeof<string[], string | boolean>,
      true,
      true
    > = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<
      IsArrayIncludesTypeof<string[], null | boolean>,
      false,
      true
    > = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<
      IsArrayIncludesTypeof<string | boolean[], string | boolean>,
      boolean,
      true
    > = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<
      IsArrayIncludesTypeof<Record<string, number>[], number>,
      false,
      true
    > = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<
      IsArrayIncludesTypeof<Record<string, number>[], string | number>,
      false,
      true
    > = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<
      IsArrayIncludesTypeof<Record<string, number>[], Record<string, number>>,
      true,
      true
    > = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<
      IsArrayIncludesTypeof<Record<string, number>[], Record<string, unknown>>,
      true,
      true
    > = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<
      IsArrayIncludesTypeof<Record<string, number>[], Record<string, any>>,
      true,
      true
    > = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<
      IsArrayIncludesTypeof<Record<string, number>[], Record<symbol, boolean>>,
      true,
      true
    > = true;
    expect(result).toBe(true);
  });
});

describe('Test IsArrayOf<T>', () => {
  test('_', () => {
    const result: TestType<
      IsArrayOf<string[], string | boolean>,
      false,
      true
    > = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<
      IsArrayOf<string[], string & boolean>,
      false,
      true
    > = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<IsArrayOf<string[], string>, true, true> = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<
      IsArrayOf<string[], null | boolean>,
      false,
      true
    > = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<
      IsArrayOf<string | boolean[], string | boolean>,
      false,
      true
    > = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<
      IsArrayOf<Record<string, number>[], number>,
      false,
      true
    > = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<
      IsArrayOf<Record<string, number>[], string | number>,
      false,
      true
    > = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<
      IsArrayOf<Record<string, number>[], Record<string, number>>,
      true,
      true
    > = true;
    expect(result).toBe(true);
  });

  test('unknown does not get a pass here', () => {
    const result: TestType<
      IsArrayOf<Record<string, number>[], Record<string, unknown>>,
      false,
      true
    > = true;
    expect(result).toBe(true);
  });

  test('any does not get a pass here too', () => {
    const result: TestType<
      IsArrayOf<Record<string, number>[], Record<string, any>>,
      false,
      true
    > = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<
      IsArrayOf<Record<string, number>[], Record<symbol, boolean>>,
      false,
      true
    > = true;
    expect(result).toBe(true);
  });
});
