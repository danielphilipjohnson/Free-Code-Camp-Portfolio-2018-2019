import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPhone, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
  const paperPlaneIcon = <FontAwesomeIcon icon={faPaperPlane} />;

  return (
    <div>
      <ul className="nav d-flex justify-content-center">
        <li className="nav-item">
          <a className="nav-link" href="#">
            {phoneIcon}

            <span>+ 1235 2355 98</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            {paperPlaneIcon}

            <span>youremail@email.com</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Open hours: Monday - Sunday 8:00AM - 9:00PM
          </a>
        </li>
      </ul>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          El Pirata Porch
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Menu
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Stories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>

          <form className="form-inline my-2 my-lg-0">
            <button className="btn btn-success my-2 my-sm-0" type="submit">
              Book a table
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
