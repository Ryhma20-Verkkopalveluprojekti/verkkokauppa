
import React, { useEffect, useState } from 'react';
import Banner from '../inc/Banner';
import Logo from '../inc/logo';
import axios from 'axios';
import './styles/stores.css';

function Stores() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    // Haetaan myymälöiden tiedot tietokannasta
    axios.get('http://localhost:3001/stores')
      .then(response => {
        setStores(response.data);
      })
      .catch(error => {
        console.error('Error fetching store data:', error);
      });
  }, []); // Tyhjä taulukko varmistaa, että useEffect suoritetaan vain kerran komponentin latautuessa

  return (
    <div>
      {/* Määrittää sivun korkeuden, jotta footer pysyy sivun alalaidassa */}
      <div className="page-content" style={{ minHeight: '100vh' }}>
        {/* Navbarin alla oleva banneri */}
        <Banner />

        <div className="container">
          <div className="row">
            <div className="col-md-10">
            <div className="top-right"> 
            <Logo />
          </div>
              <section className="section">
                <div className="container">
                  <div className="row">
                    <h1>PlantHouse retail stores</h1><br/>
                    <h3>You can find our products in a few of our retail stores!</h3><br/>
                    {/* Tarkistetaan, onko stores-taulukko tyhjä ennen kuin käytämme sitä */}
                    {stores.length > 0 ? (
                      stores.map(store => (
                        <div key={store.id} className="col-md-4 mb-4">
                          <div className="card shadow">
                            <div className="card-body">
                              <h6>{store.city}</h6>
                              <p>Address: <br/>
                                {store.address}</p>
                              <p>Zip code: <br/>
                                {store.zip_code}</p>
                              <p>Phone: <br/>
                                {store.phone}</p>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>No stores found</p>
                    )}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stores;