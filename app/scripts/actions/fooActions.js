import { FOO_ADD_NUMBER } from '../util/constants';

const FooActions = {
  fooAddNumber(n) {
    return {
      type: FOO_ADD_NUMBER,
      amount: n
    }
  }
};

export default FooActions;