import {
  TestType,
  IsFalsy,
  UnionToIntersection,
  NewType,
  IsDeepImmutable,
  Optional,
} from 'src';
import { test, expect } from 'vitest';

test('_', () => {
  type ExcpectedToBe = true & true & true;
  const result: TestType<
    UnionToIntersection<true | true | true>,
    ExcpectedToBe,
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  type T = NewType<'T', string>;
  type ExcpectedToBe = (() => 'foo') & ((baz: 88) => Optional<T>);
  const result: TestType<
    UnionToIntersection<
      (() => 'foo') | ((baz: 88) => Optional<NewType<'T', string>>)
    >,
    ExcpectedToBe,
    true
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  type ExcpectedToBe = (() => 'foo') & ((i: 888) => true);
  const result: TestType<
    UnionToIntersection<(() => 'foo') | ((i: 88) => true)>,
    ExcpectedToBe,
    false
  > = true;
  expect(result).toBe(true);
});

test('_', () => {
  type ExcpectedToBe = true;
  const result: TestType<
    UnionToIntersection<
      IsFalsy<0> & IsDeepImmutable<{ a: string; readonly b: string }>
    >,
    ExcpectedToBe,
    true
  > = true;
  expect(result).toBe(true);
});
