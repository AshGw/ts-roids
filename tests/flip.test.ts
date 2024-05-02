import { Flip, TestType } from 'src';
import { test, expect } from 'vitest';

test(() => {
  type Obj = { name: 'X'; age: 30; city: 'Somewhere' };
  type ExcpectedToBe = { X: 'name'; 30: 'age'; Somewhere: 'city' };
  const result: TestType<Flip<Obj>, ExcpectedToBe, true> = true;
  expect(result).toBe(true);
});

test(() => {
  type Obj = { fruit: 'Apple'; color: 'Red'; price: 1.25 };
  type ExcpectedToBe = { Apple: 'fruit'; Red: 'color'; 1.25: 'price' };
  const result: TestType<Flip<Obj>, ExcpectedToBe, true> = true;
  expect(result).toBe(true);
});

test(() => {
  type Obj = { optionA: true; optionB: false };
  type ExcpectedToBe = { true: 'optionA'; false: 'optionB' };
  const result: TestType<Flip<Obj>, ExcpectedToBe, true> = true;
  expect(result).toBe(true);
});
