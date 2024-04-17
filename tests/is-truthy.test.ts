import { Falsy, IsTruthy, Nullable } from 'src';
import { expect, test } from 'vitest';

const __array = [0];
type __TruthyType = 'hello' | 69 | typeof __array;

test('IsTruthy correctly identifies truthy values', () => {
  const truthyValues: [__TruthyType, IsTruthy<__TruthyType>][] = [
    ['hello', true],
    [69, true],
    [__array, true],
  ];

  truthyValues.forEach(([value, expected]) => {
    expect<IsTruthy<typeof value>>(expected).toBe(true);
  });
});

test('IsTruthy correctly identifies falsy values as non-truthy', () => {
  const falsyValues: [Falsy, IsTruthy<Falsy>][] = [
    [false, false],
    [null, false],
    ['', false],
  ];

  falsyValues.forEach(([value, expected]) => {
    expect<IsTruthy<typeof value>>(expected).toBe(false);
  });
});

test('Nullables are not truthy', () => {
  const nullableValues: [Nullable, IsTruthy<Nullable>][] = [
    [null, false],
    [undefined, false],
  ];

  nullableValues.forEach(([value, expected]) => {
    expect<IsTruthy<typeof value>>(expected).toBe(false);
  });
});

type __FalsyType = false | null | '';
test('Plain falsy types', () => {
  const customFalsyValues: [__FalsyType, IsTruthy<__FalsyType>][] = [
    [false, false],
    [null, false],
    ['', false],
  ];

  customFalsyValues.forEach(([value, expected]) => {
    expect<IsTruthy<typeof value>>(expected).toBe(false);
  });
});
