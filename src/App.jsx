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
    <Routes>
      <Navbar /> 
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="events" element={<Events />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
