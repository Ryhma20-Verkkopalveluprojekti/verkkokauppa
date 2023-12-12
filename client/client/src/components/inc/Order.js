import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import Cart from '../pages/Cart';
import ShoppingCart from '../pages/Cart';



function Order({cartItems}){
      
        function sendOrder(){
            const data = {
                products: cartItems.map(p => ({id:p.id,quantity:p.quantity})),
                customerId: 1
            };

        axios.post('http://localhost:3001/order', data)
             .then((resp) => {
                console.log(resp.data)
                //tyhjennetään kentät
             })

             .catch(error => console.log(error.response.data));
            }
          
            return(
        
                <div><button onClick={sendOrder} type="button" className="btn btn shadow w-100" style={{ backgroundColor: "#364d1c", color: "#ffffff"}} >CheckOut</button></div>
            );

}
export default Order;
