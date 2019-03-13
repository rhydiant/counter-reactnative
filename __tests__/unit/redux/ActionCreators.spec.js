import { INCREMENT_COUNTER } from '../../../src/redux/Types';
import increment from '../../../src/redux/ActionCreators';

describe('increment', () => {
  it('should create an action to increment', () => {
    const expectedAction = {
      type: INCREMENT_COUNTER,
    };
    expect(increment()).toEqual(expectedAction);
  });
});
