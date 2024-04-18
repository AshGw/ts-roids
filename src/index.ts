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

/**
 * Checks if a given type `T` is `unknown`.
 * The `unknown` type is the type-safe counterpart of `any`.
 * Values of type `unknown` can hold any value, similar to `any`, but with stricter type safety.
 * Unlike `any`, you cannot perform operations directly on values of type `unknown`
 * without type assertion or type narrowing.
 * @returns `true` if `T` is `unknown`, otherwise `false`.
 * @example
 * type UnknownValue = unknown;
 * type IsUnknownValue = IsUnknown<UnknownValue>; =>  true
 *
 * type KnownValue = string;
 * type IsNotUnknownValue = IsUnknown<KnownValue>; => true
 */
export type IsUnknown<T> = T extends unknown ? true : false;

/**
 * Represents the keys of a given type `T`.
 * This type alias `Keys<T>` is equivalent to `keyof T`,
 * which retrieves the union type of keys (property names) of type `T`.
 * @returns Union type of keys (property names) of type `T`.
 * @example
 * type Person = {
 *   name: string;
 *   age: number;
 *   email: string;
 * };
 *
 * type PersonKeys = Keys<Person>; => "name" | "age" | "email"
 */
export type Keys<T> = keyof T;

/**
 * Represents the union type of values of properties in a given type `T`.
 * This type alias `Vals<T>` retrieves the union type of values corresponding
 * to the keys (property names) of type `T`.
 * @example
 * type Person = {
 *   name: string;
 *   age: number;
 *   email: string;
 * };
 *
 * type PersonValues = Vals<Person>; => string | number
 */
export type Vals<T> = T[Keys<T>];
export type OneOrMany<T> = T | T[];
export type MaybeUndefined<T> = T | undefined;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Newable = { new (...args: any[]): any };
