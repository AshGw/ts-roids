import { Extends, TestType } from 'src';
import { test, expect } from 'vitest';

type A = { x: number };
type B = { x: number; y: string };
type C = { x: number; y?: string };

test('_', () => {
  type ExcpectedToBe = false;
  const result: TestType<Extends<C, B>, ExcpectedToBe, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  type ExcpectedToBe = false;
  const result: TestType<Extends<A, B>, ExcpectedToBe, true> = true;
  expect(result).toBe(true);
});

test('_', () => {
  type ExcpectedToBe = true;
  const result: TestType<Extends<B, A>, ExcpectedToBe, true> = true;
  expect(result).toBe(true);
});
