import { NewType } from 'src';
import { ESLint } from 'eslint';
import { describe, test, expect } from 'vitest';

type Username = NewType<'Username', string>;
const username = 'john doe' as Username;

describe('NewType', () => {
  test('string methods should work on username', () => {
    expect(username.toUpperCase()).toBe('JOHN DOE');
    expect(username.endsWith('e')).toBeTruthy();
  });

  test('number type methods should not work on username', () => {
    // @ts-expect-error as explained above
    expect(() => username.toExponential()).toThrowError();
  });

  test('works for numbers', () => {
    type Age = NewType<'Age', number>;
    const age = 30 as Age;
    const Thirty = 30;
    const toExp = 2;
    expect(age.toExponential(toExp)).toBe(Thirty.toExponential(toExp));
    expect(age.toString()).toBe('30');
  });

  test('boolean value should be accessible for isActive', () => {
    type IsActive = NewType<'IsActive', boolean>;
    const isActive = true as IsActive;
    expect(isActive).toBe(true);
  });
});

test(`ESLint should detect one error: Conversion of type 'string' to type 'ID' 
  may be a mistake, because neither type sufficiently overlaps with the other.`, async () => {
  const eslint = new ESLint();
  const code = `
    import { NewType } from 'src';

    type ID = NewType<'ID',number>;
    const id = '30' as ID;
  `;
  const results = await eslint.lintText(code);
  const errorCount = results.reduce((acc, res) => acc + res.errorCount, 0);
  expect(errorCount).toEqual(1);
});

test(`You have to cast the type with 'as', this is the one limitation of this type. 
ESLint should detect one error:
Type 'number' is not assignable to type 'ID'. 
Type 'number' is not assignable to type '{ [__s]: true; }'.
`, async () => {
  const eslint = new ESLint();
  const code = `
    import { NewType } from 'src';

    type ID = NewType<'ID',number>;
    const id: ID = 30;
  `;
  const results = await eslint.lintText(code);
  const errorCount = results.reduce((acc, res) => acc + res.errorCount, 0);
  expect(errorCount).toEqual(1);
});
