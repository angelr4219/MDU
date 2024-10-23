// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <NavLink to="/Home">Home</NavLink> |{' '}
      <NavLink to="/About">About Us</NavLink> |{' '}
      <NavLink to="/Events">Events</NavLink> |{' '}
      <NavLink to="/Contact">Contact</NavLink>
    </nav>
  );
}

export default Navbar;
