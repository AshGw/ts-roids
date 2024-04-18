### Installation 
```bash
npm i ts-roids
```

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

### Docs
Checkout the inline documentation in `/src` along with `/tests` to see how it works.
### License 
[GPL-3](/LICENSE)