import React from 'react';
import {Link} from 'react-router-dom';

function Footer(){
    return(
        
        <section className="section footer" style={{backgroundColor: '#364d1c'}}>
        <div className="container">
          <div className="row" style={{color:'#ffffff'}}>
            <div className="col-md-4 mx-auto">
              <h6>Company information</h6>
              <hr />
              <p className="text-white">
                Address Kasvikatu 1 23405 Kukkakylä
              </p>
            </div>
          </div>
        </div>
      </section>

    );

}

export default Footer;