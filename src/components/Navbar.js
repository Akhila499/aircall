import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="noblock">
    <ul>
      <li><Link to='/incoming'>Inbox</Link></li>
      <li><Link to='/'>All calls</Link></li>
    </ul>
    </div>
  )
}

export default Navbar
