### Installation 
```bash
npm i ts-roids
```
If you're only using types, you can install it as a dev dependency.
### Examples
#### Lock a class (make it immutable) and finalize it (prohibit further extension)
```ts
import { locked } from 'ts-roids';
import type { 
    Optional,
    Primitive,
    Newable
} from 'ts-roids';

@locked
export class Foo<F> {
  private _foo: Optional<F>;
  constructor(foo: Optional<F>) {
    this._foo = foo ?? null; // anything other than null or F will error out
  }
}
```
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
import { NewType, Optional } from 'ts-roids' 

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
  // string methods work for fooID and barID, since they're both strings.
  if (
    fooID.concat().toLowerCase() === 'fooid' &&
    barID.concat().toLowerCase() === 'barid'
  ) {
  return null; // you have to explicitly return null here.
}
const foo = {} as Foo;
const bar = {} as Bar;

// the code below will fail.
const baz = requestBaz(foo.id, bar.fooID); /* TypeError: 
    Argument of type 'FooID' is not assignable to parameter of type 'BarID'.
    Type 'FooID' is not assignable to type 'number' 
  */
```
### Docs
Checkout the inline documentation in `/src` along with `/tests` to see how it works.
### License 
[GPL-3](/LICENSE)