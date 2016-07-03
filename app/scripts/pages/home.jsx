import React, { Component } from 'react'
import News from '../components/News'

import '../../sass/main.sass'

class Home extends Component {
  render() {
    return (
      <div className="main-container">
        <b>Congratulations</b>, you are now ready to implement your client side application! Enjoy :-)😋😋😋😋😋
        <p>It's good to run react in webpack server.</p>
        <p>Real-time to compiler the code.</p>
        <News />
      </div>
    );
  }
}

export default Home;
