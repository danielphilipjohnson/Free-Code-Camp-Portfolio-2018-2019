import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBirthdayCake,
  faHandshake,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

export default function Cta() {
  const birthdayCakeIcon = <FontAwesomeIcon icon={faBirthdayCake} />;
  const handshakeCakeIcon = <FontAwesomeIcon icon={faHandshake} />;
  const utensilsIcon = <FontAwesomeIcon icon={faUtensils} />;

  return (
    <div class="cta text-center">
      <h3 class="display-3">Services</h3>
      <h3 class="display-4">Catering Services</h3>

      <div className="services">

        <div className="service">
          {birthdayCakeIcon}
          <h5>Birthday Party</h5>
          <p>
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic.
          </p>
        </div>
        <div className="service">
          {handshakeCakeIcon}
          <h5>Business Meetings</h5>
          <p>
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic.
          </p>
        </div>

        <div className="service">
          {utensilsIcon}
          <h5>Wedding Party</h5>
          <p>
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic.
          </p>
        </div>
      </div>
    </div>
  );
}
