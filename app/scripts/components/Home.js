import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../actions/countActions'

const Home = ({ number, increase, decrease }) => (
  <div>
    Some state changes:
    {number}
    <button onClick={() => increase(1)}>Increase</button>
    <button onClick={() => decrease(1)}>Decrease</button>
  </div>
);

const mapStateToProps = (state) => {
  return {
    number: state.count.number
  }
};

export default connect(
  mapStateToProps,
  //state => ({ number: state.number }),
  { increase, decrease }
)(Home)