import { FinalClass } from 'src';
import { test, expect } from 'vitest';

@FinalClass
class Foo<T> {
  private _foo: T;
  bar: string;

  constructor(foo: T) {
    this._foo = foo;
    this.bar = 'bar';
  }

  fooFunc(): T {
    return this._foo;
  }
}

class SubbedFoo extends Foo<string> {
  constructor() {
    super('subbed');
  }
}

test('Should not allow inheritance; a TypeError should be thrown', () => {
  expect(() => {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const _ = new SubbedFoo();
  }).toThrowError(TypeError);
});
