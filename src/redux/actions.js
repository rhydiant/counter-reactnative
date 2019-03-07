import { INCREMENT_COUNTER } from './types';

function increment() {
  console.log(`called increment to return ${INCREMENT_COUNTER}`);
  return {
    type: INCREMENT_COUNTER,
  };
}

export default increment;
