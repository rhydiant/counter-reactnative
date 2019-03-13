import { INCREMENT_COUNTER } from './types';

function counter(store = { counter: 0 }, action) {
  if (action === undefined) return store;
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { counter: store.counter + 1 };
    default:
      return store;
  }
}

export default counter;
