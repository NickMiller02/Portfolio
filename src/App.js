// Imports - React & Page Components
import React, { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Home from './components/Home';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

import '../src/index.css'
import { Flex } from '@chakra-ui/react';
import { Box } from '@mui/material';

// Rendering App Page
export const App = () => {
  
  return (
    <Router>
      <Flex flexDirection="column" minHeight="100vh"> 
      <Nav />
        <Box flexGrow={1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
      </Flex>
    </Router>
  );
}

export default App;