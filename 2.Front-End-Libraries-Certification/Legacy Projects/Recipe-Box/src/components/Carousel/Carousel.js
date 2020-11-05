import React from "react";

export default function Carousel() {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            src="https://source.unsplash.com/1600x900/?food"
            alt="First slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <p>El Pirata Porch</p>
            <h5>Nutritious and Tasty</h5>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="https://source.unsplash.com/1600x900/?food"
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
            src="https://source.unsplash.com/1600x900/?food"
            alt="Third slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <p>El Pirata Porch</p>
            <h5>Best Restaurants</h5>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}