### Installation 
```bash
npm i ts-roids
# or 
pnpm i ts-roids 
```
If you're only using types, you can install it as a dev dependency.
### Examples
#### Lock a class (make it immutable) and finalize it (prohibit further extension)
```ts
import { locked, final } from 'ts-roids';
import type { 
    Maybe,
    Primitive,
    Newable,
    Callable
} from 'ts-roids';

export type F<A extends Primitive, R extends Newable> = Callable<A[], R>;

@locked
@final
export class Foo<F> {
  private _foo: Maybe<F>;
  constructor(foo: Maybe<F>) {
    this._foo = foo ?? null;
  }
}
```
#### Quickly validates types using IntelliSense
```typescript 
type ResultType = TestType<Type1, Type2, true>;
```
``TestType`` accepts three arguments: the types you're comparing (``Type1`` and ``Type2``) and a boolean (true if you think they match, false otherwise). The resulting ``ResultType`` will tell if the choice is correct, true if it is, else false.
#### Create your own type 
Check this loosely typed function
```typescript 
function fooBar(foo: string, bar: string) {
  if (condition(foo, bar)) {
    return 'baz';
  }
}
```
What are we returning exactly? Is it a string? what does the string represent even? 
It might not return anything too..

There are so many ways thing can go wrong here. 
Here's how to fix it.
```typescript 
import { NewType, Optional } from 'ts-roids' 

type Baz = NewType<string>;

function fooBar(foo: string, bar: string): Optional<Baz> {
  if (condition(foo, bar)) {
    return 'baz' as Baz;
  }
  return null; 
  // you must explicitly return null here, otherwise it will Error.
}
```
### Docs
Checkout the inline documentation in `/src` along with `/tests` to see how it works.
### License 
[GPL-3](/LICENSE)