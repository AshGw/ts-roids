### Installation 
```bash
npm i ts-roids
```

### Example
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
### Docs
Checkout the inline documentation in `/src` along with `/tests` to see how it works.
### License 
[GPL-3](/LICENSE)