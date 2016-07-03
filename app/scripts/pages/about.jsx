import React, { createClass } from 'react'
import '../../sass/about.sass'

export default createClass({
  render() {
    console.log(this.props.routeParams, this.props.params, this.props.history);
    const { name } = this.props.location.query;
    return <div className="about-container">
      About {this.props.params.what} {name}
      <p>{(name+' ').repeat(5)}</p>
    </div>
  }
})