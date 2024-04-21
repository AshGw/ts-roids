### Installation 
```bash
npm i ts-roids
```
If you're only using types, you can install it as a dev dependency.
And if you're using the decorators, then set this property inside `compilerOptions` in your `tsconfig.json` file.
```json
  "experimentalDecorators": true,
```
### Usage
#### Final classes and methods
```ts
import { FinalClass } from 'ts-roids';
import type { Optional } from 'ts-roids';

@FinalClass
export class Foo<F> {
  private _foo: Optional<F>;
  constructor(foo: Optional<F>) {
    this._foo = foo ?? null; // Anything other than null | F will error out
  }
  fooFunc(): string {
    return 'foo';
  }
}
```

The TypeScript team has not yet introduced a built-in final modifier, check [this](https://github.com/microsoft/TypeScript/issues/1534), [this](https://github.com/microsoft/TypeScript/issues/8306), [this](https://github.com/microsoft/TypeScript/issues/50532) and many other requests. 
Weird, since they introduced `overrides` in [`v4.3`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-3.html#override-and-the---noimplicitoverride-flag) which is supposed to be the 
opposite of `final`.

Decorators like ``@FinalClass`` provide a limited way to emulate final behavior, these are merely "band-aids" for now, they only provide compile time checks, until TS officially supports a true final modifier.
#### Quickly test types
```typescript 
type ResultType = TestType<Type1, Type2, true>;
```
``TestType`` accepts three arguments: the types you're comparing (``Type1`` and ``Type2``) and a boolean (true if you expected them to match, false otherwise). The resulting ``ResultType`` will tell if your expectation is correct, true if it is, else false.
#### Runtime safety
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
  fooID: string;
  bar: string;
};

// ...

const baz = requestBaz(foo.id, bar.fooID);
const baz2 = requestBaz(bar.fooID, foo.id);
```
What does `requestBaz()` return exactly? Is it a string? If so can any string do?  
Is there any undefined behavior? ``fooID`` and ``barID`` are both strings so if you mix and match both parameter for `requestBaz()` like ``baz`` and ``baz2`` here, the code will run, but the logic breaks and the bug goes undetected.

As you can see, there are so many ways this can go south. 
So here's how to fix it.
```typescript 
import type { NewType, Optional } from 'ts-roids' 

// New types must be unique to get detected.
// type FooID = NewType<'BarID', string>; will not detect any errors.
// Even though the type declaration itself is different.
type FooID = NewType<'FooID', string>;
type BarID = NewType<'BarID', string>;

type Foo = {
  id: FooID;
  foo: string;
};

type Bar = {
  fooID: FooID;
  bar: string;
};

type Baz = NewType<'Baz', string>;

async function requestBaz(barID: BarID, fooID: FooID): Promise<Optional<Baz>> {
  // String methods work for fooID and barID, since they're both strings.
  if (
    fooID.concat().toLowerCase() === 'fooid' &&
    barID.concat().toLowerCase() === 'barid'
  ) {
  return null; // You have to explicitly return null here.
}
const foo = {} as Foo;
const bar = {} as Bar;

// The code below will fail.
const baz = requestBaz(foo.id, bar.fooID); 
/* TypeError: 
    Argument of type 'FooID' is not assignable to parameter of type 'BarID'.
    Type 'FooID' is not assignable to type 'number' 
  */
```
### Docs
Checkout the inline documentation in `/src` along with `/tests` to see how it works for now.
### License 
[GPL-3](/LICENSE)