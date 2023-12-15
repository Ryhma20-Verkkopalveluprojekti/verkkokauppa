//Laura A:n tekemä lisäominaisuus. Uutiskirjeen tilaajien hakeminen & poistaminen tietokannasta 

import React from 'react';
import '../pages/styles/Admin.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function AdminNewsletter() {
    const [subscribers, setSubscribers] = useState([]);
    const [showSubscribers, setShowSubscribers] = useState(false);

    //haetaan uutiskirjeen tilaajat tietokannasta
  
    useEffect(() => {
      axios.get('http://localhost:3001/newsletter')
        .then((resp) => {
          setSubscribers(resp.data);
        })
        .catch((error) => console.log(error.response.data));
    }, []);

      //Uutiskirjeen tilaajan poistaminen tietokannasta

      const handleDeleteSubscriber = (id) => {
        axios.delete(`http://localhost:3001/newsletter/${id}`)
          .then((resp) => {
            console.log(resp.data);
            axios.get('http://localhost:3001/newsletter')
            .then((resp) => {
              setSubscribers(resp.data);
            })
            .catch((error) => console.log(error.response.data));
        })
        .catch((error) => console.log(error.response.data));
    };


    return(

        <div>
        
        {/* Määrittää sivun korkeuden, jotta footer pysyy sivun alalaidassa */}
        <div className="page-content" style={{ minHeight: '100vh' }}>  
        

           
           <div className="col-md-12 text-center" style={{fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '20px', paddingTop: '50px', paddingBottom: '15px' }}>
         
        </div>

        <section className="section">
          <div className="container">
            <div className="card shadow">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <h6>Manage newsletter subscribers: Retrieve and delete subscriber information as needed.</h6>
                    <hr />
                    <div className="form-group py-3">
                      <button type="button" className="btn btn-custom mr-3" onClick={() => setShowSubscribers(!showSubscribers)}>
                        {showSubscribers ? 'Hide subscribers' : 'Show subscribers'}
                      </button>
                    </div>
                    {showSubscribers && (
                      <div>
                        {subscribers.map(subscriber => (
                          <div key={subscriber.id} className="d-flex justify-content-between align-items-center mb-2">
                            <p>Email: {subscriber.email}</p>
                            <button type="button" className="btn btn-sm btn-danger" onClick={() => handleDeleteSubscriber(subscriber.id)}>
                              Delete
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="col-md-6">
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

export default AdminNewsletter;