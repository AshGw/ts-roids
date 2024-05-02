<div align="center">

# ts-roids

Collection of utility types and decorators to bullet proof TypeScript even more.

[![tests](https://github.com/AshGw/ts-roids/actions/workflows/test.yml/badge.svg)](https://github.com/AshGw/ts-roids/actions/workflows/test.yml)
[![@latest](https://img.shields.io/npm/v/ts-roids.svg)](https://www.npmjs.com/package/ts-roids)
[![npm downloads](https://img.shields.io/npm/dm/ts-utils.svg)](https://www.npmjs.com/package/ts-roids)
[![bundle size](https://img.shields.io/bundlephobia/minzip/utility-types.svg)](https://www.npmjs.com/package/ts-roids)
<hr/>
</div>

## Installation 
**npm**
```bash
npm i ts-roids
```
**pnpm**
```bash
pnpm i ts-roids
```
If you're only using types, you can install it as a ``devDependency``.
And if you're using decorators, set this property inside `tsconfig.json`.
```json
{
  "compilerOptions": {
    // ...
    "experimentalDecorators": true
  }
}
```
Requires TypesScript `v5.0`+
## Documentation
Checkout the [API reference](https://ashgw.github.io/ts-roids/) for all usage examples with details. 
### API
Below are all the available types.
#### Types 
- [`Abs<N>`](https://ashgw.github.io/ts-roids/types/Abs.htmlhttps://ashgw.github.io/ts-roids/types/Abs.html) - Get the absolute value of a [``Numeric``](https://ashgw.github.io/ts-roids/types/Abs.htmlhttps://ashgw.github.io/ts-roids/types/Numeric.html).
- [`And<B1,B2>`]() - Logical AND between two boolean types.
- [`AnyFunction`]() - Describes any function accepting any arguments and returning any value.
- [`ArrayFilter<Arr,P`]() - Filters elements from an array based on a given predicate type.
- [`ArrayIncludes<Arr,T>`]() - Checks if a given type is in an array.
- [`ArrayIntersection<Arr>`]() - Calculates the intersection of the types within an array Arr of tuple types.
- [`ArrayIntersection<Arr>`]() - Calculates the intersection of the types within an array Arr of tuple types.
- [`ArrayMax<Arr>`]() - Extracts the maximum [``Numeric``]() (positive and negative) value in a given array.
- [`ArrayMin<Arr>`]() - Extracts the minimum [``Numeric``]() (positive and negative) value in a given array.
- [`ArrayTranspose<Arr>`]() - Transposes a given 2xN array or matrix ``M``, flipping the matrix over its diagonal, switching its row and column indices.
- [`ArrayUnique<Arr>`]() - Constructs a new array containing only unique elements from a given array type.
- [`Assign<Obj,ObjArr>`]() - Copies all enumerable own properties from one target object to a source array of objects.
- [`DeepImmutable<Obj>`]() - Recursively turns the proprties within a given object type ``T`` immutable, as in have all the properties with the `readonly` modifier.
- [`Deepmutable<Obj>`]() - Recursively mutates all the proprties within a given object type ``T``, as in have all the properties without the `readonly` modifier.
- [`DeepRequired<Obj>`]() - Recursively make all object properties required.
- [`DeepNotRequired<Obj>`]() - Recursively make all object properties not required.
- [`DeepOmit<Obj,P>`]() - Recursively omits specified nested properties from an object, based on a given predicate `P`.
- [`DeepPick<Obj,P>`]() - Deeply pick properties from a nested object, based on a given predicate `P`.
- [`DeepToPrimitive<Obj>`]() - Recursively transforms an object type T into a type where all properties are replaced with their corresponding primitive types.
- [`EitherOneOrMany<T>`]() - Represents a type that can be either a single value of type T or an array of values of type T.
- [`EmptyObject`]() - Represents any non-nullish value, basically `{}`.
- [`EqualStrlen<S1, S2>`]() - Check if two strings ``S1`` and ``S2`` have the same length.
- [`Equals`]() - Represents any non-nullish value, basically `{}`.
- [`Equals<X,Y>`]() - Checks if two types ``X`` and ``Y`` are exactly equal.
- [`ExcludeNull<T>`]() - Excludes ``null`` from a type ``T``.
- [`ExcludeNullable<T>`]() - Excludes [`Nullable`]() from a type ``T``.
- [`ExcludeUndefined<T>`]() - Excludes `undefined` from a type ``T``.
- [`Extends<T,U>`]() - Evaluates whether one type ``T`` is assignable to another type ``U``.
- [`Falsy`]() - Represents a type that includes [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) values in JavaScript. 
- [`FilterBy<Obj, P>`]() -  Filters keys from the object type `Obj` based on a specified predicate ``P``.
- [`Flip<Obj>`]() - Flips keys with values of an object type `Obj`.
- [`Float<N>`]() - Type representing a float.
- [`If<C, Do, Else>`]() - If ``C`` evaluates ``true``, return ``Do``, otherwise return ``Else``.
- [`IfEquals<T, P, Do, Else>`]() - Checks if type ``T`` is equal to type ``P``. If ``T`` is equal to ``P``, the type resolves to ``Do``, otherwise ``Else``.
- [`IfExtends<T, P, Do, Else>`]() -  Checks if type ``T`` extends type ``P``. if it does, the type resolves to ``Do``, otherwise ``Else``.
- [`ImmutableKeys<Obj>`]() - Retrieves the keys that are immutable (``readonly``) from an object of type ``Obj``.
- [`Integer<N>`]() - Represents an integer.
- [`IsAnyFunction<T>`]() - Checks if a type ``T`` is  [``AnyFunction``]().
- [`IsArray<T>`]() - Checks if a type `T` is an array.
- [`IsArrayIncludesTypeof<Arr, T>`]() - Checks if an array type `Arr` includes one or more of `T` type.
- [`IsArrayOf<Arr, T`]() - Checks if a given array type ``Arr`` is exactly an array of elements of type ``T``.
- [`IsBigInt<T>`]() - Checks if `T` is a ``bigint``.
- [`IsBoolean<T>`]() -  Checks if `T` is a ``boolean``.
- [`IsDeepImmutable<Obj>`]() - Checks if all the nested properties of a given object ``Obj`` are immutable.
- [`IsDeepMutable<Obj>`]() - Checks if all the nested properties of a given object ``Obj`` are  mutable.
- [`IsDeepNotRequired<Obj>`]() - Check if all the properties of a given object (nested) are not required, as in, all properties have the `?` modifier.

- [`IsDeepRequired<Obj>`]() - Check if all the properties of a given object (nested) are required, as in, all properties do not have the `?` modifier.
- [`IsEven<T>`]() - Checks if the given type is an even number.
- [`IsExactlyAny<T>`]() - Checks if a type `T` is exactly `any`.
- [`IsExactlyBigInt<T>`]() - Checks if a type `T` is exactly `bigint` not a subtype of it.
- [`IsExactlyNumber<T>`]() - Checks if a type `T` is exactly ``number`` not a subtype of it. 
- [`IsExactlyString<T>`]() - Checks if a type `T` is exactly ``string`` not a subtype of it. 
- [`IsExactlySymbol<T>`]() - Checks if a type `T` is exactly ``symbol`` not a subtype of it. 
- [`IsExactlyUnknown<T>`]() - Checks if a type `T` is exactly ``unknown`` not a subtype of it. 
- [`IsFalsy<T>`]() - Checks if a given type ``T`` is [``Falsy``]().
- [`IsFloat<N>`]() - Checks if a given type ``T`` is a [``Float<N>``]().
- [`IsFunction<T>`]() - Checks if a given type ``T`` is a function.
- [`IsInteger<N>`]() - Checks if a given [``Numeric``]()  is an [``Integer<N>``]().
- [`IsInteger<N>`]() - Checks if a given [``Numeric``]()  is an [``Integer<N>``]().
- [`IsNegativeFloat<F`]() -  Checks if a given [``Numeric``]()  is negative [``Float<N>``]().
- [`IsNegativeInteger<F>`]() - Checks if a given [``Numeric``]()  is a negative [``Integer<N>``]().
- [`IsNever<T>:`]() - Checks if a type `T` does not resolve, so `never`.
- [`IsNewable<T>`]() -  Checks if a type `T` is [``Newable``]().
- [`IsNullable<T>`]() -  Checks if a type `T` is [``Nullable``]().
- [`IsNumber<T>`]() - Checks if a type `T` is a `number`.
- [`IsNumeric<T>`]() - Checks if a type `T` is [``Numeric``]().
- [`IsObject<T>`]() -  Checks if a given type `T` qualifies as an object.
- [`IsOdd<T>`]() - Checks if a given type `T` is an odd number.
- [`IsPositive<T>`]() - Check if a given type `T` is a positive (\[0,+∞\[) [``Numeric``]().

- [`IsPositiveFloat<T>`]() - Check if a given type `T` is a positive (\[0,+∞\[) [``Float<N>``]().

- [`IsPositiveInteger<T>`]() - Check if a given type `T` is a positive (\[0,+∞\[) [``Integer<N>``]().

- [`IsString<T>`]() - Check if a given type `T` is a ``string``.
- [`IsSymbol<T>`]() - Check if a given type `T` is a ``symbol``.
- [`IsTruthy<T>`]() - Check if a given type `T` resolves to a truthy value.
- [`IsTuple<T>`]() -  Check if a given type `T` resolves to a tuple type.
- [`Keys<T>`]() - Retrieves the union type of keys (property names) of a type ``T``.
- [`Maybe<T>`]() - Type that might be [``Nullable``]()
- [`MaybeUndefined<T>`]() - Type that might ``undefined``.
- [`MutableKeys<Obj>`]() - Retrieves the keys that are mutable from an object of type ``Obj``.
- [`Nand<B1, B2>`]() - Logical ``NAND`` between two boolean types ``B1`` and ``B2``.
- [`NegativeFloat<N>`]() - Represents a negative (\]-∞, 0\[) [``Float<N>``]().
- [`NegativeFloatString<S>`]() - Represents a negative [``Float<N>``]() parsed from a ``string``.
- [`NegativeInteger<N>`]() -  Represents a negative (\]-∞, 0\[) [``Integer<N>``]().
- [`NegativeIntegerString<S>`]() - Represents a negative [``Integer<N>``]() parsed from a ``string``.
- [`NewType<New, Base>`]() -  Represents a new unique type derived from an existing base type. (branded type)
- [`Newable`]() - Represents constructor functions that can be invoked using the new keyword.

- [`NonRequiredKeys<Obj>`]() - Returns all non required keys of an object `Obj`, as in any property of an object that is marked with ? operator.
- [`Not<B>`]() - Negates a boolean type `B`.
- [`Nullable`]() - Represents a type that can either be  ``null`` or ``undefined``.
- [`Numeric`]() - Represents a type that can either be  ``number`` or ``bigint``.
- [`NumerifyString<S>`]() - Turn a given string literal to a [``Numeric``](), if possible.
- [`Methods<Obj>`]() - Get the literal names of keys that are methods in object type `Obj`.
- [`Properties<Obj>`]() - Get the literal names of keys that are properties in object type `Obj`.
- [`OmitByType<Obj, T>`]() - Get a set of properties from `Obj` whose type are not assignable to ``T``.
- [`OmitCommonKeys<Obj1, Obj2>`]() - Omit any common key between the the two objects,.
- [`OmitExactlyByType<Obj, T>`]() - Omit properties from ``Obj`` whose type exactly matches ``T``.
- [`Optional<T>`]() - Represents a type that may be `null`, similar to Python's ``Optional`` type and Rust's ``Option`` enum.
- [`Or<B1, B2>`]() - Logical ``OR`` between two boolean types ``B1`` and ``B2``.
- [`PickByType<Obj, T>`]() - Pick from `Obj` a set of properties that match the type `T`.
- [`PickCommonKeys<Obj1, Obj2>`]() - Get the common keys between two objects.
- [`PickExactlyByType<Obj, T>`]() - Get a set of properties from ``Obj`` whose type exactly matches ``T``.
- [`PositiveFloat<N>`]() - Represents a positive (\[0, +∞\[) [``Float<N>``]().
- [`PositiveFloatString<S>`]() - Represents a positive [``Float<N>``]() parsed from a ``string``.
- [`PositiveInteger<N>`]() - Represents a positive (\[0, +∞\[) [``Integer<N>``]().
- [`PositiveIntegerString<S>`]() - Represents a negative [``Integer<N>``]() parsed from a ``string``.
- [`Primitive`]() - All [primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) types.
- [`ReplaceKeys<Obj1,P,Obj2>`]() - Constructs a new type by replacing properties `P` of type ``Obj`` with object type ``Obj2``.
- [`RequiredKeys<Obj>`]() - Get the required keys of an object (shallow).
- [`StringEndsWith<S,E>`]() - Checks if a string `S` ends with `E` 
- [`StringStartsWith<S,S>`]() -  Checks if a string `S` starts with `S`
- [`EmptyObject`]() - Turns a given [``Primitive``]() value (except ``symbol``) into its string representation.
- [`Strlen<S>`]() - Get the length of a string `S`.
- [`TestType<T1, T2, Expected>`]() - Tests if type `T1` and `T2` are the same.
- [`UnionToIntersection<U>`]() - As the name implies, it turns a union into an intersection.
- [`Vals<Obj>`]() - Get the set of type values in a given object.
- [`Xor<B1, B2>`]() - Exclusive ``OR`` between two boolean types ``B1`` and ``B2``.

#### Decorators 

- [`@Final`]() - Marks an object final, as in one cannot inherit from it.
- [`@Sealed`]() - [Seals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal) an object.
- [`@Frozen`]() - [Freezes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) an object.

#### Decorators example 
Finalize and freeze objects

```ts
import type { Optional, NewType, MaybeUndefined } from 'ts-roids';
import { Final, Frozen } from 'ts-roids';

type Bar = NewType<'Bar', string>;
type Baz = NewType<'Baz', string>;
type Secret = NewType<'Secret', string>;

abstract class BaseFoo<T> {
  protected abstract get foo(): T;
  abstract requestFoo(secret: Secret, baz: Baz): Optional<T>;
}

@Final
@Frozen
class Foo<T> extends BaseFoo<T> {
  private readonly _foo: T;
  bar: Optional<Bar>;

  constructor(foo: T, bar?: MaybeUndefined<Bar>) {
    super();
    this._foo = foo;
    this.bar = bar ?? null;
  }
  protected override get foo(): T {
    console.log('do some stuff first');
    return this._foo;
  }

  requestFoo(secret: Secret, baz: Baz): Optional<T> {
    // A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value
    if (
      secret.concat().toLowerCase() === '123' &&
      baz.concat().toLowerCase() === 'baz' &&
      this.bar !== null
    ) {
      return this.foo;
    }

    return null; // So you have to explicitly return null here.
  }
}

class SubFoo extends Foo<string> {
  constructor(foo: string) {
    super(foo);
  }
}

// No problem with instantiation
const foo = new Foo<string>('foo');

// Since the object is final:

// The line below will cause a TypeError: Cannot inherit from the finl class Foo
const _ = new SubFoo('subFoo');

// Since the object is frozen:

// The line below will cause a TypeError: Cannot add property 'requestFoo', object is not extensible
foo.requestFoo = () => {
  return 'not foo';
};

// The line below will cause a TypeError: Cannot assign to read only property 'bar'
foo.bar = 'not bar' as Bar;
```
You can also seal an object.
```ts
@Sealed
class Person {
  constructor(public name: string, public age?: number) {}
}

const john = new Person('John', 30);

// Existing properties can still be modified
john.age = 31; // No Errors

// Existing properties cannot be re-configured nor deleted

(john as any).email = 'john@doe.com'; // TypeError: Cannot add property email,
// object is not extensible

delete john.age; // TypeError: Cannot delete property 'age' 
```
There are many other decorators to choose from, check the [docs](#documentation) for more info.

Speaking of `final`, The TypeScript team has not yet introduced a built-in final modifier yet, check [this](https://github.com/microsoft/TypeScript/issues/1534), [this](https://github.com/microsoft/TypeScript/issues/8306), [this](https://github.com/microsoft/TypeScript/issues/50532) and many other requests. 
Although they introduced `override` in [`v4.3`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-3.html#override-and-the---noimplicitoverride-flag) .

Decorators like ``@Final`` provide a limited way to emulate final behavior, these are merely band-aids for now, until TS officially supports a true final modifier.

## Changelog

See [releases](https://github.com/ashgw/ts-roids/releases).


## Contributing

Pull requests are always welcome, but it's preferable not to submit a bare PR. It's best when a PR addresses a specific issue. Therefore, for bugs, documentation, or feature requests, consider submitting [an issue](https://github.com/AshGw/ts-roids/issues/new/choose) first.

## License 
[GPL-3](/LICENSE)