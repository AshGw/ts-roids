# ts-extended

### Installation 
```bash
npm i ts-extended
```

### Example
```ts
import { 
    locked,
    final,
    Maybe,
    Callable
} from 'ts-extended';

export type F<A, R> = Callable<A[], R>;

@locked
@final
export class Foo<F> {
  private _foo: Maybe<F>;
  constructor(foo: Maybe<F>) {
    this._foo = _foo ?? null;
  }
}
```
### Docs
Checkout the inline documentation in `/src` along with `/tests` to see how it works.
### License 
[GPL-3](/LICENSE)