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
/*import axios from "axios";

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

/* Reiman esimerkkikoodi axios luennosta tuotteiden hakemiseen

function App() {

  const [products, setProducts] = useState([]);

  function getProducts(){
    axios.get('http:/localhost:3001/products')
    .then(resp => setProducts(resp.data))
    .catch( error => console.log(error.message));
  }

  return (
    <div>
    <button onClick={getProducts} >Fetch products</button>
    <ul>
    {products.map( p => <li key={p.id}>{p.productName}</li ) }
    <ul>
    </div>
  );

}

export default App; */