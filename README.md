<div align="center">

# ts-roids

120+  types and decorators to bullet proof TypeScript even more.

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
And if you're using decorators, set this.
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
Checkout the full [API reference](https://ashgw.github.io/ts-roids/) for all usage examples with details. 

#### Types 
- [`Abs<N>`](https://ashgw.github.io/ts-roids/types/Abs.html) - Get the absolute value of a [``Numeric``](https://ashgw.github.io/ts-roids/types/Numeric.html).
- [`And<B1,B2>`](https://ashgw.github.io/ts-roids/types/And.html) - Logical AND between two boolean types.
- [`ArrayFilter<Arr,P>`](https://ashgw.github.io/ts-roids/types/ArrayFilter.html) - Filters elements from an array based on a given predicate type.
- [`ArrayIncludes<Arr,T>`](https://ashgw.github.io/ts-roids/types/ArrayIncludes.html) - Checks if a given type is in an array.
- [`ArrayIntersection<Arr>`](https://ashgw.github.io/ts-roids/types/ArrayIntersection.html) - Calculates the intersection of the types within an array ``Arr`` of tuple types.
- [`ArrayMax<Arr>`](https://ashgw.github.io/ts-roids/types/ArrayMax.html) - Extracts the maximum [``Numeric``](https://ashgw.github.io/ts-roids/types/Numeric.html) (positive and negative) value in a given array.
- [`ArrayMin<Arr>`](https://ashgw.github.io/ts-roids/types/ArrayMin.html) - Extracts the minimum [``Numeric``](https://ashgw.github.io/ts-roids/types/Numeric.html) (positive and negative) value in a given array.
- [`ArrayTranspose<Arr>`](https://ashgw.github.io/ts-roids/types/ArrayTranspose.html) - Transposes a given 2xN array or matrix, flipping the matrix over its diagonal, switching its row and column indices.
- [`ArrayUnique<Arr>`](https://ashgw.github.io/ts-roids/types/ArrayUnique.html) - Constructs a new array containing only unique elements from a given array type.
- [`Assign<Obj,ObjArr>`](https://ashgw.github.io/ts-roids/types/Assign.html) - Copies all enumerable own properties from one target object to a source array of objects.
- [`DeepImmutable<Obj>`](https://ashgw.github.io/ts-roids/types/DeepImmutable.html) - Recursively turns the proprties within a given object type ``T`` immutable, as in have all the properties with the `readonly` modifier.
- [`Deepmutable<Obj>`](https://ashgw.github.io/ts-roids/types/DeepMutable.html) - Recursively mutates all the proprties within a given object type ``T``, as in have all the properties without the `readonly` modifier.
- [`DeepRequired<Obj>`](https://ashgw.github.io/ts-roids/types/DeepRequired.html) - Recursively make all object properties required.
- [`DeepNotRequired<Obj>`](https://ashgw.github.io/ts-roids/types/DeepNotRequired.html) - Recursively make all object properties not required.
- [`DeepOmit<Obj,P>`](https://ashgw.github.io/ts-roids/types/DeepOmit.html) - Recursively omits specified nested properties from an object, based on a given predicate `P`.
- [`DeepPick<Obj,P>`](https://ashgw.github.io/ts-roids/types/DeepPick.html) - Deeply pick properties from a nested object, based on a given predicate `P`.
- [`DeepToPrimitive<Obj>`](https://ashgw.github.io/ts-roids/types/DeepToPrimitive.html) - Recursively transforms an object type T into a type where all properties are replaced with their corresponding primitive types.
- [`EitherOneOrMany<T>`](https://ashgw.github.io/ts-roids/types/EitherOneOrMany.html) - Represents a type that can be either a single value of type ``T`` or an array of values of type ``T``.
- [`EmptyObject`](https://ashgw.github.io/ts-roids/types/EmptyObject.html) - Represents any non-nullish value, basically `{}`.
- [`EqualStrlen<S1, S2>`](https://ashgw.github.io/ts-roids/types/EqualStrlen.html) - Check if two strings ``S1`` and ``S2`` have the same length.
- [`Nullable`](https://ashgw.github.io/ts-roids/types/Nullable.html) - Represents any non-nullish value, basically `{}`.
- [`Equals<X,Y>`](https://ashgw.github.io/ts-roids/types/Equals.html) - Checks if two types ``X`` and ``Y`` are exactly equal.
- [`EvenNumeric<T>`](https://ashgw.github.io/ts-roids/types/EvenNumeric.html) - Represents an even [`Numeric`](https://ashgw.github.io/ts-roids/types/Numeric.html).
- [`ExcludeNull<T>`](https://ashgw.github.io/ts-roids/types/ExcludeNull.html) - Excludes ``null`` from a type ``T``.
- [`ExcludeNullable<T>`](https://ashgw.github.io/ts-roids/types/ExcludeNullable.html) - Excludes [`Nullable`](https://ashgw.github.io/ts-roids/types/Nullable.html) from a type ``T``.
- [`ExcludeUndefined<T>`](https://ashgw.github.io/ts-roids/types/ExcludeUndefined.html) - Excludes `undefined` from a type ``T``.
- [`Extends<T,U>`](https://ashgw.github.io/ts-roids/types/Extends.html) - Evaluates whether one type ``T`` is assignable to another type ``U``.
- [`Falsy`](https://ashgw.github.io/ts-roids/types/Falsy.html) - Represents a type that is [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)  JavaScript. 
- [`FalsyProperties<T>`](https://ashgw.github.io/ts-roids/types/FalsyProperties.html) - Extracts falsy properties from an object type ``T``.
- [`FilterBy<Obj, P>`](https://ashgw.github.io/ts-roids/types/FilterBy.html) -  Filters keys from the object type `Obj` based on a specified predicate ``P``.
- [`Flip<Obj>`](https://ashgw.github.io/ts-roids/types/Flip.html) - Flips keys with values of an object type `Obj`.
- [`Float<N>`](https://ashgw.github.io/ts-roids/types/Float.html) - Type representing a float.
- [`If<C, Do, Else>`](https://ashgw.github.io/ts-roids/types/If.html) - If ``C`` evaluates ``true``, ``Do``, otherwise return ``Else``.
- [`IfEquals<T, P, Do, Else>`](https://ashgw.github.io/ts-roids/types/IfEquals.html) - Checks if type ``T`` is equal to type ``P``. If ``T`` is equal to ``P``, the type resolves to ``Do``, otherwise ``Else``.
- [`IfExtends<T, P, Do, Else>`](https://ashgw.github.io/ts-roids/types/IfExtends.html) -  Checks if type ``T`` extends type ``P``. if it does, the type resolves to ``Do``, otherwise ``Else``.
- [`ImmutableKeys<Obj>`](https://ashgw.github.io/ts-roids/types/ImmutableKeys.html) - Retrieves the keys that are immutable (``readonly``) from an object of type ``Obj``.
- [`Integer<N>`](https://ashgw.github.io/ts-roids/types/Integer.html) - Represents an integer.
- [`IsAnyFunction<T>`](https://ashgw.github.io/ts-roids/types/IsAnyFunction.html) - Checks if a type ``T`` is  [``AnyFunction``](https://ashgw.github.io/ts-roids/types/AnyFunction.html).
- [`IsArray<T>`](https://ashgw.github.io/ts-roids/types/IsArray.html) - Checks if a type `T` is an array.
- [`IsArrayIncludesTypeof<Arr, T>`](https://ashgw.github.io/ts-roids/types/IsArrayIncludesTypeof.html) - Checks if an array type `Arr` includes one or more of `T` type.
- [`IsBigInt<T>`](https://ashgw.github.io/ts-roids/types/IsBigInt.html) - Checks if `T` is a ``bigint``.
- [`IsBoolean<T>`](https://ashgw.github.io/ts-roids/types/IsBoolean.html) -  Checks if `T` is a ``boolean``.
- [`IsDeepImmutable<Obj>`](https://ashgw.github.io/ts-roids/types/IsDeepImmutable.html) - Checks if all the nested properties of a given object ``Obj`` are immutable.
- [`IsDeepMutable<Obj>`](https://ashgw.github.io/ts-roids/types/IsDeepMutable.html) - Checks if all the nested properties of a given object ``Obj`` are  mutable.
- [`IsDeepNotRequired<Obj>`](https://ashgw.github.io/ts-roids/types/IsDeepNotRequired.html) - Checks if all the properties of a given object (nested) are not required, as in, all properties have the `?` modifier.

- [`IsDeepRequired<Obj>`](https://ashgw.github.io/ts-roids/types/IsDeepRequired.html) - Checks if all the properties of a given object (nested) are required, as in, all properties do not have the `?` modifier.
- [`IsExactlyAny<T>`](https://ashgw.github.io/ts-roids/types/IsExactlyAny.html) - Checks if a type `T` is exactly `any`.
- [`IsExactlyBigInt<T>`](https://ashgw.github.io/ts-roids/types/IsExactlyBigInt.html) - Checks if a type `T` is exactly `bigint` not a subtype of it.
- [`IsExactlyNumber<T>`](https://ashgw.github.io/ts-roids/types/IsExactlyNumber.html) - Checks if a type `T` is exactly ``number`` not a subtype of it. 
- [`IsExactlyString<T>`](https://ashgw.github.io/ts-roids/types/IsExactlyString.html) - Checks if a type `T` is exactly ``string`` not a subtype of it. 
- [`IsExactlySymbol<T>`](https://ashgw.github.io/ts-roids/types/IsExactlySymbol.html) - Checks if a type `T` is exactly ``symbol`` not a subtype of it. 
- [`IsExactlyUnknown<T>`](https://ashgw.github.io/ts-roids/types/IsExactlyUnknown.html) - Checks if a type `T` is exactly ``unknown`` not a subtype of it. 
- [`IsFalsy<T>`](https://ashgw.github.io/ts-roids/types/IsFalsy.html) - Checks if a given type ``T`` is [``Falsy``](https://ashgw.github.io/ts-roids/types/Falsy.html).
- [`IsFloat<N>`](https://ashgw.github.io/ts-roids/types/IsFloat.html) - Checks if a given type ``T`` is a [``Float<N>``](https://ashgw.github.io/ts-roids/types/Float.html).
- [`IsFunction<T>`](https://ashgw.github.io/ts-roids/types/IsFunction.html) - Checks if a given type ``T`` is a function.
- [`IsInteger<N>`](https://ashgw.github.io/ts-roids/types/IsInteger.html) - Checks if a given [``Numeric``](https://ashgw.github.io/ts-roids/types/Numeric.html)  is an [``Integer<N>``](https://ashgw.github.io/ts-roids/types/Integer.html).
- [`IsInteger<N>`](https://ashgw.github.io/ts-roids/types/IsInteger.html) - Checks if a given [``Numeric``](https://ashgw.github.io/ts-roids/types/Numeric.html)  is an [``Integer<N>``](https://ashgw.github.io/ts-roids/types/Integer.html).
- [`IsNegativeFloat<F`](https://ashgw.github.io/ts-roids/types/IsNegativeFloat.html) -  Checks if a given [``Numeric``](https://ashgw.github.io/ts-roids/types/Numeric.html)  is a negative [``Float<N>``](https://ashgw.github.io/ts-roids/types/Flip.html).
- [`IsNegativeInteger<F>`](https://ashgw.github.io/ts-roids/types/IsNegativeInteger.html) - Checks if a given [``Numeric``](https://ashgw.github.io/ts-roids/types/Numeric.html)  is a negative [``Integer<N>``](https://ashgw.github.io/ts-roids/types/Integer.html).
- [`IsNever<T>:`](https://ashgw.github.io/ts-roids/types/IsNever.html) - Checks if a type `T` does not resolve, so `never`.
- [`IsNewable<T>`](https://ashgw.github.io/ts-roids/types/IsNewable.html) -  Checks if a type `T` is [``Newable``](https://ashgw.github.io/ts-roids/types/Newable.html).
- [`IsNullable<T>`](https://ashgw.github.io/ts-roids/types/IsNullable.html) -  Checks if a type `T` is [``Nullable``](https://ashgw.github.io/ts-roids/types/Nullable.html).
- [`IsNumber<T>`](https://ashgw.github.io/ts-roids/types/IsNumber.html) - Checks if a type `T` is a `number`.
- [`IsNumeric<T>`](https://ashgw.github.io/ts-roids/types/IsNumeric.html) - Checks if a type `T` is [``Numeric``](https://ashgw.github.io/ts-roids/types/Numeric.html).
- [`IsObject<T>`](https://ashgw.github.io/ts-roids/types/IsObject.html) -  Checks if a given type `T` qualifies as an object.
- [`IsPositive<T>`](https://ashgw.github.io/ts-roids/types/IsPositive.html) - Check if a given type `T` is a positive (\[0,+∞\[) [``Numeric``](https://ashgw.github.io/ts-roids/types/Numeric.html).

- [`IsPositiveFloat<T>`](https://ashgw.github.io/ts-roids/types/IsPositiveFloat.html) - Check if a given type `T` is a positive (\[0,+∞\[) [``Float<N>``](https://ashgw.github.io/ts-roids/types/Float.html).

- [`IsPositiveInteger<T>`](https://ashgw.github.io/ts-roids/types/IsPositiveInteger.html) - Check if a given type `T` is a positive (\[0,+∞\[) [``Integer<N>``](https://ashgw.github.io/ts-roids/types/Integer.html).

- [`IsString<T>`](https://ashgw.github.io/ts-roids/types/IsString.html) - Check if a given type `T` is a ``string``.
- [`IsSymbol<T>`](https://ashgw.github.io/ts-roids/types/IsSymbol.html) - Check if a given type `T` is a ``symbol``.
- [`IsTruthy<T>`](https://ashgw.github.io/ts-roids/types/IsTruthy.html) - Check if a given type `T` resolves to a truthy value.
- [`Keys<T>`](https://ashgw.github.io/ts-roids/types/Keys.html) - Retrieves the union type of keys (property names) of a type ``T``.
- [`Maybe<T>`](https://ashgw.github.io/ts-roids/types/Maybe.html) - Type that might be [``Nullable``](https://ashgw.github.io/ts-roids/types/Nullable.html)
- [`MaybeUndefined<T>`](https://ashgw.github.io/ts-roids/types/MaybeUndefined.html) - Type that might ``undefined``.
- [`MutableKeys<Obj>`](https://ashgw.github.io/ts-roids/types/MutableKeys.html) - Retrieves the keys that are mutable from an object of type ``Obj``.
- [`Nand<B1, B2>`](https://ashgw.github.io/ts-roids/types/Nand.html) - Logical ``NAND`` between two boolean types ``B1`` and ``B2``.
- [`NegativeFloat<N>`](https://ashgw.github.io/ts-roids/types/NegativeFloat.html) - Represents a negative (\]-∞, 0\[) [``Float<N>``](https://ashgw.github.io/ts-roids/types/Float.html).
- [`NegativeFloatString<S>`](https://ashgw.github.io/ts-roids/types/NegativeFloatString.html) - Represents a negative [``Float<N>``](https://ashgw.github.io/ts-roids/types/Float.html) parsed from a ``string``.
- [`NegativeInteger<N>`](https://ashgw.github.io/ts-roids/types/NegativeInteger.html) -  Represents a negative (\]-∞, 0\[) [``Integer<N>``](https://ashgw.github.io/ts-roids/types/Integer.html).
- [`NegativeIntegerString<S>`](https://ashgw.github.io/ts-roids/types/NegativeIntegerString.html) - Represents a negative [``Integer<N>``](https://ashgw.github.io/ts-roids/types/Integer.html) parsed from a ``string``.
- [`NewType<New, Base>`](https://ashgw.github.io/ts-roids/types/NewType.html) -  Represents a new unique type derived from an existing base type. (branded type)
- [`Newable`](https://ashgw.github.io/ts-roids/types/Newable.html) - Represents constructor functions that can be invoked using the new keyword.

- [`NonRequiredKeys<Obj>`](https://ashgw.github.io/ts-roids/types/NonRequiredKeys.html) - Returns all non required keys of an object `Obj`, as in any property of an object that is marked with `?` operator.
- [`Not<B>`](https://ashgw.github.io/ts-roids/types/Not.html) - Negates a boolean type `B`.
- [`Nullable`](https://ashgw.github.io/ts-roids/types/Nullable.html) - Represents a type that can either be  ``null`` or ``undefined``.
- [`Numeric`](https://ashgw.github.io/ts-roids/types/Numeric.html) - Represents a type that can either be  ``number`` or ``bigint``.
- [`NumerifyString<S>`](https://ashgw.github.io/ts-roids/types/NumerifyString.html) - Turn a given string literal to a [``Numeric``](https://ashgw.github.io/ts-roids/types/Numeric.html), if possible.
- [`Methods<Obj>`](https://ashgw.github.io/ts-roids/types/Methods.html) - Get the literal names of keys that are methods in an object type `Obj`.
- [`Properties<Obj>`](https://ashgw.github.io/ts-roids/types/Properties.html) - Get the literal names of keys that are properties in an object type `Obj`.
- [`OddNumeric<T>`](https://ashgw.github.io/ts-roids/types/OmitByType.html) - Represents an odd [`Numeric`](https://ashgw.github.io/ts-roids/types/OddNumeric.html).
- [`OmitByType<Obj, T>`](https://ashgw.github.io/ts-roids/types/OmitByType.html) - Get a set of properties from `Obj` whose type are not assignable to ``T``.
- [`OmitCommonKeys<Obj1, Obj2>`](https://ashgw.github.io/ts-roids/types/OmitCommonKeys.html) - Omit any common key between the the two objects,.
- [`OmitExactlyByType<Obj, T>`](https://ashgw.github.io/ts-roids/types/OmitExactlyByType.html) - Omit properties from ``Obj`` whose type exactly matches ``T``.
- [`Optional<T>`](https://ashgw.github.io/ts-roids/types/Optional.html) - Represents a type that may be `null`, similar to Python's ``Optional`` type and Rust's ``Option`` enum.
- [`Or<B1, B2>`](https://ashgw.github.io/ts-roids/types/Or.html) - Logical ``OR`` between two boolean types ``B1`` and ``B2``.
- [`PickByType<Obj, T>`](https://ashgw.github.io/ts-roids/types/PickByType.html) - Pick from `Obj` a set of properties that match the type `T`.
- [`PickCommonKeys<Obj1, Obj2>`](https://ashgw.github.io/ts-roids/types/PickCommonKeys.html) - Get the common keys between two objects.
- [`PickExactlyByType<Obj, T>`](https://ashgw.github.io/ts-roids/types/PickExactlyByType.html) - Get a set of properties from ``Obj`` whose type exactly matches ``T``.
- [`PositiveFloat<N>`](https://ashgw.github.io/ts-roids/types/PositiveFloat.html) - Represents a positive (\[0, +∞\[) [``Float<N>``](https://ashgw.github.io/ts-roids/types/Float.html).
- [`PositiveFloatString<S>`](https://ashgw.github.io/ts-roids/types/PositiveFloatString.html) - Represents a positive [``Float<N>``](https://ashgw.github.io/ts-roids/types/Float.html) parsed from a ``string``.
- [`PositiveInteger<N>`](https://ashgw.github.io/ts-roids/types/PositiveInteger.html) - Represents a positive (\[0, +∞\[) [``Integer<N>``](https://ashgw.github.io/ts-roids/types/Integer.html).
- [`PositiveIntegerString<S>`](https://ashgw.github.io/ts-roids/types/PositiveIntegerString.html) - Represents a negative [``Integer<N>``](https://ashgw.github.io/ts-roids/types/Integer.html) parsed from a ``string``.
- [`Primitive`](https://ashgw.github.io/ts-roids/types/Primitive.html) - All [primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) types.
- [`ReplaceKeys<Obj1,P,Obj2>`](https://ashgw.github.io/ts-roids/types/ReplaceKeys.html) - Constructs a new type by replacing properties `P` of type ``Obj`` with object type ``Obj2``.
- [`RequiredKeys<Obj>`](https://ashgw.github.io/ts-roids/types/RequiredKeys.html) - Get the required keys of an object (shallow).
- [`StringEndsWith<S,E>`](https://ashgw.github.io/ts-roids/types/StringEndsWith.html) - Checks if a string `S` ends with `E` 
- [`StringStartsWith<S,St>`](https://ashgw.github.io/ts-roids/types/StringStartsWith.html) -  Checks if a string `S` starts with `St`
- [`StringifyPrimitive<P>`](https://ashgw.github.io/ts-roids/types/StringifyPrimitive.html) - Turns a given [``Primitive``](https://ashgw.github.io/ts-roids/types/Primitive.html) value (except ``symbol``) into its string representation.
- [`Strlen<S>`](https://ashgw.github.io/ts-roids/types/Strlen.html) - Get the length of a string `S`.
- [`TestType<T1, T2, Expected>`](https://ashgw.github.io/ts-roids/types/TestType.html) - Tests if type `T1` and `T2` are the same.
- [`TruthyProperties<T>`](https://ashgw.github.io/ts-roids/types/TruthyProperties.html) - Extracts truthy properties from an object type ``T``.
- [`UnionToIntersection<U>`](https://ashgw.github.io/ts-roids/types/UnionToIntersection.html) - As the name implies, it turns a union into an intersection.
- [`Vals<Obj>`](https://ashgw.github.io/ts-roids/types/Vals.html) - Get the set of type values in a given object.
- [`Xor<B1, B2>`](https://ashgw.github.io/ts-roids/types/Xor.html) - Exclusive ``OR`` between two boolean types ``B1`` and ``B2``.

#### Decorators 

- [`@Final`]() - Marks an object final, as in one cannot inherit from it.
- [`@Sealed`]() - [Seals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal) an object.
- [`@Frozen`]() - [Freezes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) an object.

#### Basic Usage 
Finalize and freeze objects

```ts
import type { Optional, NewType, MaybeUndefined } from 'ts-roids';
import { Final, Frozen } from 'ts-roids';

type Bar = NewType<'Bar', string>;
type Baz = NewType<'Baz', string>;
type Secret = NewType<'Secret', string>;

abstract class BaseFoo<T> {
  abstract requestFoo(secret: Secret, baz: Baz): Optional<T>;
}

@Final
@Frozen
class Foo<T> extends BaseFoo<T> {
  readonly foo: T;
  bar: Optional<Bar>;

  constructor(foo: T, bar?: MaybeUndefined<Bar>) {
    super();
    this.foo = foo;
    this.bar = bar ?? null;
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

// The line below will cause a TypeError: Cannot inherit from the final class Foo
const _ = new SubFoo('subFoo');

// Since the object is frozen:

// The line below will cause a TypeError: Cannot add property 'requestFoo', object is not extensible
foo.requestFoo = () => {
  return 'not foo';
};

// The line below will cause a TypeError: Cannot assign to read only property 'bar'
foo.bar = 'not bar' as Bar;
```
 The TypeScript team has not yet introduced a built-in final modifier yet, check 
[this](https://github.com/microsoft/TypeScript/issues/8306), [this](https://github.com/microsoft/TypeScript/issues/50532) and many other requests. 
Although they introduced `override` in [`v4.3`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-3.html#override-and-the---noimplicitoverride-flag) .

Decorators like ``@Final`` provide a limited way to emulate final behavior, these are merely band-aids for now, until TS officially supports a true final modifier.

You can also seal an object btw.
```ts
@Sealed
class Person {
  constructor(name: string, age?: number) {}
}

const john = new Person('John', 30);

// Existing properties can still be modified
john.age = 31; // No Errors

// Existing properties cannot be re-configured nor deleted

(john as any).email = 'john@doe.com'; // TypeError: Cannot add property email,
// object is not extensible

delete john.age; // TypeError: Cannot delete property 'age' 
```

## Changelog

See [releases](https://github.com/ashgw/ts-roids/releases).

## License 
[GPL-3](/LICENSE)