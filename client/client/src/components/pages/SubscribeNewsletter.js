//Laura Ahosen tekemä lisäominaisuus:

import React from 'react';
import Banner from '../inc/Banner';
import axios from 'axios';
import { useState } from 'react';
import NewsletterImage from '../inc/newsletter';


function Newsletter() {

    const [emailAddress, setEmailAddress] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');


    function addEmail() {

        // antaa virheilmoituksen jos input-kenttä on tyhjä

        if (!emailAddress.trim()) {
            setError('Please enter your email address.');
            setMessage('');
            return;
        }

        const data =
        {
            email: emailAddress,
        }

        //viedään käyttäjän input-kenttään syöttämä sähköposti tietokantaan

        axios
            .post('http://localhost:3001/newsletter', data)
            .then((resp) => {
                console.log(resp.data)
                //tyhjennetään kentät
                setEmailAddress('');
                setMessage('Thank you for subscribing!')
                setError('');
            })
            .catch((error) => console.log(error.response.data));
            setError('Something went wrong. Try again later!');
            setMessage('')
    }

    return (

        <div>

            {/* Määrittää sivun korkeuden, jotta footer pysyy sivun alalaidassa */}
            <div className="page-content" style={{ minHeight: '100vh' }}>

                {/* Banneri navbarin alla */}
                <Banner />



                <div className="col-md-12 text-center" style={{ fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '20px', paddingTop: '50px', paddingBottom: '15px' }}>
                </div>

                <section className="section">
                    <div className="container">
                        <div className="card shadow">
                            <div className="card-body">
                                <div className="row">

                                    <div className="col-md-7">
                                        <NewsletterImage />
                                    </div>
                                    <div className="col-md-5">
                                        <div className="form-group">
                                            <label className="mb-1">Enter your email to join our newsletter</label>
                                            <input type="text" className="form-control" placeholder="Enter email" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
                                            {message && <p>{message}</p>}
                                            {error && <p style={{ color: 'red' }}>{error}</p>}<br />
                                        </div>
                                        <div className="form-group py-3">
                                            <button onClick={addEmail} type="button" className="btn btn-custom mr-3">Subscribe</button>
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

export default Newsletter;
