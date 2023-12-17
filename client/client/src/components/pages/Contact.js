import React from 'react';
import Banner from '../inc/Banner';
import Logo from '../inc/logo';
import '../pages/styles/Contact.css';
import { useState } from 'react';

function Contactus() {

    //tyhjennetään lomakkeen tiedot 

    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showThankYou, setShowThankYou] = useState(false);

    const handleFormSubmit = () => {
        setFullName('');
        setPhoneNumber('');
        setEmail('');
        setMessage('');
        setShowThankYou(true);
    };


    return (

        <div>

            {/* Määrittää sivun korkeuden, jotta footer pysyy sivun alalaidassa */}
            <div className="page-content" style={{ minHeight: '100vh' }}>

                {/* Banneri navbarin alla */}
                <Banner />

                <div className="col-md-12 text-center" style={{ fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '20px', paddingTop: '50px', paddingBottom: '15px' }}>
                    <h3>Can't find what you need? Connect us when needed and we will help you!
                        Give us a call or leave a message here.
                    </h3>
                </div>

                <section className="section">
                    <div className="container">
                        <div className="card shadow">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h6>Contact Form</h6>
                                        <hr />
                                        <div className="form-group">
                                            <label className="mb-1">Full Name</label>
                                            <input type="text" className="form-control" placeholder="Enter Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label className="mb-1">Phone number</label>
                                            <input type="text" className="form-control" placeholder="Enter Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label className="mb-1">Email</label>
                                            <input type="text" className="form-control" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label className="mb-1">Message</label>
                                            <textarea rows="3" className="form-control" placeholder="Type your message..." value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

                                        </div>
                                        <div className="form-group py-3">
                                            <button type="button" className="btn btn shadow w-100" style={{ backgroundColor: "#364d1c", color: "#ffffff" }} onClick={handleFormSubmit}>Send</button>
                                        </div>
                                        <div className='thank-you-message'>
                                        {showThankYou && <p>Thank you for your message! We'll get back to you soon.</p>}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <Logo />

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

export default Contactus;