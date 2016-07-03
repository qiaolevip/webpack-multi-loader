import React from 'react';
import { Link } from 'react-router';
import NavLink from '../components/NavLink';
import '../../stylus/navLink.styl'

export default (props) => {
  return (
    <div className="container">
      <h1>React Router</h1>
      <ul className="navs">
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/about/Company?name=Happy-Joe">About</NavLink></li>
        <li><NavLink to={{ pathname: '/profile/React-Study', query: { name: 'Happy-A' } }}>What</NavLink></li>
      </ul>
      { props.children }
    </div>
  );
};