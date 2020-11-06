import React from "react";

import card0 from "../../img/card0.jpg";

export default function FoodMenu() {
  return (
    <div className="container">
      <div className="cta ">
        <h3 class="display-3 text-center">Services</h3>
        <h3 class="display-4 text-center">Our Menu</h3>
        <div className="row">
          <div class="card-menu flex-row">
            <img class="card-img-top" src={card0} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title font-weight-bold">
                Grilled Beef with potatoes <span className="color-bg">$29</span>
              </h5>
              <p class="card-text">Meat, Potatoes, Rice, Tomatoe</p>
              <a href="#" class="btn btn-primary">
                Order now
              </a>
            </div>
          </div>

          <div class="card-menu flex-row">
            <img class="card-img-top" src={card0} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">
                Grilled Beef with potatoes <span className="color-bg">$29</span>
              </h5>
              <p class="card-text">Meat, Potatoes, Rice, Tomatoe</p>
              <a href="#" class="btn btn-primary">
                Order now
              </a>
            </div>
          </div>




          <div class="card-menu flex-row-reverse">
            <img class="card-img-top" src={card0} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title font-weight-bold">
                Grilled Beef with potatoes <span className="color-bg">$29</span>
              </h5>
              <p class="card-text">Meat, Potatoes, Rice, Tomatoe</p>
              <a href="#" class="btn btn-primary">
                Order now
              </a>
            </div>
          </div>


          <div class="card-menu flex-row-reverse">
            <img class="card-img-top" src={card0} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title font-weight-bold">
                Grilled Beef with potatoes <span className="color-bg">$29</span>
              </h5>
              <p class="card-text">Meat, Potatoes, Rice, Tomatoe</p>
              <a href="#" class="btn btn-primary">
                Order now
              </a>
            </div>
          </div>



          <div class="card-menu flex-row">
            <img class="card-img-top" src={card0} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title font-weight-bold">
                Grilled Beef with potatoes <span className="color-bg">$29</span>
              </h5>
              <p class="card-text">Meat, Potatoes, Rice, Tomatoe</p>
              <a href="#" class="btn btn-primary">
                Order now
              </a>
            </div>
          </div>


          <div class="card-menu flex-row">
            <img class="card-img-top" src={card0} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title font-weight-bold">
                Grilled Beef with potatoes <span className="color-bg">$29</span>
              </h5>
              <p class="card-text">Meat, Potatoes, Rice, Tomatoe</p>
              <a href="#" class="btn btn-primary">
                Order now
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
