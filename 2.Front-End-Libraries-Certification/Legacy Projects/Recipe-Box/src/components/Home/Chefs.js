import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import chef0 from "../../img/chef/chef0.jpg";
import chef1 from "../../img/chef/chef1.jpg";
import chef2 from "../../img/chef/chef2.jpg";
import chef3 from "../../img/chef/chef3.jpg";

export default function Chefs() {
  const chefItems = [
    {
      src: chef0,
      name: "John Smooth",
      position: "Restaurant Owner",
    },
    {
      src: chef1,
      name: "Rebeca Welson",
      position: "Head Chef",
    },
    {
      src: chef2,
      name: "Kharl Branyt",
      position: "Chef",
    },
    {
      src: chef3,
      name: "Luke Simon",
      position: "Chef",
    },
  ];

  const chefItem = chefItems.map((chef) => {
    return (
      <div class="card col-md-6">
        <img class="card-img-top" src={chef.src} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{chef.name}</h5>
          <p class="card-text">{chef.position}</p>
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link active" href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  });
  return (
    <div className="cta">
      <h3 class="display-3 text-center">Chef</h3>
      <h3 class="display-4 text-center">Our Master Chef</h3>

      <div className="row">
        {chefItem}
      </div>
    </div>
  );
}
