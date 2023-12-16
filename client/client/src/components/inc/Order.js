import React, { useState } from 'react';
import axios from 'axios';
import Cart from '../pages/Cart';
import ShoppingCart from '../pages/Cart';

function Order({ cartItems }) {
  const [orderPlaced, setOrderPlaced] = useState(false);

  function sendOrder() {
    const data = {
      products: cartItems.map(p => ({ id: p.id, quantity: p.quantity })),
      customerId: 1
    };

    axios.post('http://localhost:3001/order', data)
      .then((resp) => {
        console.log(resp.data);
        setOrderPlaced(true); // Asetetaan tila osoittamaan, että tilaus on tehty
        // Tyhjennetään kentät
      })
      .catch(error => console.log(error.response.data));
  }

  return (
    <div>
      <button onClick={sendOrder} type="button" className="btn btn shadow w-100" style={{ backgroundColor: "#364d1c", color: "#ffffff" }}>
        CheckOut
      </button>
      {/*Kiitos tilauksesta -viesti, kun tilaus lähetetty */}
      {orderPlaced && (
        <p className="order-placed-message" >
          Thank you for your order! ❤️
        </p>
      )}
    </div>
  );
}

export default Order;
