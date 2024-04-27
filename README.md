<div align="center">

# ts-roids

Collection of utility types and decorators to bullet proof TypeScript even more.

[![tests](https://github.com/AshGw/ts-roids/actions/workflows/test.yml/badge.svg)](https://github.com/AshGw/ts-roids/actions/workflows/test.yml)
[![@latest](https://img.shields.io/npm/v/ts-roids.svg)](https://www.npmjs.com/package/ts-roids)
[![npm downloads](https://img.shields.io/npm/dm/ts-utils.svg)](https://www.npmjs.com/package/ts-roids)
[![bundle size](https://img.shields.io/bundlephobia/minzip/utility-types.svg)](https://www.npmjs.com/package/ts-roids)
<hr/>
</div>

### Installation 
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
### Documentation
Checkout the [API reference](https://ashgw.github.io/ts-roids/) for all usage examples with details. Below are a couple of things you can do using the library.

#### Finalize and [freeze](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) objects
```ts
import { FinalClass, Frozen, Optional } from 'ts-roids';

abstract class BaseFoo<T> {
  abstract someFoo(): T;
}

@Final
@Frozen
class Foo<T> extends BaseFoo<T> {
  foo: T;
  bar: Optional<string>;

  constructor(foo: T, bar?: string) {
    super();
    this.foo = foo;
    this.bar = bar ?? null;
  }
  override  someFoo(): T {
    return this.foo;
  }
}

class SubFoo extends Foo<string> {
  constructor(foo: string) {
    super(foo);
  }
}

// No problem with instantiation
const foo = new Foo<string>('foo');

// The line below will cause a TypeError: Cannot inherit from the finl class Foo
const sub = new SubFoo('subFoo');

// The line below will cause a TypeError: Cannot add property 'someFoo', object is not extensible
foo.someFoo = () => {
  return 'not foo';
};

// The line below will cause a TypeError: Cannot assign to read only property 'bar'
foo.bar = 'not bar';
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

(john as any).email = 'john@example.com'; // TypeError: Cannot add property email,
// object is not extensible

delete john.age; // TypeError: Cannot delete property 'age' 
```
There are many other decorators to choose from, check the [docs](#documentation) for more info.

Speaking of `final`, The TypeScript team has not yet introduced a built-in final modifier yet, check [this](https://github.com/microsoft/TypeScript/issues/1534), [this](https://github.com/microsoft/TypeScript/issues/8306), [this](https://github.com/microsoft/TypeScript/issues/50532) and many other requests. 
Although they introduced `override` in [`v4.3`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-3.html#override-and-the---noimplicitoverride-flag) .

Decorators like ``@Final`` provide a limited way to emulate final behavior, these are merely band-aids for now, until TS officially supports a true final modifier.

#### A type for testing types
```typescript 
type ResultType = TestType<Type1, Type2, true>;
```
``TestType`` accepts three arguments: the types you're comparing (``Type1`` and ``Type2``) and a boolean (``true`` if you expected them to match, ``false`` otherwise). The resulting type will tell if your expectation is correct, ``true`` if it is, else ``false``.

You can use it however you want, maybe to test a type on the go, or, 
test using a testing framework. Here's an example with [`vitest`](https://vitest.dev)

````ts
import type { Abs, TestType } from 'ts-roids';
import { test, expect , expectTypeOf} from 'vitest';

test('|-54| should be 54',() => {
  type ShouldPass = true;
  expectTypeOf<TestType<Abs<-54>, 54, true>>().toEqualTypeOf<ShouldPass>();
});
````

## Changelog

See [releases](https://github.com/ashgw/ts-roids/releases).


## Contributing

Pull requests are always welcome, but it's preferable not to submit a bare PR. It's best when a PR addresses a specific issue. Therefore, for bugs, documentation, or feature requests, consider submitting [an issue](https://github.com/AshGw/ts-roids/issues/new/choose) first.

### License 
[GPL-3](/LICENSE)