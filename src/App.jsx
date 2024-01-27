// App.jsx
import React from 'react';
import './index.css';  
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Toogle from './Toogle';

function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    <Toogle />
    </>
  );
}

export default App;

