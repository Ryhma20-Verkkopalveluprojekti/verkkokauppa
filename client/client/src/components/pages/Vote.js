// NIINAN TEKEMÄ SIVU


import React, { useEffect } from 'react';
import Banner from '../inc/Banner';
import '../pages/styles/Shop.css';
import axios from "axios";
import { useState } from 'react';


function Vote() {

    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('');
    const [favoriteName, setFavoriteName] = useState('');
    const [thanksMessage, setThanksMessage] = useState('');


    //Tuotteiden näyttäminen/hakeminen tietokannasta
    
    useEffect(() => {
        const params = {
            category: category
        };

        axios.get('http://localhost:3001/products', { params: params })
            .then(resp => setProducts(resp.data))
            .catch(error => console.log(error.message));
    }, [category]);


    function voteFavorite() {
        const data =
        {
            favorites: favoriteName,
        };

        //tuotteiden lisääminen tietokantaan
        axios
            .post('http://localhost:3001/favorites', data)
            .then((resp) => {
                console.log(resp.data);

                //tyhjennetään kenttä
                setFavoriteName('');
                //Lähetetään kiitos -viesti, jos tieton siirtäminen tietokantaan onnistuu
                setThanksMessage('Thank you for voting!');
                //kiitos -viesti näkyvillä kolmen sekunnin ajan
                setTimeout(() => {
                    setThanksMessage('');
                }, 3000);
            })
            .catch((error) => { 
                //virhe viesti
                console.log("Virhe POST-pyynnön aikana:", error);
            });

    }

    return (
        <div>
            <div className="page-content" style={{ minHeight: '100vh' }}>
                <Banner />

                <section className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-4 text-center">
                                <h3>Voting page!</h3>
                                <p>Here you can see all plants we have in stock at the moment. At the bottom of the page you can vote which one is your favorite!</p>
                            </div>
                            {/* Haetaan tietokannasta tuotteen nimi ja kuva */}
                            {products.map(p => (
                                <div key={p.id} className="col-md-4">
                                    <div className="card shadow">
                                        <img src={'http://localhost:3001/' + p.imageUrl} alt={p.productName} className="product-image" />
                                        <div className="card-body">
                                            <h6>{p.productName}</h6>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Äänestyksen input-kenttä, button ja kiitos viesti*/}

                <br></br>

                <div className="col-md-6 mx-auto text-center">
                    <h6>Vote here!</h6>
                    <hr />
                    <div className="form-group">
                        <label className="mb-1">Write the name of your favorite plant here.</label>
                        <input type="text" className="form-control" placeholder="Enter plant name" value={favoriteName} onChange={(e) => setFavoriteName(e.target.value)} />
                    </div>

                    <div className="form-group py-3">
                        <button onClick={voteFavorite} type="button" className="btn btn-custom mr-3">Vote!</button>
                    </div>
                    {thanksMessage && (
                        <div className="alert alert-success mt-3">
                            {thanksMessage}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}

export default Vote