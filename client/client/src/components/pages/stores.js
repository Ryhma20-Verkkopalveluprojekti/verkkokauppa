//SIVUN TEKIJÄ: LAURA SAVOLAINEN, OMA TOIMINNALLISSUUS GET/POST
import React, { useEffect, useState } from 'react';
import Banner from '../inc/Banner';
import Logo from '../inc/logo';
import axios from 'axios';
import './styles/stores.css';

// Haetaan myymälät tietokannasta, näytetään ne selaimessa, lisätään oma toive kaupunki input kenttään, joka vie tiedon tietokantaan

function Stores() {
  const [stores, setStores] = useState([]);
  const [dreamCityInput, setDreamCityInput] = useState(''); 
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Haetaan myymälöiden tiedot tietokannasta
    axios.get('http://localhost:3001/stores')
      .then(response => {
        setStores(response.data);
      })
      .catch(error => {
        console.error('Error fetching store data:', error);
      });
  }, []); 
  //Myymälätoive-tiedon käsittely
  function dreamCityHandler() {
    const requestData = {
      dreamCity: dreamCityInput,
    };
    //Viedään toivemyymälän tiedot tietokantaan 
    axios 
      .post('http://localhost:3001/dreamcity', requestData)
      .then((resp) => {
        console.log(resp.data);
        setDreamCityInput('');
        setError('');
        //Lähetetään success -viesti, jos tieto lähetettiin onnistuneesti tietokantaan
        setSuccessMessage('Thank you! We have heard your wishes!');
      })
      //Lähetetään error -viesti, jos tietoa ei saatu lähetettyä
      .catch((error) => {
        console.log("Virhe POST-pyynnön aikana:", error);
        setError('Something went wrong.');
      });
  }
  //stores -sivun sisältö selaimessa
  return (
    <div>
      <div className="page-content" style={{ minHeight: '100vh' }}>
        <Banner /> {/*Banneri */}
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <div className="top-right"> 
                <Logo />{/*Logo */}
              </div>
              <section className="section">
                <div className="container">
                  <div className="row">
                    <h1>PlantHouse retail stores</h1><br/>
                    <h3>You can find our products in a few of our retail stores!</h3><br/>
                    {/*Näytetään myymälät ja niiden tiedot*/}
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
                      //virhe ilmoitus, jos myymälöiden tietoja ei löydy
                      <p>No stores found</p> 
                    )}
                  </div>
                </div>
              </section><br/>
              <div className="col-md-6 mx-auto">
                <h6>We are expanding our business!</h6>
                <hr />
                {/*Input ja button toivemyymälä tiedon lähettämiseen */}
                <div className="form-group">
                  <label className="mb-1">In which city would you like to see our next store opening?</label><br/><br/>
                  <input type="text" className="form-control" placeholder="Enter city name" value={dreamCityInput} onChange={(e) => setDreamCityInput(e.target.value)} />
                  {/*Näytetään error viesti, jos yhteys tietokantaan epäonnistuu*/}
                  {error && <p style={{ color: 'red' }}>{error}</p>}<br/> 
                  {/*Näytetään Success viesti, jos tiedon lähettäminentietokantaan onnistui*/}
                  {successMessage && <p style={{ fontSize:'40px', color: '#364d1c' }}>{successMessage}</p>}
                </div>
                {/*Button painike tiedon lähettämiseen*/}
                <div className="form-group py-3">
                  <button onClick={dreamCityHandler} type="button" className="btn btn-custom mr-3">Send!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stores;
