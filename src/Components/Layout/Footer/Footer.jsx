// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <ul className="footer-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
            <li><Link to="/sort">Sort</Link></li>
        </ul>
    </footer>
  )
}

export default Footer
