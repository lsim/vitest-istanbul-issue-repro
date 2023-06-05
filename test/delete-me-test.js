import { describe, it, expect } from 'vitest';
import { foo, bar, baz } from '../../../src/delete-me';

describe('DeleteMe2', () => {
  it('should baz', () => {
    expect(baz()).toBe('doo');
  });

  describe('DeleteMe', () => {
    describe('DeleteMe3', () => {
      it('should foo', () => {
        expect(foo()).toBe('bar');
      });
    });
    it('should bar', () => {
      expect(bar()).toBe('foo');
    });
  });
});
// TODO: istanbul omits coverage from tests and describes after the first describe at a given nesting level. This issue only occurs in browser mode
// TODO: make an issue for this on vitest/istanbul
// TODO: use istanbul without vitest to see if this is a vitest issue or an istanbul issue
// NOTE: with the c8 coverage tool, this issue does not occur

// TODO: perhaps use jest to test if this issue still occurs

// TODO: make minimal project reproducing the issue
