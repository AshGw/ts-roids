import { IsNever, TestType } from 'src';
import { expect, test } from 'vitest';

test('IsNever correctly identifies non-never type', () => {
  type _Type = string | number;
  expect<IsNever<_Type>>(false).toBe(false);
});
test('IsNever correctly identifies primitive types as non-never', () => {
  expect<IsNever<string>>(false).toBe(false);
  expect<IsNever<number>>(false).toBe(false);
  expect<IsNever<boolean>>(false).toBe(false);
});

test('IsNever correctly identifies object types as non-never', () => {
  expect<IsNever<object>>(false).toBe(false);
  expect<IsNever<{ foo: string }>>(false).toBe(false);
});

test('IsNever correctly identifies void type as non-never', () => {
  expect<IsNever<void>>(false).toBe(false);
});

test('IsNever correctly identifies union types with never as non-never', () => {
  expect<IsNever<number | never>>(false).toBe(false);
});

test('IsNever correctly identifies function return types with never as non-never', () => {
  const fnReturningNever = (): never => {
    throw new Error('This function never returns');
  };
  const result: TestType<
    ReturnType<typeof fnReturningNever>,
    never,
    true
  > = true;
  expect(result).toBe(true);
});
