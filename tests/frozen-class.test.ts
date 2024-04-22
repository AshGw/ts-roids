import { FinalTypeError, Frozen } from 'src';
import { test, expect } from 'vitest';

test('is the object actually frozen', () => {
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
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const foo = new Foo('foo');
  expect(Object.isFrozen(foo)).toBeTruthy();
});

test('Should have no problem with instantiation', () => {
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
    const _ = new Foo('subbedFoo');
  }).not.toThrow();
});

test('No problem with instantiation of the frozen class, or the subbed class', () => {
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
    new Foo('foo');
    new SubFoo('foo');
  }).not.toThrow();
});

test('No problem with instantiation of the frozen already subbed class, or the subbed class from the frozen class', () => {
  abstract class BaseFoo<T> {
    abstract someFoo(): T;
  }
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
    new Foo('foo');
    new SubFoo('foo');
  }).not.toThrow();
});

test('Should allow to mutate the attributes of a frozen object', () => {
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
  }).not.toThrow(TypeError);
});

test('Should work when the final class is a subclass itself', () => {
  abstract class BaseFoo<T> {
    abstract someFoo(): T;
  }
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
  }).toThrow();
});

test(`Should not allow inheritance, of the final class, when the final class
  is a subclass itself, a TypeError should be thrown`, () => {
  abstract class BaseFoo<T> {
    abstract someFoo(): T;
  }
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
