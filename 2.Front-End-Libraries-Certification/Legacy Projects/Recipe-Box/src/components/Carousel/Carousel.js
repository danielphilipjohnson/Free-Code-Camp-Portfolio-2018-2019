import React from "react";
import Dishes from "../../components/Home/Dishes";

import carousel0 from "../../img/carousel/carousel0.jpg";
import carousel1 from "../../img/carousel/carousel1.jpg";
import carousel2 from "../../img/carousel/carousel2.jpg";

export default function Carousel() {
  return (
    <div
      id="restaurantCarousel"
      className="carousel slide"
      data-ride="carousel"
    >
      {/* <ol className="carousel-indicators">
        <li
          data-target="#restaurantCarousel"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#restaurantCarousel" data-slide-to="1"></li>
        <li data-target="#restaurantCarousel" data-slide-to="2"></li>
      </ol> */}

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={carousel0} alt="First slide" />
          <header className="carousel-caption d-none d-md-flex flex-column justify-content-center align-items-center">
            <h4 className="subheading text-primary">El Pirata Porch</h4>
            <h2 className="heading">Nutritious & Tasty</h2>
          </header>
        </div>

        <div className="carousel-item">
          <img className="d-block w-100" src={carousel1} alt="Second slide" />
          <div className="carousel-caption d-none d-md-flex flex-column justify-content-center align-items-center">
            <h4 className="subheading text-primary">El Pirata Porch</h4>
            <h5 className="heading">Delicous Specialities</h5>
          </div>
        </div>

        <div className="carousel-item">
          <img className="d-block w-100" src={carousel2} alt="Third slide" />
          <div className="carousel-caption d-none d-md-flex flex-column justify-content-center align-items-center">
            <h4 className="subheading text-primary">El Pirata Porch</h4>
            <h5 className="heading">Best Restaurants</h5>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#restaurantCarousel"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#restaurantCarousel"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}
