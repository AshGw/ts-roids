import { Vals } from 'src';
import { expectTypeOf, test } from 'vitest';

type _Person = {
  name: string;
  age: number;
  email: string;
};

test('Vals<T> correctly retrieves values of properties in a type', () => {
  type PersonValues = Vals<_Person>;
  expectTypeOf<PersonValues>().toEqualTypeOf<string | number>();
});

test('Vals<T> is never for Union types', () => {
  type UnionType =
    | {
        prop1: string;
      }
    | {
        prop2: number;
      };
  type UnionValues = Vals<UnionType>;
  expectTypeOf<UnionValues>().toEqualTypeOf<never>();
});

test('Vals<T> works as usual for intersection types', () => {
  type UnionType = {
    prop1: string;
  } & {
    prop2: number;
  };
  type UnionValues = Vals<UnionType>;
  expectTypeOf<UnionValues>().toEqualTypeOf<string | number>();
});
