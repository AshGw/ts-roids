import { IsUnknown } from 'src';
import { expect, test, expectTypeOf } from 'vitest';

test('Unknown is a type-safe counterpart of any, so it passes on all', () => {
  const unknownValue: unknown = 'bar';
  expect<IsUnknown<typeof unknownValue>>(true).toBe(true);
  expect<IsUnknown<number>>(true).toBe(true);
  expect<IsUnknown<string | unknown>>(true).toBe(true);
  expect<IsUnknown<number | unknown>>(true).toBe(true);

  const _foo: unknown & string = 'foo';
  expectTypeOf(_foo).toMatchTypeOf<string>();

  // eslint-disable-next-line
  expect<IsUnknown<any>>(true).toBe(true);
});
