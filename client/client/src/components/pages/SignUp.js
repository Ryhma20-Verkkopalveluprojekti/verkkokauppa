//LAURA S. TEKEMÄ SIVU, LAURA A LISÄNNYT UUTISKIRJEEN TILAUKSEN TÄHÄN

import React, { useState } from 'react';
import Banner from '../inc/Banner';
import Logo from '../inc/logo';
import '../pages/styles/SignUp.css';
import axios from 'axios';
import SubscribeNewsletter from './SubscribeNewsletter';


function SignUp(){
      
    return(
        <div>
        
        {/* Määrittää sivun korkeuden, jotta footer pysyy sivun alalaidassa */}
        <div className="page-content" style={{ minHeight: '100vh' }}>  
        
            {/* Banneri navbarin alla */}
            <Banner />
           {/*Rekisteröinti lomake */}
           <div className="col-md-12 text-center" style={{fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '20px', paddingTop: '50px', paddingBottom: '15px' }}>
            
           </div>
            
            <section className="section">
            <div className="container">
            <div className="card shadow">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-5">
                        <h1>Join our PlantHouse club!<br/></h1>
                        <h6>You'll receive fantastic benefits, and the shopping experience is made easier. </h6>
                        <hr />
                        <div className="form-group">
                            <label className="fname">First Name</label>
                            <input type="text" className="form-control" placeholder="" /> 
                        </div>
                        <div className="form-group">
                            <label className="lname">Last Name</label>
                            <input type="text" className="form-control" placeholder="" /> 
                        </div>
                        <div className="form-group">
                            <label className="email">Email</label>
                            <input type="text" className="form-control" placeholder="" /> 
                        </div>
                        <div className="form-group">
                            <label className="uname">Username</label>
                            <input type="text" className="form-control" placeholder="" /> 
                        </div>
                        <div className="form-group">
                            <label className="pw">Password</label>
                            <input type="text" className="form-control" placeholder="" /> 
                        </div>
                        <br/>
                        <div>
                          <h6> By signing up, you agree to the terms. Please read our privacy policy, which details the collection, use, and sharing of data.</h6>   
                        </div>
                        <div className="form-group py-3">
                            <button type="button" className="btn btn shadow w-100" style={{ backgroundColor: "#364d1c", color: "#ffffff" }} >Sign up</button>
                        </div>
                    </div>
                    {/*Uutiskirjeen tilaus ja logo */}
                    <div className="col-md-6" style={{ marginTop: '-70px' }}>
                        <SubscribeNewsletter />
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
};

export default SignUp;