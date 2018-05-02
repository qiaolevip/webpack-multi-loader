import { INCREASE, DECREASE } from '../util/constants'

const initialState = {
  number: 1
};

const update = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {number: state.number + action.amount};
    case DECREASE:
      return {number: state.number - action.amount};
    default:
      return state;
  }
};

export default update;