// @flow

import { INCREMENT_COUNTER } from './Types';

function increment() {
  return {
    type: INCREMENT_COUNTER,
  };
}

export default increment;
