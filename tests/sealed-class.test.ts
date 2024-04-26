import { Sealed } from 'src';
import { test, expect } from 'vitest';

test('is the object actually sealed', () => {
  @Sealed
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
  expect(Object.isSealed(new Foo('foo'))).toBeTruthy();
});

test('Should have no problem with instantiation', () => {
  @Sealed
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

test('No problem with instantiation of the sealed class, or the subbed class', () => {
  @Sealed
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

test('No problem with instantiation of the sealed already subbed class, or the subbed class from the frozen class', () => {
  abstract class BaseFoo<T> {
    abstract someFoo(): T;
  }
  @Sealed
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

test('Should be allowed to mutate the properties of a sealed object', () => {
  @Sealed
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

test('Should not allow to delete the properties of a sealed object', () => {
  @Sealed
  class Foo<T> {
    private _foo: T;
    bar?: string;

    constructor(foo: T) {
      this._foo = foo;
      this.bar = 'bar';
    }
    someFoo(): T {
      return this._foo;
    }
  }
  expect(() => {
    delete new Foo('foo').bar;
  }).toThrow(TypeError);
});

test('Should work when the final class is a subclass itself', () => {
  abstract class BaseFoo<T> {
    abstract someFoo(): T;
  }
  @Sealed
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
