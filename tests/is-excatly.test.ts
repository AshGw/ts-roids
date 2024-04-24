import { describe } from 'node:test';
import { IsExactlyAny, Nullable, TestType, IsExactlySymbol } from 'src';
import { test, expect } from 'vitest';

describe('test IsExactlyAny', () => {
  test('_', () => {
    const result: TestType<IsExactlyAny<undefined>, false, true> = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<IsExactlyAny<unknown>, false, true> = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<IsExactlyAny<any>, true, true> = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<IsExactlyAny<string>, false, true> = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<IsExactlyAny<unknown>, false, true> = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<IsExactlyAny<any | unknown>, true, true> = true;
    expect(result).toBe(true);
  });

  test('any union anything is still any, if some is type unsafe its all unsafe', () => {
    const result: TestType<IsExactlyAny<any | Nullable>, true, true> = true;
    expect(result).toBe(true);
  });
});

describe('test IsExactlySymbol', () => {
  test('_', () => {
    const result: TestType<IsExactlySymbol<undefined>, false, true> = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<IsExactlySymbol<string>, false, true> = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<IsExactlySymbol<symbol>, true, true> = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<IsExactlySymbol<any | symbol>, false, true> = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<
      IsExactlySymbol<symbol | Nullable>,
      false,
      true
    > = true;
    expect(result).toBe(true);
  });
});
