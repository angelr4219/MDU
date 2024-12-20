import React, { useState } from 'react';
import './UclaNavbar.css'; // You'll need to create this CSS file
import { Link } from 'react-router-dom';

const UclaNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="ucla-header">
      <div className="ucla-header__container">
        <a className="ucla-header__logo-link" href="https://www.ucla.edu">
          <span className="visuallyhidden">UCLA Logo</span>
          <svg xmlns="http://www.w3.org/2000/svg" id="ucla-box-black" viewBox="0 0 360 168.84">
            <rect className="cls-1" width="360" height="168.84" fill="#2774ae"/>
            <path fill="#ffffff" d="M57.57,100.65a72.15,72.15,0,0,1-.18-8.51l4.06-46H76.52L72.39,92.54c-.89,10,3,17.22,13.08,17.22,10.26,0,15.68-7.29,16.57-16.21l4.28-47.44h15.06L117.21,93c-1.68,18-13.64,31.54-33,31.54-15.08,0-24.8-9.75-26.65-23.85"/>
            <path fill="#ffffff" d="M124.84,85.07c2-22.1,16.87-40.42,42.62-40.42a35.32,35.32,0,0,1,19.79,5.73l-1.72,18.25c-5.94-7.81-13-9.08-19.51-9.08-16,0-24.81,11.13-26.07,25.22-1.21,13.71,5.87,24.87,21.39,24.87,6.78,0,14-2,21.48-9.47l-1.66,18.73c-7.33,4-14.14,5.78-21,5.78-25.48,0-37.15-18.93-35.32-39.61"/>
            <path fill="#ffffff" d="M199.28,46.11h15l-5.48,62.5h21.53c1.52,0,6.65-.08,8-.16-.08.75-1.37,14.44-1.37,14.44H192.46Z"/>
            <path fill="#ffffff" d="M277.57,74.77a18,18,0,0,0,1.11-3.22h.24a18.25,18.25,0,0,0,.57,3.25c.83,3.5,6.68,22.94,6.68,22.94h-19s10.17-22.46,10.37-23m3.85-32.18-1,0-41.15,80.28h16L261,110.71h29l3.62,12.18h15.93Z"/>
          </svg>
          <span className="ucla-header__department">Mariachi De Uclatlan</span>
        </a>
        <button className="ucla-header__menu-toggle" onClick={toggleMenu} aria-expanded={isMenuOpen}>
          <span className="visuallyhidden">Toggle menu</span>
          <span className="ucla-header__menu-icon"></span>
        </button>
        <nav className={`ucla-header__nav ${isMenuOpen ? 'is-open' : ''}`}>
          <ul className="ucla-header__nav-list">
            <li className="ucla-header__nav-item">
              <a href="/" className="ucla-header__nav-link">Home</a>
            </li>
            <li className="ucla-header__nav-item">
              <a href="/about" className="ucla-header__nav-link">About</a>
            </li>
            <li className="ucla-header__nav-item">
              <a href="/members" className="ucla-header__nav-link">Members</a>
            </li>
            <li className="ucla-header__nav-item">
              <a href="/contact" className="ucla-header__nav-link">Contact</a>
            </li>
            <li className="ucla-header__nav-item">
              <a href="/Calendar" className="ucla-header__nav-link">Calendar</a>
            </li>
            <li className="ucla-header__nav-item">
              <a href="/login" className="ucla-header__nav-link">Login</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default UclaNavbar;