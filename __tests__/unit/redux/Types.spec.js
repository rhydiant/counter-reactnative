import { INCREMENT_COUNTER } from '../../../src/redux/types';

describe('INCREMENT_COUNTER', () => {
  it('should return the expected type', () => {
    expect(INCREMENT_COUNTER).toBe('INCREMENT_COUNTER');
  });
});
