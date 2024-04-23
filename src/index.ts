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
 * Turns a given numeric value (number or bigint) into its string representation
 * @example
 * ```ts
 * type _ = StringifyNum<45> // Result: '45'
 * ```
 */
export type StringifyNum<N extends Numeric> = `${N}`;

/**
 * Checks if a given numeric value is negative
 * @returns
 * true if it is, otherwise false
 */
/* eslint-disable @typescript-eslint/no-unused-vars */
export type IsNegative<N extends Numeric> =
  StringifyNum<N> extends `-${infer U}` ? true : false;
export type IsPositive<N extends Numeric> = N extends N
  ? Numeric extends N
    ? boolean
    : `${N}` extends `-${Numeric}`
      ? false
      : true
  : never;

type ____ = IsPositive<54>;
type _____ = IsPositive<-54>;

type MinInTwoPositiveNums<
  N1 extends Numeric,
  N2 extends Numeric,
  L extends any[] = EmptyArray,
> = L['length'] extends N1 | N2
  ? L['length'] extends N1
    ? N1
    : N2
  : MinInTwoPositiveNums<N1, N2, [-1, ...L]>;

type MaxInTwoPositiveNums<
  A extends Numeric,
  B extends Numeric,
  A1 extends Numeric = A,
  B1 extends Numeric = B,
  areAllNegative extends boolean = false,
> = A extends MinInTwoPositiveNums<A, B>
  ? areAllNegative extends true
    ? A1
    : B1
  : areAllNegative extends true
    ? B1
    : A1;

type Abs<T extends Numeric> = `${T}` extends `-${infer A extends Numeric}`
  ? A
  : T;

type Strlen<
  S extends string,
  Arr extends any[] = EmptyArray,
> = S extends `${infer L}${infer R}` ? Strlen<R, [...Arr, L]> : Arr['length'];

type IsEqualStrlen<S1 extends string, S2 extends string> = Equals<
  Strlen<S1>,
  Strlen<S2>
>;

type Compare<
  A extends Numeric,
  B extends Numeric,
  AreNegative extends boolean = false,
  A1 extends Numeric = A,
  B1 extends Numeric = B,
  AS extends string = StringifyNum<A>,
  BS extends string = StringifyNum<B>,
> = IsEqualStrlen<AS, BS> extends true
  ? AS extends `${infer L1 extends Numeric}${infer R1}`
    ? BS extends `${infer L2 extends Numeric}${infer R2}`
      ? Equals<L1, L2> extends true
        ? Compare<A, B, AreNegative, A1, B1, R1, R2>
        : MaxInTwoPositiveNums<L1, L2, A1, B1, AreNegative>
      : A1
    : A1
  : Strlen<AS> extends MinInTwoPositiveNums<Strlen<AS>, Strlen<BS>>
    ? AreNegative extends false
      ? B1
      : A1
    : AreNegative extends false
      ? A1
      : B1;
type MaxInTwoNums<
  A extends Numeric,
  B extends Numeric,
> = IsNegative<A> extends true
  ? IsNegative<B> extends true
    ? Compare<Abs<A>, Abs<B>, true, A, B>
    : B
  : IsNegative<B> extends true
    ? A
    : Compare<A, B>;

type ArrayMax<
  Arr extends Numeric[],
  M extends Numeric = Arr[0],
  Initial extends boolean = true,
> = Arr['length'] extends 0
  ? Initial extends true
    ? never
    : M
  : Arr extends [infer A extends Numeric, ...infer B extends Numeric[]]
    ? ArrayMax<B, MaxInTwoNums<A, M>, false>
    : M;

type Test1 = IsNegative<5>; // true
type Test2 = IsNegative<0>; // false
type Test3 = IsNegative<10>; // false
type Test4 = IsPositive<-10>; // true
type Test5 = IsPositive<0>; // true
type Test55 = IsPositive<10>; // true

type Test6 = MaxInTwoPositiveNums<10, 40>;
type Test7 = MinInTwoPositiveNums<10, 40>;

type Test8 = Strlen<'str'>; // 3
type Test9 = Strlen<'999999999'>; // 9
type Test10 = MinInTwoPositiveNums<10, 40>; // 10
type Test11 = MinInTwoPositiveNums<0, 54>; // 0
type Test12 = IsEqualStrlen<'Test8', 'Test9'>;
type Test13 = Abs<-87>; // 87
type Test14 = Abs<87>; // 87
type Test15 = MaxInTwoNums<-87, 87>; // 87
type Test16 = MaxInTwoNums<87, 87>; // 87
type Test17 = MaxInTwoNums<0, 0>; // 0
type Test18 = MaxInTwoNums<-871, -999>; // -871
type Test19 = MaxInTwoNums<-871, -999>; // -871
type test20 = Compare<-54, -87>;

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
 * `Optional<T>` is similar to Python's `Optional` and Rust's `Option` types.
 * `Optional<T>`  promotes more predictable code,
 * by enforcing explicit handling of optional scenarios by requiring functions
 * to return `null` specifically when a value is absent.
 */
export type Optional<T> = T | null;

/**
 Represnets a type that might be nullable.
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

type UnionToIntersection<U> = (
  U extends unknown ? (arg: U) => unknown : never
) extends (arg: infer I) => void
  ? I
  : never;

/**
 * Utility type to deeply pick properties from a nested object type.
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

type EmptyArray = [];
/**
 * Transposes a given 2D array `M`, flipping the matrix over its diagonal, switching its row and column indices.
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

/**
 * A function to determines if two types match.
 * @template T1 The first  type to compare.
 * @template T2 The second  type to compare.
 * @template Expected A boolean literal indicating whether `T1` should match `T2`.
 * If you expect the types to match, set this to true; if not, set it to false.
 * @returns
 * Boolean that is true, if your expectation was correct, otherwise false.
 */
export declare function testType<T1, T2, E extends boolean>(): Equals<
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
  typeof testType<T1, T2, Expected>
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

/**
 * `FilterBy<T, P>` filters keys from the object type `T` based on a specified property `P`.
 *
 * Note: This type performs a shallow filtering of keys within `T` and does not check deeply nested types
 * or complex structures within the object type.
 * @remark
 * It does not return the key as a whole object, it just returns the key itself
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

export type Stretch<T> = T extends object
  ? T extends infer P
    ? { [K in Keys<P>]: Stretch<P[K]> }
    : never
  : T;

/**
 * Presents any non-nullish value
 */
export type EmptyObject = NonNullable<unknown>;
/**
 * Why not call it ``OptionalKeys`` ?
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

export class FinalTypeError extends TypeError {}
/**
 * Marks a class as final, preventing inheritance from this class.
 * When applied, any attempt to extend this class will result in a TypeError at runtime.
 * 
 * @remarks
 * Does not prevent instantiation of the final class itself.
 * 
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
  TODO: figure it out 
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
 * When applied to a class it creates a frozen instance of it,
 * thus preventing modifications to instance properties after instantiation.
 */
export function Frozen<T extends Newable>(cst: T): T & Newable {
  return class Locked extends cst {
    constructor(...args: any[]) {
      super(...args);
      _freeze(this);
    }
  };
}
