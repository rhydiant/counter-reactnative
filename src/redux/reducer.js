/* eslint-disable no-console */

import { INCREMENT_COUNTER } from './types';

function counter(store = { counter: 0 }, action) {
  console.log(`called reducer with action ${JSON.stringify(action.type)}`);
  switch (action.type) {
    case INCREMENT_COUNTER:
      console.log('performing action');
      return { counter: store.counter + 1 };
    default:
      return store;
  }
}

export default counter;
