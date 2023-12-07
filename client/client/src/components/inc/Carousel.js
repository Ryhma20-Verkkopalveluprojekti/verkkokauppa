import React from "react";
import Image1 from '../images/kasviasetelmaUUSI.jpg';
import Image2 from '../images/kasviasetelma2UUSI.jpg';
import Image3 from '../images/kultakoynnoskuvaUUSI.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../pages/styles/Carousel.css';

function CarouselImages() {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Image1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Image2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Image3} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default CarouselImages;