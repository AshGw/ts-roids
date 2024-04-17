import { IsFalsy, Falsy } from 'src';
import { expect, test } from 'vitest';

test('IsFalsy correctly identifies falsy values', () => {
  const falsy: Falsy[] = [false, null, undefined, 0, ''];
  falsy.forEach((value) => {
    expect<IsFalsy<typeof value>>(true).toBeTruthy;
    // @ts-expect-error, this auto-negates it, so it should not be true
    expect<IsFalsy<typeof value>>(false).toBeFalsy;
  });
});
