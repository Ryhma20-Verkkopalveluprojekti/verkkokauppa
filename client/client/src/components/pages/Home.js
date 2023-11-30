import React from 'react';
import Banner from '../inc/Banner';
import Logo from '../inc/logo';
import {Link} from 'react-router-dom';
import VMC from './inc/Vmc';
import Service1 from '../images/snakeplant.jpg'
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti maxime laboriosam vitae aliquam assumenda? Laborum laudantium, deleniti cupiditate odio aliquid omnis perspiciatis ipsa repudiandae mollitia ducimus eaque architecto, quia quos
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