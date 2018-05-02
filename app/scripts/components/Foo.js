import React,　{ Component } from 'react';
import { connect } from 'react-redux';
import FooActions from '../actions/fooActions';

class Foo extends Component {
  render() {
    const { addNumber } = this.props;
    return (
      <div>
        <p>I'm Foo!</p>
        当前数值：
        <button onClick={()=>addNumber(100)}>+100</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addNumber: (n) => FooActions.fooAddNumber(n)
});

export default connect(
  null, mapDispatchToProps
)(Foo)