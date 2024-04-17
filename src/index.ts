/**
 * `Nullable` type allows representing a value that can be either null or undefined.
 * @type {Nullable}
 */
export type Nullable = null | undefined;

export type Numeric = number | bigint;
export type Primitive = Nullable | Numeric | string | boolean | symbol;
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
