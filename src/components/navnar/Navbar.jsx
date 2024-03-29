import React from 'react';
import './Navbar.css';
import logo from '/logo.png'
import { Link } from 'react-scroll';
import contactImg from '/contact.png'

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo' />
        <div className="desktopMenu">
            <Link className="desktopMenuListItem">Home</Link>
            <Link className="desktopMenuListItem">About</Link>
            <Link className="desktopMenuListItem">Portofolio</Link>
            <Link className="desktopMenuListItem">Clients</Link>
        </div>
        <button className="desktopMenuBtn">
            <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me
        </button>
    </nav>
  )
}

export default Navbar;