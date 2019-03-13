import { INCREMENT_COUNTER } from '../../../src/redux/types';
import increment from '../../../src/redux/actionCreators';

describe('increment', () => {
  it('should create an action to increment', () => {
    const expectedAction = {
      type: INCREMENT_COUNTER,
    };
    expect(increment()).toEqual(expectedAction);
  });
});
