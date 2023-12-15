//Laura Ahosen tekemä lisäominaisuus, uutiskirjeen tilaaminen

import React from 'react';
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
        <div className="page-content">
            <div className="col-md-12 text-center" style={{ fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '20px', paddingTop: '50px', paddingBottom: '15px' }}></div>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center mb-3 position-relative">
                            <NewsletterImage />
                            <div className="position-absolute" style={{ bottom: '20%', left: '55%', transform: 'translateX(-50%)' }}>
                                <div className="form-group d-flex align-items-center justify-content-center">
                                    <input type="text" className="form-control" placeholder="Enter email" style={{ width: '300px' }} value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
                                    <button onClick={addEmail} type="button" className="btn btn shadow mx-2" style={{ backgroundColor: "#364d1c", color: "#ffffff" }}>Subscribe</button>
                                </div>
                            </div>
                            {message && <p style={{ position: 'absolute', top: '85%', left: '50%', transform: 'translateX(-50%)' }}>{message}</p>}
                            {error && <p style={{ color: 'red', position: 'absolute', top: '85%', left: '50%', transform: 'translateX(-50%)' }}>{error}</p>}
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default Newsletter;