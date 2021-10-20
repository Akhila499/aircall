import React from 'react'
import { Link } from 'react-router-dom'
import HeaderSideIcon from './HeaderSideIcon'
const Navbar = () => {
  return (
    <div className="noblock">
    <ul>
      <li><Link to='/incoming'>Inbox</Link></li>
      <li><Link to='/'>All calls</Link></li>
      <li><Link to='/archived'><i className="fa-solid fa-sliders"></i></Link></li>
    </ul>
    </div>
  )
}

export default Navbar
