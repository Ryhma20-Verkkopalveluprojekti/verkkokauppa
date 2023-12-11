import React from 'react';
import Banner from '../inc/Banner';
import { FaCcVisa } from 'react-icons/fa';
import { FaCcPaypal } from 'react-icons/fa';
import { FaCcMastercard } from 'react-icons/fa';
import { FaApplePay } from 'react-icons/fa';
import { SiAmericanexpress } from 'react-icons/si';
import { SiSamsungpay } from 'react-icons/si';
import '../pages/styles/Cart.css';
 
function ShoppingCart({ cartItems }) {
 
    {/* Maksutapa ikonien värit*/ }
    const visa = '#1a1f71';
    const paypal = '#003087';
    const mastercard = '#eb001b';
 
    {/* Laskee ostoskorin yhteissumman*/ }
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
    };
 
    return (
        <div>
            {/* Määrittää sivun korkeuden, jotta footer pysyy sivun alalaidassa */}
            <div className="page-content" style={{ minHeight: '100vh' }}>
 
                {/* Banneri navbarin alla */}
                <Banner />
 
 
                {/* Ostoskorin sisältö */}
                <section className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h2>Shopping Cart</h2>
                                <ul>
                                {cartItems &&
                                cartItems.map((item, index) => (
                                <li key={`${item.id}-cart-${index}`}>
                                 {item.name} - {item.price} euros
                                </li>
                                 ))}
                                </ul>
                                <div>
                                     {/*Näyttää yhteissumman tässä*/ }
                                    <p className="total-text">Total: {calculateTotal()} euros</p>
                                </div>
                            </div>
 
                            {/* Tilauslomake */}
                            <div className="col-md-6">
                                <div className="card shadow">
                                    <div className="card-body">
                                        <h6>Order Information</h6>
                                        <hr />
                                        <div className="form-group">
                                            <label className="mb-1">First Name</label>
                                            <input type="text" className="form-control" placeholder="Enter First Name" />
                                        </div>
                                        <div className="form-group">
                                            <label className="mb-1">Last Name</label>
                                            <input type="text" className="form-control" placeholder="Enter Last Name" />
                                        </div>
                                        <div className="form-group">
                                            <label className="mb-1">Address</label>
                                            <input type="text" className="form-control" placeholder="Enter Address" />
                                        </div>
                                        <div className="form-group">
                                            <label className="mb-1">Phone Number</label>
                                            <input type="text" className="form-control" placeholder="Enter Phone Number" />
                                        </div>
                                        <div className="form-group">
                                            <label className="mb-1">Email</label>
                                            <input type="text" className="form-control" placeholder="Enter Email" />
                                        </div>
                                        <div className="form-group">
                                            <label className="mb-1">Payment</label>
                                            <select className="form-control">
                                                <option value="creditCard">Credit Card</option>
                                                <option value="paypal">PayPal</option>
                                                <option value="googlepay">Google Pay</option>
                                                <option value="samsungpay">Samsung Pay</option>
                                            </select>
                                            <br />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label className="mb-1">Delivery Method</label>
                                            <div className="form-check">
                                                <input type="radio" className="form-check-input" name="deliveryMethod" id="standard" />
                                                <label className="form-check-label" htmlFor="standard">
                                                    Standard
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input type="radio" className="form-check-input" name="deliveryMethod" id="express" />
                                                <label className="form-check-label" htmlFor="express">
                                                    Express
                                                </label>
                                            </div>
                                            <div className="form-group py-3">
                                                <button type="button" className="btn btn shadow w-100" style={{ backgroundColor: "#364d1c", color: "#ffffff" }} >Checkout</button>
                                            </div>
                                        </div>
                                        <div className="col-md-11 text-right">
                                            <div className="mb-4">
                                                <FaCcVisa style={{ fontSize: '4em', marginRight: '8px', color: visa }} />
                                                <FaCcPaypal style={{ fontSize: '4em', marginRight: '8px', color: paypal }} />
                                                <FaCcMastercard style={{ fontSize: '4em', marginRight: '8px', color: mastercard }} />
                                                <SiAmericanexpress style={{ fontSize: '4em', marginRight: '8px' }} />
                                                <FaApplePay style={{ fontSize: '4em', marginRight: '8px' }} />
                                                <SiSamsungpay style={{ fontSize: '4em', marginRight: '8px' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
 
export default ShoppingCart;