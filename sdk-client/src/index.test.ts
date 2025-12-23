import { describe, it, expect } from 'vitest';
import { loadMontra } from './index';

describe('Montra Client SDK', () => {
  it('should initialize with a publishable key', () => {
    const montra = loadMontra('pk_test_123');
    expect(montra).toBeDefined();
  });
});
