import React from 'react';
import Banner from '../inc/Banner';
import Logo from '../inc/logo';
import axios from 'axios';
import { useState } from 'react';
import NewsletterImage from '../inc/newsletter';


function Newsletter(){

    const [categoryName, setCategoryName] = useState('');   
    const [categoryDescription, setCategoryDescription] = useState('');

    function sendCategories() {
        const data = [
          {
            categoryName: categoryName,
            description: categoryDescription,
          },
        ];
       
        axios
          .post('http://localhost:3001/categories', data)
          .then((resp) => {
          console.log(resp.data)
          //tyhjennetään kentät
          setCategoryName('');
          setCategoryDescription('');
          })
          .catch((error) => console.log(error.response.data));
      }

    return(

        <div>
        
        {/* Määrittää sivun korkeuden, jotta footer pysyy sivun alalaidassa */}
        <div className="page-content" style={{ minHeight: '100vh' }}>  
        
            {/* Banneri navbarin alla */}
            <Banner />
           
          

           <div className="col-md-12 text-center" style={{fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '20px', paddingTop: '50px', paddingBottom: '15px' }}>
           </div>
            
            <section className="section">
            <div className="container">
            <div className="card shadow">
            <div className="card-body">
                <div className="row">
                 
                    <div className="col-md-7">
                    <NewsletterImage  />
                    </div>
                    <div className="col-md-5">
                        <div className="form-group">
                            <label className="mb-1">Enter your email to join our newsletter</label>
                            <input type="text" className="form-control" placeholder="Enter email" value={categoryDescription} onChange={(e) => setCategoryDescription(e.target.value)} /> 
                        </div>
                    
                        <div className="form-group py-3">
                        <button onClick={sendCategories} type="button" className="btn btn-custom mr-3">Subscribe</button>
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