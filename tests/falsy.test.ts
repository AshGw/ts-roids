import { Falsy } from 'src';
import { assertType, expect, test } from 'vitest';

test.fails('_', () => {
  // @ts-expect-error, it cannot be this type, it should error out
  expect(assertType<Falsy>(true)).rejects.toBe(true);
});

test('_', () => {
  const valuesToTest: Falsy[] = [false, null, undefined, 0, ''];
  valuesToTest.forEach((value) => {
    expect(assertType<Falsy>(value)).toBeTruthy;
  });
});
