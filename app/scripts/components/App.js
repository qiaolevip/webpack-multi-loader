import React from 'react'
import { Link, browserHistory } from 'react-router'

export default function App({ children }) {
  return (
    <div>
      <header>
        Links:
        {' '}
        <Link to="/counter">Home</Link>
        {' '}
        <Link to="/counter/foo">Foo</Link>
        {' '}
        <Link to="/counter/bar">Bar</Link>
      </header>
      <div>
        <button onClick={() => browserHistory.push('/counter/foo')}>Go to /foo</button>
      </div>
      <div style={{ marginTop: '1.5em' }}>{children}</div>
    </div>
  )
}