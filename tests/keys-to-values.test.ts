import { KeysToValues, TestType } from 'src';
import { test, expect } from 'vitest';

test.fails('Expected to not work on complex object types', () => {
  expect(
    // @ts-expect-error, it cannot be this type, it should error out
    assertType<KeysToValues>({
      name: 'John',
      age: 30,
      city: 'San Francisco',
      other: {
        complex: true,
      },
    })
  ).rejects.toBe(true);
});

test('only on simple ones', () => {
  const result: TestType<
    KeysToValues<{
      name: 'John';
      age: 30;
      city: 'New York' | 'San Francisco';
    }>,
    {
      John: 'name';
      30: 'age';
      'New York': never;
      'San Francisco': never;
    },
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  const result: TestType<
    KeysToValues<{
      name: 'John';
      age: 30;
      city: 'San Francisco';
    }>,
    {
      John: 'name';
      30: 'age';
      'San Francisco': 'city';
    },
    true
  > = true;
  expect(result).toBe(true);
});
