// src/pages/Home.jsx
import React from 'react';
import './Home.css';

import UclaNavbar from '../component/UclaNavbar';


function Home() {
  return (
    <>
    <UclaNavbar />
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Mariachi de Uclatlan</h1>
      <p className="text-lg text-gray-700">Experience the vibrant culture and music of Mariachi.</p>
    </div> 
    </>
  );
}


export default Home;
