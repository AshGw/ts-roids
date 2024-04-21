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
 * Checks if a given type `T` is `Falsy`.
 * @returns `true` if `T` is a subtype of `Falsy`, otherwise `false`.
 * @example
 * type Falsy = IsFalsy<''>; // TestFalsy is tru`
 * type Truthy = IsFalsy<10>; // TestTruthy is false
 */
export type IsFalsy<T> = T extends Falsy ? true : false;

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
export type IsTruthy<T> = T extends Exclude<T, Falsy> ? true : false;

/**
 * Checks if a given  type `T` is `never`.
 * The `never`  type represents a value that never occurs,
 * for example a function that always errors out.
 * @returns `true` if `T` is `never`, otherwise `false`.
 * @example
 *  type Never = IsNever<never>; => true
 *  type NotNever = IsNever<string>; => false
 */
export type IsNever<T> = T extends never ? true : false;

/**
 * Checks if a given  type `T` is `unknown`.
 * The `unknown`  type is the export type-safe counterpart of `any`.
 * Values of  type `unknown` can hold any value, similar to `any`, but with stricter  type safety.
 * Unlike `any`, you cannot perform operations directly on values of  type `unknown`
 * without  type assertion or  type narrowing.
 * @returns `true` if `T` is `unknown`, otherwise `false`.
 * @example
 *  type UnknownValue = unknown;
 *  type IsUnknownValue = IsUnknown<UnknownValue>; =>  true
 *
 *  type KnownValue = string;
 *  type IsNotUnknownValue = IsUnknown<KnownValue>; => true
 */
export type IsUnknown<T> = T extends unknown ? true : false;

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
 *  type SingleOrArray<T> = OneOrMany<T>;
 *
 * const value1: OneOrMany<number> = 10; // Valid
 * const value2: OneOrMany<number> = [20, 30]; // Also valid
 */
export type EitherOneOrMany<T> = T | T[];

/**
 * Represents a  type that can be used to construct a new instance.
 * This type is typically used to describe constructor functions or classes
 * that can be invoked using the `new` keyword.
 */
export type Newable = { new (...args: any[]): any };

/**
 * Checks if a given type `T` is a type that can be used to construct a new instance (i.e., a `Newable`  type).
 * The `Newable` type typically represents constructor functions or classes that can be invoked using the `new` keyword.
 * @returns `true` if `T` is a `Newable`, otherwise `false`.
 */
export type IsNewable<T> = T extends Newable ? true : false;

/**
 * Represents a  type that describes any function accepting any arguments
 *  and returning any value.
 */
export type AnyFunction = (...args: any[]) => any;

/**
 * Represents a  type that describes any function accepting and retruning `unknown`s
 */
export type UnknownFunction = (...args: unknown[]) => unknown;

/**
 * Conditional  type that checks if  type `T` extends  type `P`.
 * If `T` extends `P`, the  type resolves to `Do`; otherwise, it resolves to `Else`.
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
 * Conditional  type that checks if two types `X` and `Y` are exactly equal.
 * If `X` is equal to `Y`, the  type resolves to `true`; otherwise, it resolves to `false`.
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
 * `Optional<T>` is similar to Python's `Optional` and Rust's `Option` types. It solves
 * the common pitfall associated with optional types in TypeScript, where using the `?`
 * operator yields `T | undefined | null`. `Optional<T>`  promotes more predictable code
 * by enforcing explicit handling of optional scenarios by requiring functions
 * to return `null` specifically when a value is absent.
 */
export type Optional<T> = T | null;

/**
This is the same as the `?` operator, try to use `Optional<T>` instead 
*/
export type Maybe<T> = T | Nullable;
export type MaybeUnknown<T> = T | unknown;
export type MaybeUndefined<T> = T | undefined;

/** 
 A  type that excludes `null` and `undefined` from  type `T`.
 * @example
 Type Str = ExcludeNullable<string | null> //  string 
 Type Str2 = ExcludeNullable<string | null | undefined> //  string 
 Type Str3 = ExcludeNullable<string | undefined> //  string 

 */
export type ExcludeNullable<T> = Exclude<T, Nullable>;
/** 
 A  type that excludes `undefined` from  type `T`.
 * @example
 Type Str = ExcludeNullable<string | undefined> // Result:  string 
 */
export type ExcludeUndefined<T> = Exclude<T, undefined>;

/** 
 A  type that excludes `null` from  type `T`.
 * @example
 Type Str = ExcludeNullable<string | null> // Result:  string 
 */
export type ExcludeNull<T> = Exclude<T, null>;

/**
 * A  type that recursively mutates all the proprties within a given object  type `T`.
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
 * A  type that recursively turns the proprties within a given object  type `T` immutable.
 */
export type DeepImmutable<T> = T extends UnknownFunction
  ? T
  : {
      readonly [K in Keys<T>]: T[K] extends unknown
        ? DeepImmutable<T[K]>
        : T[K];
    };

/**
 * Checks if all the nested properties of a given object T is actually immutable.
 */
export type IsDeepImmutable<T> = T extends DeepImmutable<T> ? true : false;

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
 * @template P A string literal representing the path of properties to omit (e.g., 'person.name.value').
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

export type EmptyArray = [];
/**
 * Represents a  type that transposes a given 2D array `M`.
 * It flips the matrix over its diagonal, switching its row and column indices.
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
 * @returns a new array type containing only the elements of `T` that match `P`.
 * @example
 * ```typescript
 *  type Numbers = [0, 1, 2, 3];
 *  type FilteredNumbers = Filter<Numbers, 0 | 1>; // Results in [0, 1]
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

declare function _testType<T1, T2, E extends boolean>(): Equals<
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
 */
export type TestType<T1, T2, Expected extends boolean> = ReturnType<
  typeof _testType<T1, T2, Expected>
>;

/**
 * Represents a  type that checks if a specified element  type exists within an array.
 * @typeParam T The array  type to search within.
 * @typeParam I The element  type to check for existence in `T`.
 * @returns `true` if `I` is found within `T`, otherwise `false`.
 * @example
 * ```typescript
 *  type Numbers = [0, 1, 2];
 *  type CheckZero = IsInArray<Numbers, 0>; // true
 *  type CheckThree = IsInArray<Numbers, 3>; // false
 * ```
 */
export type IsInArray<T extends unknown[], I> = T extends [infer S, ...infer E]
  ? Equals<S, I> extends true
    ? true
    : IsInArray<E, I>
  : false;

/**
 * A  type that constructs a new array containing only unique elements from a given array export type.
 * @typeParam T The input array  type from which unique elements are extracted.
 * @example
 * ```typescript
 *  type UArr = UniqueArray<
  [unknown, unknown, 'foo', any, never, never, '33', 33, '33']
>; // =>  [unknown, 'foo', any, never, '33', 33]
 * ```
 */
export type UniqueArray<T, R extends any[] = []> = T extends [
  infer S,
  ...infer E,
]
  ? IsInArray<R, S> extends true
    ? UniqueArray<E, R>
    : UniqueArray<E, [...R, S]>
  : R;

/**
 * Infers a mapping from values to their corresponding keys within a given object type `T`.
 * The resulting type provides a reverse lookup, which allows to to retrieve the keys based on specific values.
 *
 * Note: This type only works with simple object types without nested structures or complex types.
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

export type Stretch<T> = T extends object
  ? T extends infer P
    ? { [K in Keys<P>]: Stretch<P[K]> }
    : never
  : T;

export type TypeGuard<T> = (U: unknown) => U is T;

/**
 * `FilterBy<T, P>` filters keys from the object type `T` based on a specified property `P`.
 * The resulting type consists of keys from `T` that match the type or value specified by `P`.
 *
 * Note: This type performs a shallow filtering of keys within `T` and does not check deeply nested types
 * or complex structures within the object type.
 *
 * For example, given an object type `T`:
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

export type PickBy<T, P> = Pick<T, FilterBy<T, P>>;
export type OmitBy<T, P> = Omit<T, FilterBy<T, P>>;

export type EmptyObject = NonNullable<unknown>;

export type OptionalKeys<T> = {
  [K in Keys<T>]-?: EmptyObject extends Pick<T, K> ? K : never;
}[keyof T];

export type DeepOptionalKeys<T> = {
  [K in Keys<T>]-?: EmptyObject extends Pick<T, K> ? OptionalKeys<K> : never;
}[keyof T];

export type RequiredKeys<T> = {
  [K in Keys<T>]-?: EmptyObject extends Pick<T, K> ? never : K;
}[keyof T];

export type DeepRequiredKeys<T> = {
  [K in Keys<T>]-?: EmptyObject extends Pick<T, K> ? never : RequiredKeys<K>;
}[keyof T];
