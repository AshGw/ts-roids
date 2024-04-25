import { DeepToPrimitive, TestType } from 'src';
import { test, expect } from 'vitest';

test('Works with nested objects', () => {
  type Actual = {
    a: 'a';
    b: 85;
    c: true;
    d: {
      e: 'xxxxxxxxxxx';
      f: 'eeeeeeeeeeeeeeeeee';
      g: {
        h: 1000000000000000;
        i: undefined;
        j: null;
      };
    };
  };
  type Expected = {
    a: string;
    b: number;
    c: boolean;
    d: {
      e: string;
      f: string;
      g: {
        h: number;
        i: undefined;
        j: null;
      };
    };
  };
  const result: TestType<DeepToPrimitive<Actual>, Expected, true> = true;
  expect(result).toBe(true);
});
