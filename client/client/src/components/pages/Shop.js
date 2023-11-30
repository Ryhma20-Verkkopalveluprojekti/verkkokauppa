import React from 'react';
import Banner from '../inc/Banner';
import { Link } from 'react-router-dom';
import VMC from './inc/Vmc';
import Service1 from '../images/snakeplant.jpg'
import '../pages/styles/Shop.css';

function Shop() {
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
                                    <button type="button" className="btn btn-custom mr-3">
                                        Small plants
                                    </button>

                                    <button type="button" className="btn btn-custom mr-3">
                                        Mid-size plants
                                    </button>

                                    <button type="button" className="btn btn-custom mr-3">
                                        Big plants
                                    </button>

                                    <button type="button" className="btn btn-custom">
                                        Artificial plants
                                    </button>
                                </div>

                                {/* Tuotekuvat ja tiedot */}

                            </div>
                            <div className="col-md-4">
                                <div className="card shadow">
                                    <img src={Service1} className="w-100 border-bottom" alt="Services" />
                                    <div className="card-body">
                                        <h6>Rehu 1</h6>
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
                                    <img src={Service1} className="w-100 border-bottom" alt="Services" />
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

                            <div className="col-md-4">
                                <div className="card shadow">
                                    <img src={Service1} className="w-100 border-bottom" alt="Services" />
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