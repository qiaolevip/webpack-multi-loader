import React, { createClass } from 'react'
import ReactDOM from 'react-dom'
import News from './components/News.js'

import '../sass/main.sass'

const Content = createClass({
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
});
ReactDOM.render(<Content />, document.getElementById('app'));