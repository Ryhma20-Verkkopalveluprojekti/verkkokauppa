import React from 'react';
import Banner from '../inc/Banner';
import Logo from '../inc/logo';
import '../pages/styles/Vote.css';
import axios from 'axios';
import { useState } from 'react';

function Vote(){

    const [categoryName, setCategoryName] = useState('');   
    const [categoryDescription, setCategoryDescription] = useState('');

    function sendCategories() {
        
      }

    return(

        <div>
        
        {/* Määrittää sivun korkeuden, jotta footer pysyy sivun alalaidassa */}
        <div className="page-content" style={{ minHeight: '100vh' }}>  
        
            {/* Banneri navbarin alla */}
            <Banner />
           
           <div className="col-md-12 text-center" style={{fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '20px', paddingTop: '50px', paddingBottom: '15px' }}>
            
            <h3> ÄÄNESTYSSSS</h3>
           </div>
            
            <section className="section">
            <div className="container">
            <div className="card shadow">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6">
                        <h6>Add category</h6>
                        <hr />
                        <div className="form-group">
                            <label className="mb-1">Category name</label>
                            <input type="text" className="form-control" placeholder="Enter category name" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} /> 
                        </div>
                        <div className="form-group">
                            <label className="mb-1">Category description</label>
                            <input type="text" className="form-control" placeholder="Enter category description" value={categoryDescription} onChange={(e) => setCategoryDescription(e.target.value)} /> 
                        </div>
                    
                        <div className="form-group py-3">
                        <button onClick={sendCategories} type="button" className="btn btn-custom mr-3">Add</button>
                        </div>
                    </div>
                    <div className="col-md-6">
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

}

export default Vote;