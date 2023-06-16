// Imports - React & Page Components
import React, { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Home from './components/Home';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

// Rendering App Page
export const App = () => {
  
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;