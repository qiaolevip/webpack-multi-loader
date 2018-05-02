import { FOO_ADD_NUMBER } from '../util/constants'

const foo = (state, action) => {
  switch (action.type) {
    case FOO_ADD_NUMBER:
      return {number: 100 + action.amount};
    default:
      return state;
  }
};

export default foo;