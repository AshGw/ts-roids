import { ArrayOf, TestType } from '@/types';
import { test, describe, expect } from 'vitest';

describe('Test ArrayOf<T>', () => {
  test('_', () => {
    const result: TestType<
      ArrayOf<string[], string | boolean>,
      string[],
      true
    > = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<
      ArrayOf<string[], string & boolean>,
      never,
      true
    > = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<ArrayOf<string[], string>, string[], true> = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<
      ArrayOf<string[], null | boolean>,
      never,
      true
    > = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<
      ArrayOf<string | boolean[], string | boolean>,
      string | boolean[],
      true
    > = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<
      ArrayOf<Record<string, number>[], number>,
      never,
      true
    > = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<
      ArrayOf<Record<string, number>[], string | number>,
      never,
      true
    > = true;
    expect(result).toBe(true);
  });

  test('_', () => {
    const result: TestType<
      ArrayOf<Record<string, number>[], Record<string, number>>,
      Record<string, number>[],
      true
    > = true;
    expect(result).toBe(true);
  });

  test(() => {
    const result: TestType<
      ArrayOf<Record<string, number>[], Record<string, unknown>>,
      Record<string, number>[],
      true
    > = true;
    expect(result).toBe(true);
  });

  test(() => {
    const result: TestType<
      ArrayOf<Record<string, number>[], Record<string, any>>,
      Record<string, number>[],
      true
    > = true;
    expect(result).toBe(true);
  });
});
