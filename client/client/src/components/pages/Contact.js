import React from 'react';
import Banner from '../inc/Banner';
import Logo from '../inc/logo';

function Contactus(){
    return(

        <div>
        
        {/* Määrittää sivun korkeuden, jotta footer pysyy sivun alalaidassa */}
        <div className="page-content" style={{ minHeight: '100vh' }}>  
            {/* Banneri navbarin alla */}
            <Banner />
           
   
            
            <section className="section">
            <div className="container">
            <div className="card shadow">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6">
                        <h6>Contact Form</h6>
                        <hr />
                        <div className="form-group">
                            <label className="mb-1">Full Name</label>
                            <input type="text" className="form-control" placeholder="Enter Full Name" /> 
                        </div>
                        <div className="form-group">
                            <label className="mb-1">Phone number</label>
                            <input type="text" className="form-control" placeholder="Enter Phone Number" /> 
                        </div>
                        <div className="form-group">
                            <label className="mb-1">Email</label>
                            <input type="text" className="form-control" placeholder="Enter Email" /> 
                        </div>
                        <div className="form-group">
                            <label className="mb-1">Message</label>
                            <textarea rows="3" className="form-control" placeholder="Type your message" ></textarea>
                        </div>
                        <div className="form-group py-3">
                            <button type="button" className="btn btn shadow w-100" style={{ backgroundColor: "#364d1c", color: "#ffffff" }} >Send</button>
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

export default Contactus;