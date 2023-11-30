import React from "react";
import Image1 from '../images/tekokasvi.jpg';
import Image2 from '../images/palmuvehka_iso.jpg';
import Image3 from '../images/kaktus.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function CarouselImages(){
  return(
    
    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Image1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Image2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Image3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
   );
}

export default CarouselImages;