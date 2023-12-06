import React, { useEffect } from 'react';
import Banner from '../inc/Banner';
import { Link } from 'react-router-dom';
import VMC from './inc/Vmc';
import plantimg from '../images/fittonia_small.jpg'
import '../pages/styles/Shop.css';
import axios from "axios";
import { useState } from 'react';


function Shop() {

        const [products, setProducts] = useState([]);
        const [category, setCategory] = useState('Small plants');


        useEffect(()=>{

            const params = {
                category: category
            }

            axios.get('http://localhost:3001/products', {params: params})
            .then(resp => setProducts(resp.data))
            .catch( error => console.log(error.message) );        
        }, [category]);
          

    return (

        <div>
            {/* Määrittää sivun korkeuden, jotta footer pysyy sivun alalaidassa */}
            <div className="page-content" style={{ minHeight: '100vh' }}>
                {/* Banneri navbarin alla */}
                <Banner />


                <section className="section bg-c-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-4 text-center">

                                {/* Kategoria-buttonit */}
                                <div id="buttons" className="d-flex">
                                    <button onClick={()=> setCategory('Small plants')} type="button" className="btn btn-custom mr-3">
                                        Small plants
                                    </button> 
                                   

                                    <button onClick={()=> setCategory('Mid-size plants')} type="button" className="btn btn-custom mr-3">
                                        Mid-size plants
                                    </button>

                                    <button onClick={()=> setCategory('Big plants')} type="button" className="btn btn-custom mr-3">
                                        Big plants
                                    </button>

                                    <button onClick={()=> setCategory('Artificial plants')} type="button" className="btn btn-custom mr-3">
                                        Artificial plants
                                    </button>
                                    
                                   {/* <ul>
                                        { products.map( p => <li key={p.id}>{p.productName}</li> ) }
                                        </ul> */}

                                </div>

                                {/* Tuotekuvat ja tiedot */}

                            </div>
                            <div className="col-md-4">
                                <div className="card shadow">
                                    <img src={plantimg} className="w-100 border-bottom" alt="Services" />
                                    <div className="card-body">
                                        <h6>{ products.slice(0, 1).map(p => <li key={p.id}>{p.productName}</li> ) }</h6>
                                        <div className="underline"></div>
                                        <p>
                                            tekstiä
                                        </p>
                                        <Link to="/shop" className="btn btn-link">Shop</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card shadow">
                                    <img src={plantimg} className="w-100 border-bottom" alt="Services" />
                                    <div className="card-body">
                                        <h6>{ products.slice(1, 2).map(p => <li key={p.id}>{p.productName}</li> ) }</h6>
                                        <div className="underline"></div>
                                        <p>
                                            tekstiä
                                        </p>
                                        <Link to="/shop" className="btn btn-link">Shop</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card shadow">
                                    <img src={plantimg} className="w-100 border-bottom" alt="Services" />
                                    <div className="card-body">
                                        <h6>Rehu 2</h6>
                                        <div className="underline"></div>
                                        <p>
                                            tekstiä
                                        </p>
                                        <Link to="/shop" className="btn btn-link">Shop</Link>
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

export default Shop;