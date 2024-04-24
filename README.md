<div align="center">

# ts-roids

Collection of utility types, decorators and helper functions to bullet proof TypeScript even more.

[![tests](https://github.com/AshGw/ts-roids/actions/workflows/test.yml/badge.svg)](https://github.com/AshGw/ts-roids/actions/workflows/test.yml)
[![@latest](https://img.shields.io/npm/v/ts-roids.svg)](https://www.npmjs.com/package/ts-roids)
[![npm downloads](https://img.shields.io/npm/dm/ts-utils.svg)](https://www.npmjs.com/package/ts-roids)
[![bundle size](https://img.shields.io/bundlephobia/minzip/utility-types.svg)](https://www.npmjs.com/package/ts-roids)
<hr/><br/>
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
**yarn**
```bash
yarn add ts-roids
```
If you're only using types, you can install it as a dev dependency.
And if you're using the decorators, set this property inside `tsconfig.json`.
```json
{
  "compilerOptions": {
    // ...
    "experimentalDecorators": true
  }
}
```
### Usage
#### Finalize and freeze objects
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

The TypeScript team has not yet introduced a built-in final modifier, check [this](https://github.com/microsoft/TypeScript/issues/1534), [this](https://github.com/microsoft/TypeScript/issues/8306), [this](https://github.com/microsoft/TypeScript/issues/50532) and many other requests. 
Weird, since they introduced `override` in [`v4.3`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-3.html#override-and-the---noimplicitoverride-flag) .

Decorators like ``@Final`` provide a limited way to emulate final behavior, these are merely band-aids for now, until TS officially supports a true final modifier.
#### Runtime safety with branded types
Can you figure out how many things that can go wrong here?
```typescript 
async function requestBaz(barID: string, fooID: string) {
  if (
    fooID.concat().toLowerCase() === 'fooid' &&
    barID.concat().toLowerCase() === 'barid'
  ) {
    return 'baz';
  }
}
type Foo = {
  id: string;
  foo: string;
};

type Bar = {
  id: string;
  bar: string;
};

// ...

const baz = requestBaz(foo.id, bar.id);
const baz2 = requestBaz(bar.id, foo.id);
```
What does `requestBaz()` return exactly? Suppose it does, Is it a string? If so, would any string do?  

 ``fooID`` and ``barID`` are both strings so if you mistakenly mix both parameter for `requestBaz()` like ``baz`` and ``baz2`` here, the code will run, but the logic breaks and the bug goes undetected.

As you can see, there are so many ways this can go south. 
So here's how to fix it.
```typescript 
import type { NewType, Optional } from 'ts-roids' 

// New types must be unique to get flagged by linters if used wrong.
// type FooID = NewType<'BarID', string>; //  will not help detect any errors. Even though the type declaration itself is different.
type FooID = NewType<'FooID', string>;
type BarID = NewType<'BarID', string>;

type Foo = {
  id: FooID;
  foo: string;
};

type Bar = {
  id: BarID;
  bar: string;
};

type Baz = NewType<'Baz', string>;

async function requestBaz(barID: BarID, fooID: FooID): Promise<Optional<Baz>> {
  // String methods work for fooID and barID, since they're both strings.
  if (
    fooID.concat().toLowerCase() === 'fooid' &&
    barID.concat().toLowerCase() === 'barid'
  ) {
    return 'baz' as Baz; 
  }
    return null; // You have to explicitly return null here.
}
const foo = {} as Foo;
const bar = {} as Bar;

// The line below will work just fine.
const baz1 = requestBaz(bar.id, foo.id); 


// But this will fail.
const baz2 = requestBaz(foo.id, bar.id); 
/* TypeError: 
    Argument of type 'FooID' is not assignable to parameter of type 'BarID'.
    Type 'FooID' is not assignable to type '"BarID"' 
  */
```
#### A type for testing types
```typescript 
type ResultType = TestType<Type1, Type2, true>;
```
``TestType`` accepts three arguments: the types you're comparing (``Type1`` and ``Type2``) and a boolean (true if you expected them to match, false otherwise). The resulting type will tell if your expectation is correct, true if it is, else false.

### Docs
You can checkout the [API reference](https://ashgw.github.io/ts-roids/).
### License 
[GPL-3](/LICENSE)