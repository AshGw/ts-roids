import { Keys } from 'src';
import { expectTypeOf, test } from 'vitest';

type _Person = {
  name: string;
  age: number;
  email: string;
};

test('Keys<T> correctly retrieves keys of a type', () => {
  type PersonKeys = Keys<_Person>;
  expectTypeOf<PersonKeys>().toEqualTypeOf<'name' | 'age' | 'email'>();
});
