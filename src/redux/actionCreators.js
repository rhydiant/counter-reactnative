// @flow

import { INCREMENT_COUNTER } from './types';

function increment() {
  console.log(`called action creator, will type ${INCREMENT_COUNTER}`);
  return {
    type: INCREMENT_COUNTER,
  };
}

export default increment;
