import React from 'react';
import VMC from './inc/Vmc';
import Banner from '../inc/Banner';
import Logo from '../inc/logo';


import Image4 from '../images/kultakoynnoskuva.jpg';
import Image5 from '../images/kasviasetelma2.jpg';

function Aboutus(){
    return(
        
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
                                <img src={Image4} class="d-block w-100" alt="..."></img>
                                </p>
                            </div>
                            {/* Fonttikoko ei suurene??*/}
                            <div className="col-md-4 text-center"style={{ backgroundColor: "#c7f5cc", fontSize: "60 px" }}>
                                <h1>About us </h1>
                               
                                <p>
                                We are happy that you found your way to our website! 
                                We are small business from Finland and different kind of houseplants are our passion.
                                There are three of us working on this business and in the future we hope that
                                there is a chance to hire more staff to our awesome team!

                                </p>
                            </div>

                            <div className="col-md-4 text-center">
                                <p>
                                   <img src={Image5} class="d-block w-100" alt="..."></img>
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