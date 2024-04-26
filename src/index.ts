/**
 * `Nullable`  type allows representing a value that can be either null or undefined.
 * @export type {Nullable}
 */
export type Nullable = null | undefined;

/**
 * Represents a  type that can hold any numeric value: number or a bigint.
 * @export type {Numeric}
 */
export type Numeric = number | bigint;

/**
 * Represents all the primitive types in JavaScript.
 * - `Nullable`: A value that can be either null or undefined.
 * - `Numeric`: A value that can be either a number or a bigint.
 * - `string`: Represents textual data.
 * - `boolean`: Represents a logical value (true or false).
 * - `symbol`: Represents a unique and immutable value.
 */
export type Primitive = string | boolean | symbol | Nullable | Numeric;

/**
 * Represents a type that includes falsy values in JavaScript.
 * Falsy values are those that coerce to false when used in a boolean context.
 * This includes `false`, an empty string (`''`), numeric zero (`0`), `null`,
 * and `undefined`.
 */
export type Falsy = false | '' | 0 | Nullable;

/**
 * This type is used to describe constructor functions or classes
 * that can be invoked using the `new` keyword.
 */
export type Newable = { new (...args: any[]): any };

/**
 * Describes any function accepting any arguments
 *  and returning any value.
 */
export type AnyFunction = (...args: any[]) => any;

/**
 * Describes any function accepting and retruning `unknown`s
 */
export type UnknownFunction = (...args: unknown[]) => unknown;

/**
 * Type representing an integer
 */
export type Integer<N extends Numeric> = IfExtends<
  IsInteger<N>,
  true,
  N,
  never
>;

/**
 * Is it a negative integer ?
 * @return
 * `true` if it is, else `false`
 */
export type IsNegativeInteger<F extends Numeric> = IsNegative<Integer<F>>;

/**
 * Is it a positive integer ?
 * @return
 * `true` if it is, else `false`
 */
export type IsPositiveInteger<F extends Numeric> = IsPositive<Integer<F>>;
/**
 * Type representing a float
 */
export type Float<N extends Numeric> = IfExtends<IsFloat<N>, true, N, never>;

/**
 * Is it a negative float ?
 * @return
 * `true` if it is, else `false`
 */
export type IsNegativeFloat<F extends Numeric> = IsNegative<Float<F>>;

/**
 * Is it a positive float ?
 * @return
 * `true` if it is, else `false`
 */
export type IsPositiveFloat<F extends Numeric> = IsPositive<Float<F>>;

/**
 * Is a given integer numeric odd?
 * @returns
 * `true` if it is, else `false`
 * @example
 * ````ts
 * IsOdd<200000000000000>; // false
 * IsEven<2587967>; // true
 * IsEven<2397687561>; // true
 * ````
 */
export type IsOdd<T extends Numeric> = IfExtends<
  StringifyNum<T>,
  `${number | ''}${1 | 3 | 5 | 7 | 9}`,
  true,
  false
>;

/**
 * Is a given integer numeric even?
 * @returns
 * `true` if it is, else `false`
 * @example
 * ````ts
 * IsEven<200000000000000>; // true
 * IsEven<258796>; // true
 * IsEven<2000000000000001>; // false
 * ````
 */
export type IsEven<T extends Numeric> = IfExtends<
  StringifyNum<T>,
  `${Numeric | ''}${2 | 4 | 6 | 8 | 0}`,
  true,
  false
>;

/**
 * `Optional<T>` is similar to Python's `Optional` and Rust's `Option` types.
 * It promotes more predictable code,
 * by enforcing explicit handling of optional scenarios, e.g: requiring functions
 * to return `null` specifically when a value is absent.
 */
export type Optional<T> = T | null;

/**
 Represnets a type that might be nullable, as in it might be `null` or `undefined`.
*/
export type Maybe<T> = T | Nullable;
export type MaybeUnknown<T> = T | unknown;
export type MaybeUndefined<T> = T | undefined;

/**
 * Presents any non-nullish value
 */
export type EmptyObject = NonNullable<unknown>;
/**
 * Checks if a given type `T` is `Falsy`.
 * @returns `true` if `T` is a subtype of `Falsy`, otherwise `false`.
 * @example
 * type Falsy = IsFalsy<''>; // TestFalsy is tru`
 * type Truthy = IsFalsy<10>; // TestTruthy is false
 */
export type IsFalsy<T> = IfExtends<T, Falsy, true, false>;

/**
 * Checks if a given  type `T` is a truthy value.
 * A truthy value is any value that is not a falsy value.
 * @returns `true` if `T` is not a subtype of `Falsy`, otherwise `false`.
 * @example
 *  type TruthyString = IsTruthy<string>; // => true
 *  type TruthyNumber = IsTruthy<10>; // => true
 *  type FalsyNull = IsTruthy<null>; // => false
 *  type FalsyEmptyString = IsTruthy<''>; => false
 */
export type IsTruthy<T> = IfExtends<T, Exclude<T, Falsy>, true, false>;

/**
 * Checks if a given  type `T` is `never`.
 * The `never`  type represents a value that never occurs,
 * for example a function that always errors out.
 * @returns `true` if `T` is `never`, otherwise `false`.
 * @example
 *  type Never = IsNever<never>; => true
 *  type NotNever = IsNever<string>; => false
 */
export type IsNever<T> = Equals<T, never>;

/**
 * A nullable type is a type that might be null, undefined or both
 * @returns
 * `true` if it is, else `false`
 */
export type IsNullable<T> = IfExtends<T, Nullable, true, false>;
/**
 * Checks if a given  type `T` is `unknown`.
 *
 * Values of  type `unknown` can hold any value, similar to `any`, but with stricter  type safety.
 * Unlike `any`, you cannot perform operations directly on values of  type `unknown`
 * without  type assertion or  type narrowing.
 * @returns `true` if `T` is `unknown`, otherwise `false`.
 * @example
 *  type IsUnknownValue = IsUnknown<unknown>; //  true
 *  type IsNotUnknownValue = IsUnknown<string>; // also true
 * @remarks
 * > If you want `unknown` to be exact, use `IsExactlyUnknown`
 */
export type IsUnknown<T> = IfExtends<T, unknown, true, false>;

/**
 * Checks if a given  type `T` is exactly `unknown`.
 * @example
 * ````ts
  IsExactlyUnknown<any | unknown>; // false, since the union evaluates to any
  IsExactlyAny<any | unknown>; // true
  IsExactlyUnknown<unknown | string> // true 
  IsExactlyUnknown<string>; // flase 
 * ````
 */
export type IsExactlyUnknown<T> = Equals<T, unknown>;

/**
 * @returns `true` if `T` is `string`, otherwise `false`.
 */
export type IsString<T> = IfExtends<T, string, true, false>;

/**
 * @returns `true` if `T` is excatly `string`, otherwise `false`.
 * @example
 * ````ts
  IsExactlyString<number>; //  false;
  IsExactlyString<any | string>; // false
  IsExactlyString<unknown | string>; //  false 
 * ````
 */
export type IsExactlyString<T> = Equals<T, string>;

/**
 * @returns `true` if `T` is `boolean`, otherwise `false`.
 */
export type IsBoolean<T> = IfExtends<T, boolean, true, false>;

/**
 * A numeric type iincludes `number` and `bigint`.
 * @returns `true` if `T` is a numeric type, otherwise `false`.
 */
export type IsNumeric<T> = IfExtends<T, Numeric, true, false>;

/**
 * Check if a given type `T` is indeed a tuple
 * @example
 * ````ts
 * IsTuple<[69]>; // Result: true
 * IsTuple<69[]; // Result: false
 */
export type IsTuple<T> = T extends readonly unknown[]
  ? number extends T['length']
    ? false
    : true
  : false;

/**
 * Is a given type `T` an array?
 * @returns `true` if `T` it is, otherwise `false`.
 * @example
 * ```
 * IsArray<number[]>; // true
 * IsArray<string>; // false
 * ```
 */
export type IsArray<T> = IfExtends<T, unknown[], true, false>;

/**
 * @returns `true` if `Arr` is an array that includes elements of type `T`, otherwise `false`.
 * An array of elements of type `T` is defined as `Arr` being a subtype of `T[]`.
 * @example
 * ```
 * IsArrayOf<number[], number>; // true
 * IsArrayOf<string[], number>; // false
 * IsArrayOf<number[], string>; // false
 * IsArrayOf<(number | string)[], number>; // false
 * IsArrayIncludeTypeof<Record<string, number>[], number> // false
 * IsArrayIncludeTypeof<string[], null | boolean> // false
 * ArrayIncludeTypeof<string[], string | boolean> // true
 * IsArrayIncludeTypeof<Record<string, number>[], Record<symbol, boolean>> // true,
 * ```
 * @see
 * If you want more type narrowing use IsArrayOf<Arr,T>
 */
export type IsArrayIncludesTypeof<Arr, T> = IfExtends<Arr, T[], true, false>;

/**
 * Checks if a given type `Arr` is exactly an array of elements of type `T`.
 * @template Arr The type to check if it's an array of elements of type `T`.
 * @template T The element type expected in the array.
 * @returns `true` if `Arr` is exactly an array of elements of type `T`, otherwise `false`.
 * An array of elements of type `T` is defined as `Arr` being exactly `T[]`.
 * @example
 * ```
 * IsArrayOf<string[], string & boolean>; // false
 * IsArrayOf<Record<string, number>[], number>; // false
 * IsArrayOf<Record<string, number>[], string | number>; // false
 * IsArrayOf<Record<string, number>[], Record<symbol, boolean>>; // false
 * IsArrayOf<Record<string, number>[], Record<string, unknown>>; // false ('unknown' does not get a pass)
 * IsArrayOf<Record<string, number>[], Record<string, any>>; // false ('any' does not get a pass)
 * IsArrayOf<Record<string, number>[], Record<string, number>>; // true
 * IsArrayOf<string[], string>; // true
 * IsArrayOf<string[], string | 'string'>; // true
 * ```
 */
export type IsArrayOf<Arr, T> = Equals<Arr, T[]>;

/**
 * Type utility that checks if a given type `T` is an `AnyFunction` (any function type).
 * @template T The type to check.
 * @returns `true` if `T` is an `AnyFunction`, otherwise `false`.
 * An `AnyFunction` is defined as a function type that accepts any arguments and returns any value.
 * @example
 * ```
 * IsAnyFunction<() => void>; // true (matches AnyFunction)
 * IsAnyFunction<(x: number) => string>; // true (matches AnyFunction)
 * IsAnyFunction<string>; // false (string is not a function type)
 * ```
 */
export type IsAnyFunction<T> = IfExtends<T, AnyFunction, true, false>;

/**
 * Type utility that checks if a given type `T` is a `Function` (function type accepting `unknown` arguments and returning `unknown`).
 * @template T The type to check.
 * @returns `true` if `T` is a `Function`, otherwise `false`.
 * A `Function` is defined as a function type that accepts arguments of type `unknown` and returns a value of type `unknown`.
 * @example
 * ```
 * IsFunction<() => void>; // true (matches Function)
 * IsFunction<(x: number) => string>; // true (matches Function)
 * IsFunction<string>; // false (string is not a function type)
 * ```
 */
export type IsFunction<T> = IfExtends<T, UnknownFunction, true, false>;

/**
 * Checks if a given type `T` qualifie as an object.
 * @returns `true` if it is, otherwise `false`.
 * An object in this context is defined as a non-null object (excluding functions and arrays).
 * @example
 * ```
  IsObject<object>; // true
  IsObject<{ name: string }>; // true
  IsObject<string>; // false
  IsObject<Function>; // true, yes, the built-in Function type is an interface with a bunch of methods, so yes it's an object.
  // if you want to use the function type use this: 
  IsObject<UnknownFunction>; // false
  // or this 
  IsObject<AnyFunction>; // false
  IsObject<any[]>; // false
  IsObject<null>; // false
 * ```
 */
export type IsObject<T> = And<
  IfExtends<T, object, true, false>,
  And<Not<IsFunction<T>>, Not<IsArray<T>>>
>;

/**
 * @returns `true` if `T` is `number`, otherwise `false`.
 */
export type IsNumber<T> = IfExtends<T, number, true, false>;
/**
 * @returns `true` if `T` is exactly of type `number`, otherwise `false`.
 * @example 
 * ````ts
  IsExactlyNumber<any | number>; // false 
  IsExactlyNumber<unknown | number> // false 
  IsExactlyNumber<number> // true 
  IsExactlyNumber<87> // false 
 * ````
 */
export type IsExactlyNumber<T> = Equals<T, number>;

/**
 * @returns `true` if `T` is `bigint`, otherwise `false`.
 */
export type IsBigInt<T> = IfExtends<T, bigint, true, false>;

/**
 * @returns `true` if `T` is exactly `bigint`, otherwise `false`.
 * @example 
 * ````ts
  IsBigInt<unknown | bigint>; // false
  IsBigInt<symbol | Nullable>; // false 
  IsBigInt<bigint>; // true 
 * ````
 */
export type IsExactlyBigInt<T> = Equals<T, bigint>;

/**
 * @returns `true` if `T` is `symbol`, otherwise `false`.
 */
export type IsSymbol<T> = T extends symbol ? true : false;

/**
 * @returns `true` if `T` is exactly `symbol`, otherwise `false`.
 * @example 
 * ````ts
  IsExactlySymbol<symbol>; // true
  IsExactlySymbol<any | symbol>; // false
  IsExactlySymbol<Integer<2>>; // false
 * ````
 */
export type IsExactlySymbol<T> = Equals<T, symbol>;
/**
 * If ``T`` is exactly``any``, return ``true``, otherwise, return ``false``.
 * @exmaple 
 * ````ts
  IsExactlyAny<any | Nullable>; // true, once unsafe, always unsafe 
  IsExactlyAny<Numeric | Nullable>; // false
  IsExactlyAny<unknown>; // false 
  IsExactlyAny<any>, true
 * ````
 */
export type IsExactlyAny<T> = Equals<T, any>;

/**
 * Checks if a given numeric value is in ]-∞,0[
 * @returns
 * true if it is, otherwise false
 */
/* eslint-disable @typescript-eslint/no-unused-vars */
export type IsNegative<N extends Numeric> =
  StringifyNum<N> extends `-${infer U}` ? true : false;

/**
 * Checks if a given numeric value is in [0,+∞[
 * @returns
 * true if it is, otherwise false
 */
export type IsPositive<N extends Numeric> = N extends N
  ? Numeric extends N
    ? boolean
    : `${N}` extends `-${Numeric}`
      ? false
      : true
  : never;
/**
 * Check if a given numeric value is an integer
 * @returns
 * true if it is, else false
 */
export type IsInteger<N extends Numeric> = number extends N
  ? false | true
  : N extends N
    ? `${N}` extends `${string}.${string}`
      ? false
      : true
    : never;

/**
 * Check if a given numeric value is an float
 * @returns
 * true if it is, else false
 */
export type IsFloat<N extends Numeric> = number extends N
  ? false | true
  : N extends N
    ? `${N}` extends `${string}.${string}`
      ? true
      : false
    : never;

/**
 * @returns `true` if `T` is a `Newable`, otherwise `false`.
 */
export type IsNewable<T> = IfExtends<T, Newable, true, false>;

/**
 * Conditional type: if the condition `C` is `true`, return `Do`, otherwise return `Else`.
 * @example 
 * ````ts
   If<IsNever<never>, true, false>; // true
   If<Not<IsNever<never>>, true, false>; // false  
 * ```` 
*/
export type If<C extends boolean, Do, Else> = IfExtends<C, true, Do, Else>;

/**
 * Negates a boolean type `B`.
 * @example
   Not<true>; // false
   Not<false>; // true
*/
export type Not<B extends boolean> = B extends true ? false : true;

/**
 * Logical AND between two boolean types `B1` and `B2`.
 * @example
   And<true, false>; // false
   And<true, true>; // true
*/
export type And<B1 extends boolean, B2 extends boolean> = If<
  B1,
  If<B2, true, false>,
  false
>;

/**
 * Logical OR between two boolean types `B1` and `B2`.
 * @example
   Or<true, false>; // true
   Or<false, false>; // false
*/
export type Or<B1 extends boolean, B2 extends boolean> = If<
  B1,
  true,
  If<B2, true, false>
>;

/**
 * Exclusive OR (XOR) between two boolean types `B1` and `B2`.
 * @example
   Xor<true, false>; // true
   Xor<true, true>; // false
*/
export type Xor<B1 extends boolean, B2 extends boolean> = Or<
  And<B1, Not<B2>>,
  And<Not<B1>, B2>
>;

/**
 * Logical NAND between two boolean types `B1` and `B2`.
 * @example
   Nand<true, false>; // true
   Nand<true, true>; // false
*/
export type Nand<B1 extends boolean, B2 extends boolean> = Not<And<B1, B2>>;

/**
 * Represents the keys of a given  type `T`.
 * This  type alias `Keys<T>` is equivalent to `keyof T`,
 * which retrieves the union  type of keys (property names) of  type `T`.
 * @returns Union  type of keys (property names) of  type `T`.
 * @example
 *  type Person = {
 *   name: string;
 *   age: number;
 *   email: string;
 * };
 *
 *  type PersonKeys = Keys<Person>; => "name" | "age" | "email"
 */
export type Keys<T> = keyof T;

/**
 * Represents the union  type of values of properties in a given  type `T`.
 * This  type alias `Vals<T>` retrieves the union  type of values corresponding
 * to the keys (property names) of  type `T`.
 * @example
 *  type Person = {
 *   name: string;
 *   age: number;
 *   email: string;
 * };
 *
 *  type PersonValues = Vals<Person>; => string | number
 */
export type Vals<T> = T[Keys<T>];

/**
 * Represents a  type that can be either a single value of  type `T` or an array of values of  type `T`.
 * @example
 * type T1 = EitherOneOrMany<number>; 10; // Valid
 * type T2 = EitherOneOrMany<number>;  [20, 30]; // Also valid
 */
export type EitherOneOrMany<T> = T | T[];
/**
 * Turns a given numeric value (number or bigint) into its string representation
 * @example
 * ```ts
 * type _ = StringifyNum<45> // Result: '45'
 * ```
 */
export type StringifyNum<N extends Numeric> = `${N}`;

/**
 * Get the absolute value of a numeric N
 * @example
 * ```ts
 * Abs<-54>; // Result: 54
 * Abs<54>; // Result: 54
 * ```
 * @returns
 * |N|
 */
export type Abs<N extends Numeric> = `${N}` extends `-${infer M extends
  Numeric}`
  ? M
  : N;
/**
 * @example
 * ```ts
 * MinInTwoPositiveNums<21,0>; // Result: 0
 * ```
 * @hidden
 * only exported for tests
 */
export type _MinInTwoPositiveNums<
  N1 extends Numeric,
  N2 extends Numeric,
  L extends any[] = EmptyArray,
> = L['length'] extends N1 | N2
  ? L['length'] extends N1
    ? N1
    : N2
  : _MinInTwoPositiveNums<N1, N2, [-1, ...L]>;

/**
 * @example
 * ```ts
 * MaxInTwoPositiveNums<21,0>; // Result: 21
 * ```
 * @hidden
 * only exported for testing
 */
export type _MaxInTwoPositiveNums<
  A extends Numeric,
  B extends Numeric,
  A1 extends Numeric = A,
  B1 extends Numeric = B,
  areAllNegative extends boolean = false,
> = A extends _MinInTwoPositiveNums<A, B>
  ? areAllNegative extends true
    ? A1
    : B1
  : areAllNegative extends true
    ? B1
    : A1;
/**
 * Get the length of a given string type S
 *
 * @example
 * ```ts
 * Strlen<'foo'>; // Result: 3
 * ```
 */
export type Strlen<
  S extends string,
  Arr extends any[] = EmptyArray,
> = S extends `${infer L}${infer R}` ? Strlen<R, [...Arr, L]> : Arr['length'];

/**
 * Check if two strings S1 and S2 have the same length
 * @returns
 * ``true`` if they do, else ``false``
 */
export type EqualStrlen<S1 extends string, S2 extends string> = Equals<
  Strlen<S1>,
  Strlen<S2>
>;

type _ChecktNumericString<
  A extends Numeric,
  B extends Numeric,
  AreNegative extends boolean = false,
  A1 extends Numeric = A,
  B1 extends Numeric = B,
  AS extends string = StringifyNum<A>,
  BS extends string = StringifyNum<B>,
> = EqualStrlen<AS, BS> extends true
  ? AS extends `${infer L1 extends Numeric}${infer R1}`
    ? BS extends `${infer L2 extends Numeric}${infer R2}`
      ? Equals<L1, L2> extends true
        ? _ChecktNumericString<A, B, AreNegative, A1, B1, R1, R2>
        : _MaxInTwoPositiveNums<L1, L2, A1, B1, AreNegative>
      : A1
    : A1
  : Strlen<AS> extends _MinInTwoPositiveNums<Strlen<AS>, Strlen<BS>>
    ? AreNegative extends false
      ? B1
      : A1
    : AreNegative extends false
      ? A1
      : B1;
/**
 * Gets the max from two numeric values, regardless of the sign
 * @example
 * ```ts
 * _MaxInTwoNums<54,-78>; // Result: 54
 * _MaxInTwoNums<-999,-78>; // Result: -78
 * ```
 * @hidden
 * exported for tests, use `Max<Arr>` instead
 */
export type _MaxInTwoNums<
  A extends Numeric,
  B extends Numeric,
> = IsNegative<A> extends true
  ? IsNegative<B> extends true
    ? _ChecktNumericString<Abs<A>, Abs<B>, true, A, B>
    : B
  : IsNegative<B> extends true
    ? A
    : _ChecktNumericString<A, B>;

/**
 * Gets the min value from two numeric values, regardless of the sign
 * @example
 * ```ts
 * _MinInTwoNums<54,-78>; // Result: -78
 * _MinInTwoNums<-999,-78>; // Result: -999
 * ```
 * @hidden
 * exported for tests, use `Min<Arr>` instead
 */
export type _MinInTwoNums<
  A extends Numeric,
  B extends Numeric,
> = IsPositive<A> extends true
  ? IsPositive<B> extends true
    ? _ChecktNumericString<Abs<A>, Abs<B>, true, A, B>
    : B
  : IsPositive<B> extends true
    ? A
    : _ChecktNumericString<A, B>;

type EmptyArray = [];
/**
 * Transposes a given 2xN array or matrix `M`, flipping the matrix over its diagonal, switching its row and column indices.
 * @template M - 2D array of any primitive  type values.
 *
 * @example
 * // Transpose a 1x1 matrix
 *  type Matrix = ArrayTranspose<[[1]]>; // expected to be [[1]]
 *
 * @example
 * // Transpose a 2x2 matrix
 *  type Matrix1 = ArrayTranspose<[[1, 'i'], [3, 4]]>; // expected to be [[1, 3], ["i", 4]]
 *
 * @example
 * // Transpose a 2x3 matrix
 *  type Matrix2 = ArrayTranspose<[[1, true, 3], [4, 5, 6]]>; // expected to be [[1, 4], [true, 5], [3, 6]]
 *
 */
export type ArrayTranspose<
  M extends Primitive[][],
  N extends Primitive[] = M[0],
> = M extends EmptyArray
  ? EmptyArray
  : {
      [KN in Keys<N>]: {
        [KM in Keys<M>]: KN extends Keys<M[KM]> ? M[KM][KN] : never;
      };
    };

/**
 * Represents a  type that filters elements from an array based on a given predicate  type.
 * @typeParam T The array to filter.
 * @typeParam P The predicate used for filtering elements from `T`.
 * @returns A new array type containing only the elements of `T` that match `P`.
 * @example
 * ```typescript
 *  ArrayFilter<[0, 1, 2, 3], 0 | 1>; // Results in [0, 1]
 *  ArrayFilter<[0, 1, 2], Falsy>; // Results in [0]
 *  ArrayFilter<['7', 1, 2], Falsy>; // Results in []
 *  ArrayFilter<['7', 1, 2, 7, 7, 7, 7], 7>; // Results in [7, 7, 7, 7]
 * ```
 */
export type ArrayFilter<T extends unknown[], P> = T extends [
  infer S,
  ...infer E,
]
  ? S extends P
    ? [S, ...ArrayFilter<E, P>]
    : ArrayFilter<E, P>
  : [];
/**
 * A  type that constructs a new array containing only unique elements from a given array type.
 * @typeParam T The input array  type from which unique elements are extracted.
 * @example
 * ```typescript
 *  type UArr = UniqueArray<
  [unknown, unknown, 'foo', any, never, never, '33', 33, '33']
>; // =>  [unknown, 'foo', any, never, '33', 33]
 * ```
 */
export type ArrayUnique<T, R extends any[] = []> = T extends [
  infer S,
  ...infer E,
]
  ? ArrayIncludes<R, S> extends true
    ? ArrayUnique<E, R>
    : ArrayUnique<E, [...R, S]>
  : R;

/**
 * Extracts the maximum numeric value in a given Array
 * @example
 * ```ts
 * Max<[-54,2,0,999,69,2]>; // Result: 999
 * Max<[-54,-2,-90,-72,-69,-202]>; // Result: -2
 * ```
 */
export type ArrayMax<
  Arr extends Numeric[],
  M extends Numeric = Arr[0],
  Initial extends boolean = true,
> = Arr['length'] extends 0
  ? Initial extends true
    ? never
    : M
  : Arr extends [infer A extends Numeric, ...infer B extends Numeric[]]
    ? ArrayMax<B, _MaxInTwoNums<A, M>, false>
    : M;

/**
 * Extracts the minimum numeric value in a given Array
 * @example
 * ```ts
 * Max<[-54,2,0,999,69,2]>; // Result: -54
 * Max<[-54,-2,-90,-72,-69,-202]>; // Result: -202
 * ```
 */
export type ArrayMin<
  Arr extends Numeric[],
  M extends Numeric = Arr[0],
  Initial extends boolean = true,
> = Arr['length'] extends 0
  ? Initial extends true
    ? never
    : M
  : Arr extends [infer A extends Numeric, ...infer B extends Numeric[]]
    ? ArrayMin<B, _MinInTwoNums<A, M>, false>
    : M;

/**
 * Checks if a given type is in an array type
 * @example
 * ```ts
 * ArrayIncludes<[bigint, true, 2, 3, 5, 6, 'seven'], true> // Result: true
 *
 * type T = NewType<'T',string >;
 * ArrayIncludes<[T, 2, 3, 5, 6, 7], string>; // Result: false
 * ArrayIncludes<[string, 2, 3, 5, 6, 7], string>; // Result: true
 * ```
 * @returns
 * `true` if found, else `false`
 */
export type ArrayIncludes<Arr, P> = Arr extends [infer S, ...infer E]
  ? Equals<S, P> extends true
    ? true
    : ArrayIncludes<E, P>
  : false;
/**
 * Calculates the intersection of the types within an array `Arr` of tuple types.
 * @returns 
 * The types that repeat, if exists
 * @example
 * ````ts
 ArrayIntersection<[[1, 0, 1], [0, 1, -1], [0, 0, 1]]>; // 0 | 1
 ArrayIntersection<[[1, 0], [0, 1], [0, 0]]>; // 0
 ArrayIntersection<[[1, 0], [-1, -1], [-8, -9]]> // never 
 * ````
 */
export type ArrayIntersection<Arr extends unknown[]> = Arr extends [
  infer S,
  ...infer E,
]
  ? (S extends unknown[] ? S[number] : S) & ArrayIntersection<E>
  : unknown;

/**
 * Conditional  type that checks if  type `T` extends  type `P`.
 * If `T` extends `P`, the  type resolves to `Do`; otherwise `Else`.
 * @example
 *  type Result1 = IfExtends<string, string | number, true, false>; // is true
 *  type Result2 = IfExtends<number, string | number, true, false>; // is true
 *  type Result3 = IfExtends<boolean, string | number, true, false>; // is false
 *
 *  type IsString<T> = IfExtends<T, string, true, false>;
 *  type IsNumber<T> = IfExtends<T, number, true, false>;
 *
 *  type TestString = IsString<string>; // is true
 *  type TestNumber = IsNumber<number>; // is true
 *  type TestBoolean = IsNumber<boolean>; // is false
 */
export type IfExtends<T, P, Do, Else> = T extends P ? Do : Else;

/**
 * Conditional type that checks if type `T` is equal to type `P`.
 * If `T` is equal to `P`, the type resolves to `Do`, otherwise `Else`.
 * @example
 *  type Result1 = IfEquals<string, string, true, false>; // is true
 *  type Result2 = IfEquals<number, string, true, false>; // is false
 *  type Result3 = IfEquals<boolean, boolean, true, false>; // is true
 *
 *  type IsExactlyString<T> = IfEquals<T, string, true, false>;
 *  type IsExactlyNumber<T> = IfEquals<T, number, true, false>;
 *
 *  type TestString = IsExactlyString<string>; // is true
 *  type TestNumber = IsExactlyNumber<number>; // is false
 *  type TestBoolean = IsExactlyString<boolean>; // is false
 */
export type IfEquals<T, P, Do, Else> = Equals<T, P> extends true ? Do : Else;

/**
 * Conditional  type that checks if two types `X` and `Y` are exactly equal.
 * If `X` is equal to `Y`, the  type resolves to `true`; otherwise `false`.
 * @example
 *  type Result1 = Equals<string, string>; // is true
 *  type Result2 = Equals<number, string>; // is false
 *  type Result3 = Equals<boolean | string, string | boolean>; // is true
 */
export type Equals<X, Y> = (<T>() => T extends X ? true : false) extends <
  T,
>() => T extends Y ? true : false
  ? true
  : false;

/** 
 A  type that excludes `null` and `undefined` from  type `T`.
 * @example
 Type Str = ExcludeNullable<string | null> //  string 
 Type Str2 = ExcludeNullable<string | null | undefined> //  string 
 Type Str3 = ExcludeNullable<string | undefined> //  string 
 * 
 */
export type ExcludeNullable<T> = Exclude<T, Nullable>;
/** 
 A  type that excludes `undefined` from  type `T`.
 * @example
 Type Str = ExcludeNullable<string | undefined> // Result:  string 
 */
export type ExcludeUndefined<T> = Exclude<T, undefined>;

/** 
 * A  type that excludes `null` from  type `T`.
 * @example
 Type Str = ExcludeNullable<string | null> // Result:  string 
 */
export type ExcludeNull<T> = Exclude<T, null>;

/**
 * Get the literal names of keys that are functions in object type `T`
 * @example
 * ````ts
 ObjectMethods<{
      foo: () => void;
      bar: (a: any) => string;
      barBaz: string;
      bazBar: Numeric;
    }> // Result: 'foo' | 'bar'
 * ````
 */
export type ObjectMethods<T extends object> = {
  [K in Keys<T>]-?: ExcludeNullable<T[K]> extends AnyFunction ? K : never;
}[Keys<T>];

/**
     * Get the literal names of keys that are propeties, basically anything that's not a method in object type `T`
     * @example
     * ````ts
     ObjectMethods<{
          barBaz: string;
          bazBar: Numeric;
        }> // Result: 'barBaz' | 'bazBar'
     * ````
     */
export type ObjectProperties<T extends object> = {
  [K in Keys<T>]-?: ExcludeNullable<T[K]> extends AnyFunction ? never : K;
}[Keys<T>];

/**
 * A  type that recursively mutates all the proprties within a given object  type `T`.
 * 
 * @example
 * ````ts
type Actual = {
  readonly a: () => 1;
  readonly x: string;
  readonly s: {
    readonly q: Nullable;
    readonly s: {
      readonly i: {
        readonly x: {
          readonly o: Maybe<Primitive>;
          readonly n: Falsy;
        };
        readonly e: 'foo';
      };
    };
  };
};

type Expected = {
  a: () => 1;
  x: string;
  s: {
    q: Nullable;
    s: {
      i: {
        x: {
          o: Maybe<Primitive>;
          n: Falsy;
        };
        e: 'foo';
      };
    };
  };
};
type T = DeepMutable<Actual>; // T Results in: Expected
 * ````
 */
export type DeepMutable<T> = T extends UnknownFunction
  ? T
  : {
      -readonly [K in Keys<T>]: T[K] extends unknown ? DeepMutable<T[K]> : T[K];
    };

/**
 * Checks if all the nested properties of a given object T is actually mutable.
 */
export type IsDeepMutable<T> = T extends DeepMutable<T> ? true : false;

/**
 * Checks if all the nested properties of a given object T is actually immutable.
 */
export type IsDeepImmutable<T> = T extends DeepImmutable<T> ? true : false;

/**
 * Check if all the properties of a given object (nested) are required
 * @returns
 * `true` if all the properties are, otherwise `false`
 */
export type IsDeepRequired<T> = IfExtends<T, DeepRequired<T>, true, false>;

/**
 * Check if all the properties of a given object (nested) are non required
 * @returns
 * `true` if all the properties are, otherwise `false`
 */
export type IsDeepNonRequired<T> = IfExtends<
  T,
  DeepNonRequired<T>,
  true,
  false
>;

/**
 * A  type that recursively turns the proprties within a given object  type `T` immutable.
 * @example
 * ````ts
type Actual = {
  a: () => 1;
  x: string;
  s: {
    q: Nullable;
    s: {
      i: {
        x: {
          o: Maybe<Primitive>;
          n: Falsy;
        };
        e: 'foo';
      };
    };
  };
};

type Expected = {
  readonly a: () => 1;
  readonly x: string;
  readonly s: {
    readonly q: Nullable;
    readonly s: {
      readonly i: {
        readonly x: {
          readonly o: Maybe<Primitive>;
          readonly n: Falsy;
        };
        readonly e: 'foo';
      };
    };
  };
};
type T = DeepImmutable<Actual>; // T Results in: Expected
 * ````
 * */
export type DeepImmutable<T> = T extends UnknownFunction
  ? T
  : {
      readonly [K in Keys<T>]: T[K] extends unknown
        ? DeepImmutable<T[K]>
        : T[K];
    };

declare const __s: unique symbol;

/**
 * This type represents a new unique type derived from an existing base type.
 * It defines a mechanism similar to Python's [`NewType`](https://docs.python.org/3/library/typing.html#newtype).
 * In TypeScript world it's refered to as 'Type Branding'.
 *
 * @template N The unique identifier for the new type.
 * @template T The base type of the new type.
 *
 * @example
 * type FooID = NewType<'FooID', string>;
 * type BarID = NewType<'BarID', string>;
 *
 * const fooId: FooID = 'foo123' as FooID;
 * const barId: BarID = 'bar456' as BarID;
 *
 * // Here's a potential bug:
 * const buggyFooBar = (foo: string, bar: string) => {};
 * buggyFooBar('bar456', 'foo123'); // this works but it's an undetected bug.
 *
 * // Bug mitigation:
 * const safeFooBar = (foo: FooID, bar: BarID) => {};
 * safeFooBar('bar456', 'foo123'); // TypeScript error: Argument of type 'string' is not assignable to parameter of type 'FooID'.
 */
export type NewType<N, T> = T & {
  /**
   * Property `__s` is not intended for direct access nor modification.
   * @internal
   */ [__s]: N;
};

/**
 * Type that recursively omits specified nested properties from an object type.
 * @template T The input object type.
 * @template P A **string** literal representing the path of properties to omit (e.g., 'person.name.value').
 * @example
 * ```typescript
 * type T =
 *   a: {
 *     b: string;
 *     b2: {
 *       c: {
 *         d: number;
 *       };
 *     };
 *   };
 * }
 *
 * DeepOmit<T, 'a.b2.c'> // Results in: { a: { b: string; b2: {} } }
 * ```
 */
export type DeepOmit<T, P extends string> = P extends `${infer K}.${infer R}`
  ? {
      [KT in Keys<T>]: KT extends K ? DeepOmit<T[KT], R> : T[KT];
    }
  : Omit<T, P>;
/**
 * As the name implies, it turns a union into anintersection 
 * @example 
  type ExpectedToBe = (() => 'foo') & ((baz: 88) => Optional<T>);

  type T = NewType<'T', string>;
  type Result = UnionToIntersection<
      (() => 'foo') | ((baz: 88) => Optional<NewType<'T', string>>)
    >
    // Result: ExpectedToBe

    type Result2 = UnionToIntersection<
      IsFalsy<0> | IsDeepImmutable<{ a: string; readonly b: string }>
    >
    // Result 2: IsFalsy<0> & IsDeepImmutable<{ a: string; readonly b: string }> => true & true => evaluates to true
 * 
 */
export type UnionToIntersection<U> = (
  U extends unknown ? (arg: U) => unknown : never
) extends (arg: infer I) => void
  ? I
  : never;

/**
 * @hidden
 */
type _FindPrimitive<T> = T extends string
  ? string
  : T extends symbol
    ? symbol
    : T extends boolean
      ? boolean
      : T extends null
        ? null
        : T extends number
          ? number
          : T extends bigint
            ? bigint
            : T extends undefined
              ? undefined
              : never;
/**
* @example 
* Recursively transforms an object type `T` into a type where all properties
* are replaced with their corresponding primitive types.
* ````ts
type Actual = {
  a: 'a';
  b: 85;
  c: true;
  d: {
    e: 'xxxxxxxxxxx';
    f: 'eeeeeeeeeeeeeeeeee';
    g: {
      h: 1000000000000000;
      i: undefined;
      j: null;
    };
  };
};
type Expected = {
  a: string;
  b: number;
  c: boolean;
  d: {
    e: string;
    f: string;
    g: {
      h: number;
      i: undefined;
      j: null;
    };
  };
};
type Result = DeepToPrimitive<Actual>; // Expected
* ````
*/
export type DeepToPrimitive<T> = {
  [K in Keys<T>]: T[K] extends object
    ? DeepToPrimitive<T[K]>
    : _FindPrimitive<T[K]>;
};

/**
 * @hidden
 */
type __Merge<T, S> = {
  [K in Keys<T> | Keys<S>]: K extends Keys<S> ? S[K] : T[K & Keys<T>];
};

/**
 * Copies all enumerable own properties from one target object
 * to a source array of objects. 
 * @example 
 * ````ts
 type T = Assign<{ a: 'd'; d: 'd' }, [{ a: 'a' }, { b: 'b' }, { c: 'c' }]>
 // Result: 
 {
      a: 'a';
      b: 'b';
      c: 'c';
      d: 'd';
    }
 * ````
 */
export type Assign<
  T extends Record<string, unknown>,
  Arr extends unknown[],
> = Arr extends [infer S, ...infer E]
  ? Assign<S extends object ? __Merge<T, S> : T, E>
  : T;

/**
 * Get the common keys between two objects, if a key is found to be shared between both,
 * then the type of that key will take the first object's key type
 * @returns
 * An object that consist of what's common in both, else never
 * @example
 * ````ts
 CommonKeys<
      { d: 'first objects d'; x: 'also first objects x' },
      { d: 'd'; p: { b: 'b' }; x: { c: 'c' } }
    >
    // Results in { d: 'first objects d'; x: 'also first objects x' }
 * ````
 */
export type PickCommonKeys<
  T extends Record<string, unknown>,
  U extends Record<string, unknown>,
> = Pick<T, Extract<Keys<T>, Keys<U>> & Extract<Keys<U>, Keys<T>>>;

/**
 * Omit the common keys between the the two objects, 
 * @returns 
 * An object that consist of what's unique in both, else never
 * @example
 * ````ts
 OmitCommonKeys<{ d: { d: 'a' }; p: { b: 'b' }; x: { c: 'c' } }, { d: 'd' }>
 // Result: 
 {
      p: {
        b: 'b';
      };
      x: {
        c: 'c';
      };
    }

 OmitCommonKeys<
      { d: 'd'; k: 'k' },
      { d: 'd'; p: { b: 'b' }; x: { c: 'c' } }
    >
  // Result: 
  { k: 'k' }
 * ````
 */
export type OmitCommonKeys<
  T extends Record<string, unknown>,
  U extends Record<string, unknown>,
> = Pick<T, Exclude<Keys<T>, Keys<U>>>;

/**
 * Deeply pick properties from a nested object type.
 * @template T The target object.
 * @template P A dot-separated string literal representing the path of properties to pick.
 * @example
 * type T = {
  one: string;
  two: {
    a: boolean;
    b: null;
    c: 'c' | 'C';
  };
  thee: number;
};
 * DeepPick<T, 'two.c'> // Results in: 
{
    two: {
      c: 'c' | 'C';
    };
  }
 *
 */
export type DeepPick<
  T extends Record<string, any>,
  P extends string,
> = UnionToIntersection<
  P extends P
    ? P extends `${infer K}.${infer R}`
      ? {
          [K1 in K]: DeepPick<T[K1], R>;
        }
      : P extends Keys<T>
        ? Pick<T, P>
        : never
    : never
>;

/**
 * Retrieves the keys that are mutable from an object of  type T.
 * @example
 * ```typescript
 *  type ExampleType = {
 *   a: number;
 *   readonly b: string;
 *   c: {
 *     a: string;
 *     d: { readonly x: Nullable; v: Maybe<Newable> };
 *   };
 * };
 *
 *  type MutableKeysOfExampleType = MutableKeys<ExampleType>;
 * // Result: 'a' | 'c'
 * ```
 */
export type MutableKeys<T> = {
  [P in Keys<T>]: Equals<Pick<T, P>, Readonly<Pick<T, P>>> extends true
    ? never
    : P;
}[Keys<T>];

/**
 * Retrieves the keys that are immutable (readonly) from an object of  type T.
 * @example
 * ```typescript
 *  type ExampleType = {
 *   a: number;
 *   readonly b: string;
 *   c: {
 *     a: string;
 *     d: { readonly x: Nullable; v: Maybe<Newable> };
 *   };
 * };
 *
 *  type ImmutableKeysOfExampleType = ImmutableKeys<ExampleType>;
 * // Result: 'b'
 * ```
 */
export type ImmutableKeys<T> = {
  [P in Keys<T>]: Equals<Pick<T, P>, Readonly<Pick<T, P>>> extends true
    ? P
    : never;
}[Keys<T>];

/**
 * A function to determines if two types match.
 * @template T1 The first  type to compare.
 * @template T2 The second  type to compare.
 * @template Expected A boolean literal indicating whether `T1` should match `T2`.
 * If you expect the types to match, set this to true; if not, set it to false.
 * @returns
 * Boolean that is true, if your expectation was correct, otherwise false.
 * @hidden
 */
declare function testType<T1, T2, E extends boolean>(): Equals<
  Equals<T1, T2>,
  E
>;
/**
 * Determines if two types match.
 * @template T1 The first  type to compare.
 * @template T2 The second  type to compare.
 * @template Expected A boolean literal indicating whether `T1` should match `T2`.
 * If you expect the types to match, set this to true; if not, set it to false.
 * This utility will return a boolean that is true if your expectation was correct, otherwise false.
 * @example
 * ````ts
 type ExcpectedToBe = true;
  declare const result: TestType<
    If<IsNever<never>, true, false>,
    ExcpectedToBe,
    true
  >
  // result type is true

  const result2: TestType<
    If<IsFloat<5.5>, true, false>,
    ExcpectedToBe,
    true
  >
  // result type is true 
 * ````
 * */
export type TestType<T1, T2, Expected extends boolean> = ReturnType<
  typeof testType<T1, T2, Expected>
>;

/**
 * Infers a mapping from values to their corresponding keys within a given object type `T`.
 * The resulting type provides a reverse lookup, which allows to to retrieve the keys based on specific values.
 * @remarks
 * > This type only works with simple object types without nested structures or complex types.
 * It may not behave as expected with objects containing nested properties, union types, intersections, or other
 * advanced constructs.
 *
 * For example, given a simple object type `T`:
 *
 * ```typescript
 * type SimpleObjectType = {
 *   name: 'Zee';
 *   age: 29;
 *   city: 'Zion';
 * };
 *
 * type T =  KeysToValues<SimpleObjectType> // results in:
 *
 * {
 *   Zee : 'name';
 *   29: 'age';
 *   'Zion': 'city';
 * }
 * ```
 */
export type KeysToValues<T extends Record<Keys<T>, Keys<any>>> = {
  [K in T[Keys<T>]]: {
    [K1 in Keys<T>]: T[K1] extends K ? K1 : never;
  }[Keys<T>];
};

/**
 * `FilterBy<T, P>` filters keys from the object type `T` based on a specified predicate `P`.
 *
 * @remark
 * > This type performs a shallow filtering of keys within `T` and does not check deeply nested types
 * or complex structures within the object type.
 *
 * > It does not return the key as a whole object, it just returns the key itself
 * @example
 *
 * ```typescript
 * type T = {
 *   a: () => 1;
 *   x: string;
 *   s: {
 *     q: Nullable;
 *     s: {
 *       i: {
 *         x: {
 *           o: boolean;
 *           n: Falsy;
 *         };
 *         e: 'foo';
 *       };
 *     };
 *   };
 * };
 *
 * ```
 * ```typescript
 * type _ = FilterBy<T, 'a'>
 * ```
 * Results in the type `'a'`, which includes only the key `'a'` from `T`.
 * ```typescript
 * type _ = FilterBy<T, Falsy>
 * ```
 * Results in the type `never`, indicating that no keys in `T` match the type `Falsy`.
 *
 * ```typescript
 * type _ = FilterBy<T, string>
 * ```
 * Results in the type `'a' | 'x' | 's'`, which includes all top-level keys of `T`
 * that are of type `string`. It did not pick up on 'e' as it is nested down.
 */
export type FilterBy<T, P> = {
  [K in Keys<T>]: K extends P ? K : never;
}[Keys<T>];

/**
 * Get a set of properties from `T` whose type are not assignable to `P`.
 * @example
 * ````ts
 * type T = {
 *  foo: string,
 *  bar: bigint | boolean,
 *  baz: number,
 * }
 * OmitByType<T,true>; // Result: T
 * OmitByType<T,number>; // Result: { foo: string, bar: bigint | boolean }
 * ````
 */
export type OmitByType<T, P> = {
  [K in Keys<T> as T[K] extends P ? never : K]: T[K];
};

/**
 * Get a set of properties from `T` whose type exactly matches `P`.
 * @example
 * ````ts
type OneLevelDeep = {
  foo: boolean;
  bar?: Numeric;
  baz: Nullable;
  fooBaz: bigint;
  bazFoo: string | boolean;
};
type A = OmitExactlyByType<OneLevelDeep, bigint>
// A results in: 
{
      foo: boolean;
      bar?: Numeric;
      baz: Nullable;
      bazFoo: string | boolean;
    }
type B = OmitExactlyByType<OneLevelDeep, string | boolean>
// B results in 
{
      foo: boolean;
      bar?: Numeric;
      baz: Nullable;
      fooBaz: bigint;
  }
 * ````
 */
export type OmitExactlyByType<T, P> = {
  [K in Keys<T> as If<Equals<T[K], P>, never, K>]: T[K];
};

/**
 * From ``T``, pick a set of properties whose type are assignable to ``P``.
 * @example
 * ````ts
 * type T = {
 *  foo: string,
 *  bar: bigint | boolean,
 *  baz: number,
 * }
 * PickByType<T,true>; // Result: {}
 * PickByType<T,number>; // Result: { baz: number }
 * ````
 */
export type PickByType<T, P> = {
  [K in Keys<T> as T[K] extends P ? K : never]: T[K];
};

/**
 * From ``T``, pick a set of properties whose type excatly matches ``P``.
 * @exmaple 
 * ````ts
type OneLevelDeep = {
  foo: boolean;
  bar?: Numeric;
  baz: Nullable;
  fooBaz: bigint;
  bazFoo: string | boolean;
  seven: 7;
  aNum: number;
};
  type A = PickExactlyByType<OneLevelDeep, bigint>,
  // A results in: 
    {
      fooBaz: bigint;
    },
  // Notice how it does not pick up seven
 type B = PickExactlyByType<OneLevelDeep, number>,
    {
      aNum: number;
    }
 * ````
 */
export type PickExactlyByType<T, P> = {
  [K in Keys<T> as If<Equals<T[K], P>, K, never>]: T[K];
};

/**
 * Why not call it ``OptionalKeys``?
 * ``Optional<T>`` in this library represents a type ``T`` that can be either ``T`` or ``null``. So creating
 * ``OptionalKeys`` type would entail removing any type that can be null, which is not the intention here.
 *
 * ``NonRequiredKeys<T>`` simply removes non required keys, as in any property of an object that is
 * marked with `?` operator
 * @example
 * ```ts
 * type T = NonRequiredKeys<{ a: number; b?: string }> // Result:  'b'
 * ```
 */
export type NonRequiredKeys<T> = {
  [K in Keys<T>]-?: EmptyObject extends Pick<T, K> ? K : never;
}[keyof T];

/**
 * Extracts keys from a type `T` that represent required properties.
 * Properties that are not marked with `?`.
 * @example
 * ```ts
 * type T = RequiredKeys<{ a: number; b?: string }> // Result:  'a'
 * ```
 */
export type RequiredKeys<T> = {
  [K in Keys<T>]-?: EmptyObject extends Pick<T, K> ? never : K;
}[keyof T];

/**
 * Make all object properties required
 * @example 
 * ```ts
type Expected = {
  a: () => 1;
  x: string;
  s: {
    q: Nullable;
    s: {
      i: {
        x: {
          o: Maybe<Primitive>;
          n: Falsy;
        };
        e: 'foo';
      };
    };
  };
};

type Actual = {
  a?: () => 1;
  x?: string;
  s?: {
    q?: Nullable;
    s?: {
      i?: {
        x?: {
          o?: Maybe<Primitive>;
          n?: Falsy;
        };
        e?: 'foo';
      };
    };
  };
};
type T = DeepRequired<Actual>; // Result: Expected
 * ```
 */
export type DeepRequired<T> = T extends UnknownFunction
  ? T
  : {
      [K in Keys<T>]-?: IfExtends<T[K], unknown, DeepRequired<T[K]>, T[K]>;
    };

/**
 * Why not call it ``DeepOptional``?
 * ``Optional<T>`` in this library `Optional` represents a type ``T`` that can be either ``T`` or ``null``. So creating
 * ``DeepOptional`` type would entail adding null to every property, which is not the intention here.
 *
 * ``DeepNonRequired<T>`` turns all required keys in a given object (nested) to non required one.
 * non required as in: marked with `?` operator
 * @example
 * ```ts
type Actual = {
  a: () => 1;
  x: string;
  s: {
    q: Nullable;
    s: {
      i: {
        x: {
          o: Maybe<Primitive>;
          n: Falsy;
        };
        e: 'foo';
      };
    };
  };
};

type Expected = {
  a?: () => 1;
  x?: string;
  s?: {
    q?: Nullable;
    s?: {
      i?: {
        x?: {
          o?: Maybe<Primitive>;
          n?: Falsy;
        };
        e?: 'foo';
      };
    };
  };
};
type T = DeepNonRequired<Actual>; // Result: Expected
 * ```
 */
export type DeepNonRequired<T> = T extends UnknownFunction
  ? T
  : {
      [K in Keys<T>]+?: IfExtends<T[K], unknown, DeepNonRequired<T[K]>, T[K]>;
    };

/**
 * @hidden
 */
export class FinalTypeError extends TypeError {}
/**
 * Marks a class as final, preventing inheritance from this class.
 * When applied, any attempt to extend this class will result in a TypeError at runtime.
 * @remarks
 * This decorator does not prevent instantiation of the final class itself.
 * @example 
 * ```ts
 * @Final
 * class Foo<T> {
 *   private _foo: T;
 *   bar: string;
 *
 *   constructor(foo: T) {
 *     this._foo = foo;
 *     this.bar = 'bar';
 *   }
 *
 *   someFoo(): T {
 *     return this._foo;
 *   }
 * }
 *
 * // No problem with instantiation
 * const foo = new Foo<string>('foo');

 * // The line below will cause a TypeError: Cannot inherit from the final class Foo
 * const sub = new SubFoo('subFoo');
 * ```
 * @see {@link https://github.com/microsoft/TypeScript/issues/1534| Issue #1}
 * @see {@link https://github.com/microsoft/TypeScript/issues/8306| Issue #2}
 * @see {@link https://github.com/microsoft/TypeScript/issues/50532| Issue #3}
 */
export const Final = <CST extends Newable>(cst: CST): CST => {
  class F extends cst {
    constructor(...args: any[]) {
      super(...args);
      const newTarget = new.target as unknown as typeof F;
      if (newTarget !== F) {
        throw new FinalTypeError(`Cannot inherit from a final class`);
      }
    }
  }

  Reflect.defineProperty(F, 'name', {
    // eslint-disable-next-line
    value: (cst as any).name || 'Final',
  });

  return F as CST;
};
/**
  TODO: figure it out, maybe use the new stage 3 decorators 
  see [this](https://github.com/microsoft/TypeScript/pull/50820) 
*/
/* eslint-disable @typescript-eslint/no-unused-vars */
const finalMethod = (
  target: object,
  propertyKey: MaybeUndefined<string | symbol>,
  descriptor: PropertyDescriptor
): PropertyDescriptor => {
  /* eslint-disable @typescript-eslint/no-unsafe-assignment */
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    if (new.target !== target.constructor) {
      throw new TypeError(
        `Cannot override final method '${String(propertyKey)}' in class '${
          target.constructor.name
        }'`
      );
    }

    /* eslint-disable @typescript-eslint/no-unsafe-call */
    /* eslint-disable  @typescript-eslint/no-unsafe-return */
    /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    return originalMethod.apply(this, ...args);
  };

  return descriptor;
};

const _freeze = (obj: object) => {
  Object.freeze(obj);
};
/**
 * When applied to a class it creates a [frozen](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) instance of it,
 * thus preventing modifications to instance properties after instantiation.
 *
 * @example
 * ```ts
@Frozen
class Foo<T> {
  foo: T;
  bar?: MaybeUndefined<string>;

  constructor(foo: T) {
    this.foo = foo;
    this.bar = 'bar';
  }

  someFoo(): T {
    return this.foo;
  }
}

const foo = new Foo('foo');
// The line below will cause a TypeError: Cannot assign to read only property 'bar'
foo.bar = 'altered bar';
// The line below will cause a TypeError: Cannot delete property 'bar'
delete foo.bar;
 * ```
 */
export function Frozen<T extends Newable>(cst: T): T & Newable {
  return class Locked extends cst {
    constructor(...args: any[]) {
      super(...args);
      _freeze(this);
    }
  };
}

const _seal = (obj: object) => {
  Object.seal(obj);
};
/**
 * When applied to a class, it creates a [sealed](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal) instance of it,
 * preventing extensions and making existing properties non-configurable.
 *
 * @example
 * ```ts
 * @Sealed
 * class Person {
 *   constructor(public name: string, public age?: number) {}
 * }
 *
 * const john = new Person('John', 30);
 * // Trying to add a new property will throw an error
 * (john as any).email = 'john@example.com'; // TypeError: Cannot add property email, object is not extensible
 *
 * // Existing properties can still be modified
 * john.age = 31; // Allowed
 *
 * // Existing properties cannot be re-configured or deleted
 * delete john.age; // TypeError: Cannot delete property 'age'
 * }
 * ```
 * */
export function Sealed<T extends Newable>(cst: T): T & Newable {
  return class Locked extends cst {
    constructor(...args: any[]) {
      super(...args);
      _seal(this);
    }
  };
}
