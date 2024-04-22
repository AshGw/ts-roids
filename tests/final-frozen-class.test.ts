import { Final, Frozen, FinalTypeError } from 'src';
import { test, expect } from 'vitest';

test('Should not allow inheritance of a final frozen class. "FinalTypeError" should be thrown', () => {
  @Final
  @Frozen
  class Foo<T> {
    private _foo: T;
    bar: string;

    constructor(foo: T) {
      this._foo = foo;
      this.bar = 'bar';
    }
    someFoo(): T {
      return this._foo;
    }
  }

  class SubFoo extends Foo<string> {
    constructor(foo: string) {
      super(foo);
    }
  }
  expect(() => {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const _ = new SubFoo('subbedFoo');
  }).toThrowError(FinalTypeError);
});

test('Should allow instantiation of a final frozen class with no problems', () => {
  @Final
  @Frozen
  class Foo<T> {
    private _foo: T;
    bar: string;

    constructor(foo: T) {
      this._foo = foo;
      this.bar = 'bar';
    }
    someFoo(): T {
      return this._foo;
    }
  }
  expect(() => {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const _ = new Foo('foo');
  }).not.toThrow();
});

test('Should bot allow to alter  attributes of the final frozen class, throws TypeError since it is frozen', () => {
  @Final
  @Frozen
  class Foo<T> {
    private _foo: T;
    bar: string;

    constructor(foo: T) {
      this._foo = foo;
      this.bar = 'bar';
    }
    someFoo(): T {
      return this._foo;
    }
  }
  expect(() => {
    const foo = new Foo('foo');
    foo.bar = 'altered';
  }).toThrow(TypeError);
});

test('Should work when the final sealed class is a subclass itself, TypeError should be thrown', () => {
  abstract class BaseFoo<T> {
    abstract someFoo(): T;
  }
  @Final
  @Frozen
  class Foo<T> extends BaseFoo<T> {
    private _foo: T;
    bar: string;

    constructor(foo: T) {
      super();
      this._foo = foo;
      this.bar = 'bar';
    }
    someFoo(): T {
      return this._foo;
    }
  }
  expect(() => {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const _ = new Foo('foo').bar;
  }).not.toThrow(TypeError);
});

test(`Should not allow inheritance, of the final class, when the final class
  is a subclass itself, a TypeError should be thrown`, () => {
  abstract class BaseFoo<T> {
    abstract someFoo(): T;
  }
  @Final
  @Frozen
  class Foo<T> extends BaseFoo<T> {
    private _foo: T;
    bar: string;

    constructor(foo: T) {
      super();
      this._foo = foo;
      this.bar = 'bar';
    }
    someFoo(): T {
      return this._foo;
    }
  }

  class SubFoo extends Foo<string> {
    constructor(foo: string) {
      super(foo);
    }
  }
  expect(() => {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const _ = new SubFoo('foo').bar;
  }).toThrow(FinalTypeError);
});

test(`One limitation, the @Final decorator should be on top of @Frozen not the opposite, otherwise FinalTypeError would be thrown upon instantitation of the final class`, () => {
  abstract class BaseFoo<T> {
    abstract someFoo(): T;
  }
  @Frozen
  @Final
  class Foo<T> extends BaseFoo<T> {
    private _foo: T;
    bar: string;

    constructor(foo: T) {
      super();
      this._foo = foo;
      this.bar = 'bar';
    }
    someFoo(): T {
      return this._foo;
    }
  }

  class SubFoo extends Foo<string> {
    constructor(foo: string) {
      super(foo);
    }
  }
  expect(() => {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const _ = new Foo('foo');
  }).toThrow(FinalTypeError);
});
