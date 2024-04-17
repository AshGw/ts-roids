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

export type Falsy = false | '' | 0 | Nullable;
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
