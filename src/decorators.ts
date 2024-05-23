import { Newable } from './types';

/**
 * @hidden
 */
export class FinalTypeError extends TypeError {}
/**
 * Marks a class as final, preventing inheritance from this class.
 * When applied, any attempt to extend this class will result in a TypeError at runtime.
 * @remarks
 * This decorator does not prevent instantiation of the final class itself.
 * @example 
 * ```ts
 * @Final
 * class Foo<T> {
 *   foo: T;
 *   bar: string;
 *
 *   constructor(foo: T) {
 *     this.foo = foo;
 *     this.bar = 'bar';
 *   }
 *
 *   someFoo(): T {
 *     return this.foo;
 *   }
 * }
 *
 * // No problem with instantiation
 * const foo = new Foo<string>('foo');

 * // The line below will cause a TypeError: Cannot inherit from the final class Foo
 * const sub = new SubFoo('subFoo');
 * ```
 * @see {@link https://github.com/microsoft/TypeScript/issues/1534| Issue #1}
 * @see {@link https://github.com/microsoft/TypeScript/issues/8306| Issue #2}
 * @see {@link https://github.com/microsoft/TypeScript/issues/50532| Issue #3}
 */
export const Final = <CST extends Newable>(cst: CST): CST => {
  class F extends cst {
    constructor(...args: any[]) {
      super(...args);
      const newTarget = new.target as unknown as typeof F;
      if (newTarget !== F) {
        throw new FinalTypeError(`Cannot inherit from the final class: `);
      }
    }
  }

  Reflect.defineProperty(F, 'name', {
    // eslint-disable-next-line
    value: (cst as any).name || 'Final',
  });

  return F as CST;
};

const _freeze = (obj: object) => {
  Object.freeze(obj);
};
/**
 * When applied to a class it creates a [frozen](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) instance of it,
 * thus preventing modifications to instance properties after instantiation.
 *
 * @example
 * ```ts
@Frozen
class Foo<T> {
  foo: T;
  bar?: MaybeUndefined<string>;

  constructor(foo: T) {
    this.foo = foo;
    this.bar = 'bar';
  }

  someFoo(): T {
    return this.foo;
  }
}

const foo = new Foo('foo');
// The line below will cause a TypeError: Cannot assign to read only property 'bar'
foo.bar = 'altered bar';
// The line below will cause a TypeError: Cannot delete property 'bar'
delete foo.bar;
 * ```
 */
export function Frozen<T extends Newable>(cst: T): T & Newable {
  return class Locked extends cst {
    constructor(...args: any[]) {
      super(...args);
      _freeze(this);
    }
  };
}

const _seal = (obj: object) => {
  Object.seal(obj);
};
/**
 * When applied to a class, it creates a [sealed](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal) instance of it,
 * preventing extensions and making existing properties non-configurable.
 *
 * @example
 * ```ts
 * @Sealed
 * class Person {
 *   constructor(public name: string, public age?: number) {}
 * }
 *
 * const john = new Person('John', 30);
 * // Trying to add a new property will throw an error
 * (john as any).email = 'john@example.com'; // TypeError: Cannot add property email, object is not extensible
 *
 * // Existing properties can still be modified
 * john.age = 31; // Allowed
 *
 * // Existing properties cannot be re-configured or deleted
 * delete john.age; // TypeError: Cannot delete property 'age'
 * }
 * ```
 * */
export function Sealed<T extends Newable>(cst: T): T & Newable {
  return class Locked extends cst {
    constructor(...args: any[]) {
      super(...args);
      _seal(this);
    }
  };
}

