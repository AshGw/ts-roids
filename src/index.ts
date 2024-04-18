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

/**
 * Represents a type that can be either a single value of type `T` or an array of values of type `T`.
 * @example
 * type SingleOrArray<T> = OneOrMany<T>;
 *
 * const value1: OneOrMany<number> = 10; // Valid, value1 is a single number
 * const value2: OneOrMany<number> = [20, 30]; // Valid, value2 is an array of numbers
 */
export type OneOrMany<T> = T | T[];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Newable = { new (...args: any[]): any };

export type ExcludeNullable<T> = Exclude<T, Nullable>;
export type ExcludeUndefined<T> = Exclude<T, undefined>;
export type ExcludeNull<T> = Exclude<T, null>;
export type DeepExcludeNullable<T> = {
  [P in Keys<T>]-?: ExcludeNullable<T[P]>;
};

export type Maybe<T> = T | Nullable;
export type MaybeUnknown<T> = T | unknown;
export type MaybeUndefined<T> = T | undefined;
export type Optional<T> = T | null;

export type DeepPartial<T> = {
  [P in Keys<T>]?: DeepPartial<T[P]>;
};

export type Mutate<T> = {
  -readonly [K in Keys<T>]: T[K];
};
export type IsMutable<T> = T extends DeepMutate<T> ? true : false;

export type DeepMutate<T> = {
  -readonly [K in Keys<T>]: DeepMutate<T[K]>;
};

export type Immutate<T> = {
  +readonly [K in Keys<T>]: T[K];
};

export type DeepImmutate<T> = {
  +readonly [K in Keys<T>]: DeepImmutate<T[K]>;
};

export type IsNewable<T> = T extends Newable ? true : false;

export type AlterKeyType<T, K extends Keys<T>, R> = Pick<
  T,
  Exclude<Keys<T>, K>
> & { [P in K]: R };

export type SwapKeysWithVals<T extends Record<Keys<T>, Keys<any>>> = {
  [P in T[Keys<T>]]: {
    [K in Keys<T>]: T[K] extends P ? K : never;
  }[keyof T];
};

export type Stretch<T> = T extends object
  ? T extends infer P
    ? { [K in Keys<P>]: Stretch<P[K]> }
    : never
  : T;

const _ = Symbol('_');
export type TypeGuard<T> = (_: any) => _ is T;

export type FilterBy<T, P> = {
  [K in Keys<T>]: K extends P ? K : never;
}[Keys<T>];

export type PickBy<T, P> = Pick<T, FilterBy<T, P>>;
export type OmitBy<T, P> = Omit<T, FilterBy<T, P>>;

export type EmptyObject = Record<string, never>;

export type NullableKeys<T> = {
  [K in Keys<T>]-?: EmptyObject extends Pick<T, K> ? K : never;
}[keyof T];

export type DeepNullableKeys<T> = {
  [K in Keys<T>]-?: EmptyObject extends Pick<T, K> ? NullableKeys<K> : never;
}[keyof T];

export type NonNullableKeys<T> = {
  [K in Keys<T>]-?: EmptyObject extends Pick<T, K> ? never : K;
}[keyof T];

export type DeepNonNullableKeys<T> = {
  [K in Keys<T>]-?: EmptyObject extends Pick<T, K> ? never : NonNullableKeys<K>;
}[keyof T];

export type Callable<A extends any[], R> = (...args: A) => R;

export function locked(constructor: Newable): void {
  function _sealAndFreeze(obj: object): void {
    Object.seal(obj);
    Object.freeze(obj);
    Object.preventExtensions(obj);
  }
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
