# ts-extended

### Installation 
```bash
npm i ts-extended
```

### Example
```ts
import { 
    locked,
    frozen,
    Maybe,
    Callable
} from 'ts-extended';

export type F<A, R> = Callable<A[], R>;
@locked
@final
export class Foo<F> {
  private _bar: Maybe<F>;
  constructor(bar: Maybe<F>) {
    this._bar = bar ?? null;
  }
}
```
### Docs
No time for docs so checkout the inline documentation in `/src` along with `/tests` to see how it works.
### License 
[GPL-3](/LICENSE)