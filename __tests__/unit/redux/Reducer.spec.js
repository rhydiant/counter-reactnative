import counter from '../../../src/redux/Reducer';
import increment from '../../../src/redux/ActionCreators';

describe('counter', () => {
  it('should increment initial counter state', () => {
    expect(counter(undefined, increment())).toEqual({ counter: 1 });
  });

  it('should increment counter state', () => {
    expect(counter({ counter: 0 }, increment())).toEqual({ counter: 1 });
  });

  it('should return default state given unknown action', () => {
    expect(counter({ counter: 0 }, undefined)).toEqual({ counter: 0 });
  });
});
