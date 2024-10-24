// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Members from './pages/Members';
import Register from './pages/Register';
import Calendar from './pages/Calendar';


function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="events" element={<Events />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="members" element={<Members />} />
        <Route path="register" element={<Register />} />
        <Route path="calendar" element={<Calendar />} />

      </Routes>
    
  );
}

export default App;