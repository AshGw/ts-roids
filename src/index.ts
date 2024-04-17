/**
 * `Nullable` type allows representing a value that can be either null or undefined.
 * @type {Nullable}
 */
export type Nullable = null | undefined;

/**
 * Represents a type that can hold any numeric value: number or a bigint.
 * @type {Numeric}
 */
export type Numeric = number | bigint;

/**
 * Represents all the primitive types in JavaScript.
 * - `Nullable`: A value that can be either null or undefined.
 * - `Numeric`: A value that can be either a number or a bigint.
 * - `string`: Represents textual data.
 * - `boolean`: Represents a logical value (true or false).
 * - `symbol`: Represents a unique and immutable value.
 * @type {Primitive}
 */
export type Primitive = string | boolean | symbol | Nullable | Numeric;

/**
 * Represents a type that includes falsy values in JavaScript.
 * Falsy values are those that coerce to false when used in a boolean context.
 * This includes `false`, an empty string (`''`), numeric zero (`0`), `null`,
 * and `undefined`.
 * @type {Falsy}
 */
export type Falsy = false | '' | 0 | Nullable;

/**
 * Type utility to check if a given type `T` is a subtype of `Falsy`.
 * @template T The type to check.
 * @returns `true` if `T` is a subtype of `Falsy`, otherwise `false`.
 * @example
 * type TestFalsy = IsFalsy<''>; // TestFalsy is `true`
 * type TestTruthy = IsFalsy<10>; // TestTruthy is `false`
 */
export type IsFalsy<T> = T extends Falsy ? true : false;

export type IsTruthy<T> = T extends Exclude<T, Falsy> ? true : false;
export type IsNever<T> = [T] extends [never] ? true : false;
export type IsUnknwon<T> = [T] extends [unknown] ? true : false;
export type Keys<T> = keyof T;
export type Vals<T> = T[Keys<T>];
export type OneOrMany<T> = T | T[];
export type MaybeUndefined<T> = T | undefined;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Newable = { new (...args: any[]): any };
