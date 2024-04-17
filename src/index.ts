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
 * Checks if a given type `T` is `Falsy`.
 * @returns `true` if `T` is a subtype of `Falsy`, otherwise `false`.
 * @example
 * type Falsy = IsFalsy<''>; // TestFalsy is tru`
 * type Truthy = IsFalsy<10>; // TestTruthy is false
 */
export type IsFalsy<T> = T extends Falsy ? true : false;

/**
 * Checks if a given type `T` is a truthy value.
 * A truthy value is any value that is not a falsy value.
 * @returns `true` if `T` is not a subtype of `Falsy`, otherwise `false`.
 * @example
 * type TruthyString = IsTruthy<string>; // => true
 * type TruthyNumber = IsTruthy<10>; // => true
 * type FalsyNull = IsTruthy<null>; // => false
 * type FalsyEmptyString = IsTruthy<''>; => false
 */
export type IsTruthy<T> = T extends Exclude<T, Falsy> ? true : false;

/**
 * Checks if a given type `T` is `never`.
 * The `never` type represents a value that never occurs,
 * for example a function that always errors out.
 * @returns `true` if `T` is `never`, otherwise `false`.
 * @example
 * type Never = IsNever<never>; => true
 * type NotNever = IsNever<string>; => false
 */
export type IsNever<T> = [T] extends [never] ? true : false;
export type IsUnknwon<T> = [T] extends [unknown] ? true : false;
export type Keys<T> = keyof T;
export type Vals<T> = T[Keys<T>];
export type OneOrMany<T> = T | T[];
export type MaybeUndefined<T> = T | undefined;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Newable = { new (...args: any[]): any };
