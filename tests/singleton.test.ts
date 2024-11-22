import { Singleton } from 'src';
import { test, expect } from 'vitest';

test('should return the same instance when attempting to create multiple instances', () => {
  @Singleton
  class Foo {
    value: string;

    constructor(value: string) {
      this.value = value;
    }
  }

  const foo1 = new Foo('first');
  const foo2 = new Foo('second');

  expect(foo1).toBe(foo2);
  expect(foo1.value).toBe('first');
});

test('should have no problem with instantiation', () => {
  @Singleton
  class Foo {
    value: string;

    constructor(value: string) {
      this.value = value;
    }
  }

  expect(() => {
    new Foo('value');
  }).not.toThrow();
});

test('should ensure singleton across different invocations', () => {
  @Singleton
  class Foo {
    value: string;

    constructor(value: string) {
      this.value = value;
    }
  }

  const foo1 = new Foo('foo');
  const foo2 = new Foo('bar');

  expect(foo1).toBe(foo2);
  expect(foo1.value).toBe('foo');
});

test('should not allow overriding the singleton instance', () => {
  @Singleton
  class Foo {
    value: string;

    constructor(value: string) {
      this.value = value;
    }
  }

  const foo1 = new Foo('initial');
  const foo2 = new Foo('changed');

  expect(foo1).toBe(foo2);
  expect(foo2.value).toBe('initial');
});

test('should return the same instance even after multiple constructor calls', () => {
  @Singleton
  class Foo {
    value: string;

    constructor(value: string) {
      this.value = value;
    }
  }

  const foo1 = new Foo('first');
  const foo2 = new Foo('second');
  const foo3 = new Foo('third');

  expect(foo1).toBe(foo2);
  expect(foo1).toBe(foo3);
  expect(foo3.value).toBe('first');
});
