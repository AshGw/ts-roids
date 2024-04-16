import { expect, describe, it } from 'vitest';
import { Nullable } from '@/index';

describe('Nullable type', () => {
  it('should accept null', () => {
    const value: Nullable = null;
    expect(value).toBeNull();
  });

  it('should accept undefined', () => {
    const value: Nullable = undefined;
    expect(value).toBeUndefined();
  });
});
