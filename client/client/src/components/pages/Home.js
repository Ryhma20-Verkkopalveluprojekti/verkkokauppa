import React from 'react';
import Banner from '../inc/Banner';
import Logo from '../inc/logo';
import {Link} from 'react-router-dom';
import VMC from './inc/Vmc';
import '../pages/styles/Home.css';
import Carousel from '../inc/Carousel';

function Home(){
    return(
        <div>
             {/* Määrittää sivun korkeuden, jotta footer pysyy sivun alalaidassa */}
             <div className="page-content" style={{ minHeight: '100vh' }}>

             {/* Navbarin alla oleva banneri */}
            <Banner />

            {/* Logo bannerin alapuolella */}
            

            <div class="row"> 
            <div class="col-md-4"> 
            <Logo />
            </div>
            <div class="col-md-7"> 
            <Carousel /> 
            </div>
            
            </div>
            
         

            {/* Tekstit logon alapuolella */}

            <section className="section">
                <div className="container">
                <div className="row">
                <div className="col-md-12 text-center">
                <p>
                We want to welcome you to our website.<br /> At this site you can find more information about us and 
                you can buy plants online.<br /> If something is unclear we are happy to answer you questions via contact form 
                you find at the top of this site. <br />
                We hope you enjoy this website!
                </p>
                <Link to="/shop"  className="btn btn shadow" style={{ backgroundColor: "#364d1c", color: "#ffffff" }}> Shop now</Link>
                </div>
                </div>
                </div>
            </section>
            
        
        </div>
        </div>
        
    )

}

export default Home;