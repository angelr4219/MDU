// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar /> 
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Events" element={<Events />} />
      <Route path="Contact" element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
