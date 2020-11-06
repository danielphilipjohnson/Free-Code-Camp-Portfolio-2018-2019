import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="container-fluid">
      <div className="row bg-primary">
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
      </div>
    </div>
  );
}
