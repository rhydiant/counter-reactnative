// @flow

import { INCREMENT_COUNTER } from './types';

function increment() {
  // eslint-disable-next-line no-console
  console.log(`called action creator, will type ${INCREMENT_COUNTER}`);
  return {
    type: INCREMENT_COUNTER,
  };
}

export default increment;
