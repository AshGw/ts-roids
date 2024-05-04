import { Final, FinalTypeError } from 'src';
import { test, expect } from 'vitest';

test('Should not allow inheritance; a FinalTypeError should be thrown', () => {
  @Final
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

test('Should allow instantiation of a final class with no problems', () => {
  @Final
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

test('Should allow to access attributes of the final class', () => {
  @Final
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
    const _ = new Foo('foo').bar;
  }).not.toThrow();
});

test('Should work when the final class is a subclass itself', () => {
  abstract class BaseFoo<T> {
    abstract someFoo(): T;
  }
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
  expect(() => {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const _ = new Foo('foo').bar;
  }).not.toThrow();
});

test(`Should not allow inheritance, of the final class, when the final class
  is a subclass itself, a FinalTypeError should be thrown`, () => {
  abstract class BaseFoo<T> {
    abstract someFoo(): T;
  }
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
    const _ = new SubFoo('foo').bar;
  }).toThrow(FinalTypeError);
});
