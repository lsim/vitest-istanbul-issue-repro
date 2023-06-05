import { describe, it, expect } from 'vitest';
import { foo, bar, baz } from '../src/stuff';

describe('stuff 1', () => {
  it('should baz', () => {
    expect(baz()).toBe('doo');
  });

  describe('stuff 2', () => {
    describe('stuff 3', () => {
      it('should foo', () => {
        expect(foo()).toBe('bar');
      });
    });
    it('should bar', () => {
      expect(bar()).toBe('foo');
    });
  });
});
