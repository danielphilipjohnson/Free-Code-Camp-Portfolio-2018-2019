import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import ig0 from "../../../img/instagram/ig0.jpg";
import ig1 from "../../../img/instagram/ig1.jpg";
import ig2 from "../../../img/instagram/ig2.jpg";
import ig3 from "../../../img/instagram/ig3.jpg";

export default function Footer() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <h5> El Pirata Porch</h5>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>

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
        <div className="col-lg-3">
          <h5>Open Hours</h5>
          <ul>
            <li>Monday9:00 - 24:00</li>
            <li>Tuesday9:00 - 24:00</li>
            <li>Wednesday9:00 - 24:00</li>
            <li>Thursday9:00 - 24:00</li>
            <li>Friday9:00 - 02:00</li>
            <li>Saturday9:00 - 02:00</li>
            <li>Sunday 9:00 - 02:00</li>
          </ul>
        </div>

        <div className="col-lg-3">
          <h5>Instagram</h5>
          <div className="d-sm-flex">
            <img src={ig0} alt="" srcset="" />
            <img src={ig1} alt="" srcset="" />
            <img src={ig2} alt="" srcset="" />
            <img src={ig3} alt="" srcset="" />
            <img src={ig0} alt="" srcset="" />
            <img src={ig1} alt="" srcset="" />
          </div>
        </div>

        <div className="col-lg-3">
          <h5>Newsletter</h5>
          <p>
            Far far away, behind the word mountains, far from the countries.
          </p>

          <div className="btn-group-vertical">
            <a href="#" className="btn btn-secondary">
              Enter email address
            </a>
            <a href="#" className="btn btn-primary">
              Subscribe
            </a>
          </div>
        </div>
      </div>

      <footer class="container text-center">
        <p>Copyright ©2020 All rights reserved. Made by Daniel Philip Johnson</p>
      </footer>
    </div>
  );
}
