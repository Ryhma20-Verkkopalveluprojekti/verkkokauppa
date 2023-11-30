import React from 'react';
import VMC from './inc/Vmc';
import Banner from '../inc/Banner';


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
                <div className="col-md-12 text-center">
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti maxime laboriosam vitae aliquam assumenda? Laborum laudantium, deleniti cupiditate odio aliquid omnis perspiciatis ipsa repudiandae mollitia ducimus eaque architecto, quia quos
                </p>
                </div>
                </div>
                </div>
            </section>

         

        </div>
        </div>
    );

}

export default Aboutus;