import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../actions/countActions'

const Home = ({ number, increase, decrease }) => (
  <div>
    当前数值：{number}　
    <button onClick={() => increase(1)}>Increase(+)</button>　
    <button onClick={() => decrease(1)}>Decrease(-)</button>
  </div>
);

Home.PropTypes = {
  onClick: PropTypes.number.isRequired,
  completed: PropTypes.func.isRequired,
  text: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({ number: state.count.number });
const mapDispatchToProps = { increase, decrease };

export default connect(
  //state => ({ number: state.number }),
  mapStateToProps, mapDispatchToProps
)(Home)