// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Import custom CSS if needed


function Navbar() {
    return (
      <nav className="bg-blue-600 p-4 flex justify-between items-center fixed top-0 left-0 w-full z-10">
        <div className="left flex items-center">
          <img src="/path/to/logo.png" alt="Logo" className="h-8" />
          <h1 className="text-white text-xl ml-4">Mariachi de Uclatlan</h1>
        </div>
        <div className="right flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-white'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-white'
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-white'
            }
          >
            Events
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'text-white font-bold' : 'text-white'
            }
          >
            Contact
          </NavLink>
        </div>
      </nav>
    );
  }

export default Navbar;