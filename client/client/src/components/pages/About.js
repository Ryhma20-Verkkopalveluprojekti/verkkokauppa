import React from 'react';
import VMC from './inc/Vmc';
import Banner from '../inc/Banner';
import Logo from '../inc/logo';


import Image4 from '../images/palmuvehka_iso.jpg';
import Image5 from '../images/enkelinsiipi.jpg';

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

                            <div className="col-md-4 text-center">
                                <h1>About us</h1>
                                <p>
                                    Tähän kirjoiteltaan kuvausta yrityksestä iodflknvdlkfnvbksnvlsknvosklnvdowskv kosldlfxnokldklenm kfokefldk lkfdlk

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