// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="container">
        <nav className="navbar">
            <ul className="navbar-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
            <li><Link to="/discount">Discount</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
