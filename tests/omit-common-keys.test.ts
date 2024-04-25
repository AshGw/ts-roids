import { OmitCommonKeys, EmptyObject, TestType } from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  const result: TestType<
    OmitCommonKeys<{ d: { d: 'a' }; p: { b: 'b' }; x: { c: 'c' } }, { d: 'd' }>,
    {
      p: {
        b: 'b';
      };
      x: {
        c: 'c';
      };
    },
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    OmitCommonKeys<
      { d: 'd'; k: 'k' },
      { d: 'd'; p: { b: 'b' }; x: { c: 'c' } }
    >,
    { k: 'k' },
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    OmitCommonKeys<
      { d: 'first objects d'; x: 'also first objects x' },
      { d: 'd'; p: { b: 'b' }; x: { c: 'c' } }
    >,
    EmptyObject,
    true
  > = true;
  expect(result).toBe(true);
});
