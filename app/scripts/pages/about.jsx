import React, { createClass } from 'react'
import '../../sass/about.sass'

export default createClass({
  render() {
    const { name } = this.props.location.query;
    return <div className="about-container">
      About {this.props.params.what} {name}
      {name?<p>{(name+' ').repeat(5)})</p>:''}
    </div>
  }
})