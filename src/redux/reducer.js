import { INCREMENT_COUNTER } from './types';

function counter(store = { counter: 0 }, action) {
  console.log(
    `called counter reducer with action ${JSON.stringify(action.type)}`,
  );
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { counter: store.counter + 1 };
  }
  console.log(`counter returns store ${JSON.stringify(store)}`);
  return store;
}

export default counter;
