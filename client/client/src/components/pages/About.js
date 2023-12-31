import React from 'react';
import Banner from '../inc/Banner';
import Logo from '../inc/logo';
import '../pages/styles/About.css';
import Image4 from '../images/kultakoynnoskuvaUUSI.jpg';
import Image5 from '../images/kasviasetelma2UUSI.jpg';
import { Link } from 'react-router-dom';

function Aboutus() {
    return (

        <div>

            {/* Määrittää sivun korkeuden, jotta footer pysyy sivun alalaidassa */}
            <div className="page-content" style={{ minHeight: '100vh' }}>

                {/* Banneri navbarin alla */}
                <Banner />

                <section className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 text-center">
                                <p>
                                    <img src={Image4} className="d-block w-100" alt="..."></img>
                                </p>
                            </div>
                            <div className="col-md-4 text-center" style={{ backgroundColor: "#c7f5cc", fontSize: "60 px" }}>
                            <br />
                                <h1>About us </h1>
                               
                                <p className="custom">
                                    We are happy that you found your way to our website!
                                    We started as a small business from Finland and different kind of houseplants are our passion.
                                    There originally was three of us working on this business. Time paassed and our company grew.
                                    Now we are happy that we can offer jobs and expand our business. We have a lovely staff our love for houseplants is even bigger nowadays.

                                </p><br />

                                <Link to="/stores" className="btn btn shadow" style={{ backgroundColor: "#364d1c", color: "#ffffff" }}> Chekout our retail stores </Link>
                                <br />
                            </div>

                            <div className="col-md-4 text-center">
                                <p>
                                    <img src={Image5} className="d-block w-100" alt="..."></img>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <Logo />

            </div>
        </div>
    );

}

export default Aboutus;