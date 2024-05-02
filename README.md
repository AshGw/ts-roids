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
Below are all the available types and decorators.

- [`Abs<N>`](https://ashgw.github.io/ts-roids/types/Abs.htmlhttps://ashgw.github.io/ts-roids/types/Abs.html) - Get the absolute value of a [``Numeric``](https://ashgw.github.io/ts-roids/types/Abs.htmlhttps://ashgw.github.io/ts-roids/types/Numeric.html).
- [`And<B1,B2>`]() - Logical AND between two boolean types.
- [`AnyFunction`]() - Describes any function accepting any arguments and returning any value.
- [`ArrayFilter<Arr,P`]() - Filters elements from an array based on a given predicate type.
- [`ArrayIncludes<Arr,T>`]() - Checks if a given type is in an array.
- [`ArrayIntersection<Arr>`]() - Calculates the intersection of the types within an array Arr of tuple types.
- [`ArrayIntersection<Arr>`]() - Calculates the intersection of the types within an array Arr of tuple types.
- [`ArrayMax<Arr>`]() - Extracts the maximum [``Numeric``]() (positive and negative) value in a given Array.
- [`ArrayMin<Arr>`]() - Extracts the minimum [``Numeric``]() (positive and negative) value in a given Array.
- [`ArrayTranspose<Arr>`]() - Transposes a given 2xN array or matrix ``M``, flipping the matrix over its diagonal, switching its row and column indices.
- [`ArrayUnique<Arr>`]() - Constructs a new array containing only unique elements from a given array type.
- [`Assign<Obj,ObjArr>`]() - Copies all enumerable own properties from one target object to a source array of objects.
- [`DeepImmutable<Obj>`]() - Recursively turns the proprties within a given object type ``T`` immutable, as in have all the properties with the `readonly` modifier.
- [`Deepmutable<Obj>`]() - Recursively mutates all the proprties within a given object type ``T``, as in have all the properties without the `readonly` modifier.
- [`DeepRequired<Obj>`]() - Recursively make all object properties required.
- [`DeepNotRequired<Obj>`]() - Recursively make all object properties not required.






### Decorators example 
Finalize and [freeze](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) objects

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
You can also [seal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal) an object.
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