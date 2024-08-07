import { SizedTuple, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<SizedTuple<69[], 0>, [], true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<SizedTuple<number, 2>, [number, number], true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<SizedTuple<[69], 1>, [[69]], true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    SizedTuple<'he' | 'llo', 7>,
    [
      'he' | 'llo',
      'he' | 'llo',
      'he' | 'llo',
      'he' | 'llo',
      'he' | 'llo',
      'he' | 'llo',
      'he' | 'llo',
    ],
    true
  > = true;
  expect(result).toBe(true);
});
