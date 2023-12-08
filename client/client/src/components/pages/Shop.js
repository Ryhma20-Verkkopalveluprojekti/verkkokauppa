import React, { useEffect } from 'react';
import Banner from '../inc/Banner';
import { Link } from 'react-router-dom';
import '../pages/styles/Shop.css';
import axios from "axios";
import { useState } from 'react';
import Discount from '../inc/Discount';

function Shop({ setCartItems, cartItems }) {
    const ShoppingCart = ({ cartItems }) => (
        <div>
          
          <ul>
            {cartItems && cartItems.map(item => (
              <li key={item.id}>
                Product {item.name} (ID: {item.id}) added
              </li>
            ))}
          </ul>
        </div>
      );

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('Small plants');

  const addToCart = (productId, productName, productPrice) => {
    const newCartItem = { id: productId, name: productName, price: productPrice };
    console.log('Adding to cart:', newCartItem);
    setCartItems((prevItems) => [...prevItems, newCartItem]);
};

  useEffect(() => {
    const params = {
      category: category
    };

    axios.get('http://localhost:3001/products', { params: params })
      .then(resp => setProducts(resp.data))
      .catch(error => console.log(error.message));
  }, [category]);

  return (
    <div>
      <div className="page-content" style={{ minHeight: '100vh' }}>
        <Banner />
        <Discount />
        <ShoppingCart cartItems={cartItems} />
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-4 text-center">
                <div id="buttons" className="d-flex">
                  <button onClick={() => setCategory('Small plants')} type="button" className="btn btn-custom mr-3">
                    Small plants
                  </button>
                  <button onClick={() => setCategory('Mid-size plants')} type="button" className="btn btn-custom mr-3">
                    Mid-size plants
                  </button>
                  <button onClick={() => setCategory('Big plants')} type="button" className="btn btn-custom mr-3">
                    Big plants
                  </button>
                  <button onClick={() => setCategory('Artificial plants')} type="button" className="btn btn-custom mr-3" >
                    Artificial plants
                  </button>
                </div>
              </div>

              {products.map(p => (
                <div key={p.id} className="col-md-4">
                  <div className="card shadow">
                    <img src={'http://localhost:3001/' + p.imageUrl} alt={p.productName} />
                    <div className="card-body">
                      <h6>{p.productName}</h6>
                      <p>{p.price} euros</p>
                      <button
                        onClick={async () => {
                          await addToCart(p.id, p.productName, p.price);
                        }}
                        type="button" className="btn btn-custom mr-3"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Shop;