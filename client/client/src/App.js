import React from "react";
import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/inc/Navbar';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Cart from './components/pages/Cart';
import Shop from './components/pages/Shop';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/inc/Footer';

function App() {
  return (
    <Router>
    <div>
    <Navbar />

    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/cart" element={<Cart />} />
    </Routes>
    <Footer />

    </div>
    
   
    </Router>

    
  
  );
}

export default App;
