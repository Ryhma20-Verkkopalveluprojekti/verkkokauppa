import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/inc/Navbar';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Cart from './components/pages/Cart';
import Shop from './components/pages/Shop';
import Footer from './components/inc/Footer';
import Admin from './components/pages/Admin';
import Newsletter from './components/pages/SubscribeNewsletter';
import Vote from './components/pages/Vote';
import Order from './components/inc/Order';
import SignUp from './components/pages/SignUp';
import Stores from './components/pages/stores';
import AdminNewsletter from './components/pages/Adminnewsletter';


function App() {
  const [cartItems, setCartItems] = useState([]);
  //piilottaa ostoskorin näyttämisen shop.js sivulta, näytetään vain cart.js sivulla
  const [isCartVisible, setCartVisibility] = useState(false);

  return (
    <Router>
      <div>
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/shop"
            element={<Shop
              cartItems={cartItems}
              setCartItems={setCartItems}
              setCartVisibility={setCartVisibility}
            />}
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} />}
          />

          <Route
            path="/admin"
            element={<Admin />}
          />

          <Route
            path="/vote"
            element={<Vote />}
          />

          <Route 
            path="/order"
            element={<Order />}
            
          />

            <Route 
            path="/newsletter"
            element={<Newsletter />}
            
          />
          <Route 
            path="/signup"
            element={<SignUp />}
          />  
           <Route 
            path="/stores"
            element={<Stores />}
          /> 
           <Route 
            path="/adminnewsletter"
            element={<AdminNewsletter />}
          />  
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;