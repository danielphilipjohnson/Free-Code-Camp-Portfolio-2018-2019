import React from "react";

import carousel0 from "../../img/carousel/carousel0.jpg";
import carousel1 from "../../img/carousel/carousel1.jpg";
import carousel2 from "../../img/carousel/carousel2.jpg";


export default function Carousel() {
  return (
    <div
      id="restaurantCarousel"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#restaurantCarousel"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#restaurantCarousel" data-slide-to="1"></li>
        <li data-target="#restaurantCarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            src={carousel0}
            alt="First slide"
          />
          <header class="carousel-caption d-none d-md-block">
            <h4>El Pirata Porch</h4>
            <h2>Nutritious and Tasty</h2>
          </header>
        </div>

{/* 
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src={carousel1}
            alt="Second slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <p>El Pirata Porch</p>
            <h5>Delicous Specialities</h5>

           
          </div>
        </div>


        <div class="carousel-item">
          <img
            class="d-block w-100"
            src={carousel2}
            alt="Third slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <p>El Pirata Porch</p>
            <h5>Best Restaurants</h5>
          </div>
        </div> */}



      </div>
      <a
        class="carousel-control-prev"
        href="#restaurantCarousel"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#restaurantCarousel"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}
