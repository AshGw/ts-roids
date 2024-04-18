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
export type IsNever<T> = T extends never ? true : false;

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

/**
 * Represents a type that can be either a single value of type `T` or an array of values of type `T`.
 * @example
 * type SingleOrArray<T> = OneOrMany<T>;
 *
 * const value1: OneOrMany<number> = 10; // Valid
 * const value2: OneOrMany<number> = [20, 30]; // Also valid
 */
export type EitherOneOrMany<T> = T | T[];
export type Newable = { new (...args: any[]): any };
export type IsNewable<T> = T extends Newable ? true : false;
export type AnyFunction = (...args: any[]) => any;
export type UnknownFunction = (...args: unknown[]) => unknown;
export type Callable<A extends any[], R> = (...args: A) => R;
export type IfExtends<T, P, Do, Else> = T extends P ? Do : Else;
export type Equals<X, Y> = (<T>() => T extends X ? true : false) extends <
  T,
>() => T extends Y ? true : false
  ? true
  : false;

// Typesafer way han maybe, think about hwen you have optional return types of
// functions, shoud u `return` ?  with maybe ure free to do it or not
// but optional u have to return null, so the use case and handling are superior

export type Optional<T> = T | null;
export type Maybe<T> = T | Nullable;
export type MaybeUnknown<T> = T | unknown;
export type MaybeUndefined<T> = T | undefined;

export type ExcludeNullable<T> = Exclude<T, Nullable>;
export type ExcludeUndefined<T> = Exclude<T, undefined>;
export type ExcludeNull<T> = Exclude<T, null>;

export type DeepExcludeNullable<T> = {
  [P in Keys<T>]: DeepExcludeNullable<ExcludeNullable<T[P]>>;
};

export type DeepPartial<T> = {
  [P in Keys<T>]?: DeepPartial<T[P]>;
};

type X = {
  readonly a: () => 1;
  readonly b: string;
  readonly c: {
    readonly d: boolean;
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true;
          readonly j: 's';
        };
        readonly k: 'hello';
      };
    };
  };
};

type Expected = {
  a: () => 1;
  b: string;
  c: {
    d: boolean;
    e: {
      g: {
        h: {
          i: true;
          j: 's';
        };
        k: 'hello';
      };
    };
  };
};

export type DeepMutable<T> = T extends UnknownFunction
  ? T
  : {
      -readonly [K in Keys<T>]: T[K] extends unknown ? DeepMutable<T[K]> : T[K];
    };

export type IsDeepMutable<T> = T extends DeepMutable<T> ? true : false;
export type ResultType = TestType<DeepMutable<X>, Expected, true>;

export type DeepImmutable<T> = T extends UnknownFunction
  ? T
  : {
      readonly [K in Keys<T>]: T[K] extends unknown
        ? DeepImmutable<T[K]>
        : T[K];
    };

export type IsDeepImmutable<T> = T extends DeepImmutable<T> ? true : false;
export type ResultType1 = TestType<IsDeepImmutable<X>, true, true>;
export type ResultType2 = TestType<DeepImmutable<Expected>, X, true>;
export type ResultType3 = DeepImmutable<Expected>;

export type AlterKeyTypeWith<T, K extends Keys<T>, R> = Pick<
  T,
  Exclude<Keys<T>, K>
> & { [P in K]: R };

export type SwapKeysWithVals<T extends Record<Keys<T>, Keys<any>>> = {
  [P in T[Keys<T>]]: {
    [K in Keys<T>]: T[K] extends P ? K : never;
  }[keyof T];
};

declare const __s: unique symbol;

/**
 * This type alias defines a mechanism similar to Python's [`NewType`](https://docs.python.org/3/library/typing.html#newtype).
 * In TypeScript world it's refered to as 'Branding'.
 * The `NewType<N>` encapsulates `N`, thus creating a distinct type that
 * TypeScript's type system recognizes as separate from its underlying type.
 * @example
 * type Foo = NewType<string>;
 * type Bar = NewType<number>;
 * type Baz = NewType<boolean>;
 *
 * function fooBarBaz(foo: Foo, bar: Bar): Baz {
 *   foo.concat(); // Allowed since Foo is an underlying string
 *   bar.toExponential(); // Allowed since Bar is based on number
 *   const baz = true as Baz; // Valid
 *
 *   // The following lines will result in a compiler error:
 *   foo.toExponential(); // Compiler Error, Foo is based on string
 *   const notBaz = 'str' as Baz; // Compiler Error, Baz is based on boolean
 * return baz;
 * }
 */
export type NewType<N> = {
  /**
   * Property `__s` is not intended for direct access or modification.
   * @internal
   */
  [__s]: true;
} & N;

export type Stretch<T> = T extends object
  ? T extends infer P
    ? { [K in Keys<P>]: Stretch<P[K]> }
    : never
  : T;

export type TypeGuard<T> = (U: unknown) => U is T;

export type FilterBy<T, P> = {
  [K in Keys<T>]: K extends P ? K : never;
}[Keys<T>];

export type PickBy<T, P> = Pick<T, FilterBy<T, P>>;
export type OmitBy<T, P> = Omit<T, FilterBy<T, P>>;

/**
 * Represents a type that filters elements from an array based on a given predicate type.
 * @typeParam T The array type to filter.
 * @typeParam P The predicate type used for filtering elements from `T`.
 * @returns a new array type containing only the elements of `T` that match `P`.
 * @example
 * ```typescript
 * type Numbers = [0, 1, 2, 3];
 * type FilteredNumbers = Filter<Numbers, 0 | 1>; // Results in [0, 1]
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

export type EmptyObject = Exclude<object, Nullable>;

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

export type MutableKeys<T> = keyof {
  [P in Keys<T> as Equals<Pick<T, P>, Readonly<Pick<T, P>>> extends true
    ? never
    : P]: never;
};

export type Result3 = TestType<
  MutableKeys<{ a: number; readonly b: string }>,
  'a',
  true
>;

export type ImmutableKeys<T> = keyof {
  [P in Keys<T> as Equals<Pick<T, P>, Readonly<Pick<T, P>>> extends true
    ? P
    : never]: never;
};

export type Result4 = TestType<
  ImmutableKeys<{ a: number; readonly b: string }>,
  'b',
  true
>;

declare function _testType<T1, T2, E extends boolean>(): Equals<
  Equals<T1, T2>,
  E
>;
export type TestType<T1, T2, Expected extends boolean> = ReturnType<
  typeof _testType<T1, T2, Expected>
>;

/* class is fucking lockedin ong! */
export function locked(constructor: Newable): void {
  const _sealAndFreeze = (obj: object): void => {
    Object.seal(obj);
    Object.freeze(obj);
    Object.preventExtensions(obj);
  };
  _sealAndFreeze(constructor);
  _sealAndFreeze(constructor.prototype);
}

export function final<T extends Newable>(target: T): T {
  return class Final extends target {
    constructor(...args: any[]) {
      if (new.target !== Final) {
        throw new Error(`${target.name} is final, you cannot extend it`);
      }
      super(...args);
    }
  };
}

/**
 * Represents a type that checks if a specified element type exists within an array.
 * @typeParam T The array type to search within.
 * @typeParam I The element type to check for existence in `T`.
 * @returns `true` if `I` is found within `T`, otherwise `false`.
 * @example
 * ```typescript
 * type Numbers = [0, 1, 2];
 * type CheckZero = IsInArray<Numbers, 0>; // true
 * type CheckThree = IsInArray<Numbers, 3>; // false
 * ```
 */
export type IsInArray<T extends unknown[], I> = T extends [infer S, ...infer E]
  ? Equals<S, I> extends true
    ? true
    : IsInArray<E, I>
  : false;

export type UniqueArray<T, R extends any[] = []> = T extends [
  infer S,
  ...infer E,
]
  ? IsInArray<R, S> extends true
    ? UniqueArray<E, R>
    : UniqueArray<E, [...R, S]>
  : R;
