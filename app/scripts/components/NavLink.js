import React from 'react'
import { Link } from 'react-router'

export default (props) => {
  return <Link {...props} activeStyle={{ color: 'red' }} activeClassName="active"/>
}