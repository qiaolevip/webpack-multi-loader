import { INCREASE, DECREASE } from '../util/constants';

export const increase = (n) => {
  return {
    type: INCREASE,
    amount: n
  }
};

export const decrease = (n) => {
  return {
    type: DECREASE,
    amount: n
  }
};