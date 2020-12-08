import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPhone, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
  const paperPlaneIcon = <FontAwesomeIcon icon={faPaperPlane} />;

  return (
    <Fragment>
      <div className="d-none d-lg-flex nav-top nav-t ">
        <div className="container">
          <ul className="row d-flex justify-content-center text-secondary mb-0 p-0">
            <li className="d-flex justify-content-center col-lg-4 p-2">
              <span className="text-secondary mr-2">{phoneIcon}</span>
              <span>+ 1235 2355 98</span>
            </li>
            <li className="d-flex justify-content-center col-lg-4 p-2">
              <span className="text-secondary mr-2">{paperPlaneIcon}</span>
              <span>youremail@email.com</span>
            </li>
            <li className="d-flex justify-content-center col-lg-4 p-2">
              <span className="text-secondary mr-2">
                Open hours: Monday - Sunday 8:00AM - 9:00PM
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav-bottom bg-transparent">
        <div className="container">
          <nav className="fixed-top navbar-expand-md navbar-dark d-flex align-items-center flex-wrap justify-content-between">
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

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item pr-3 active">
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item pr-3">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item pr-3">
                  <a className="nav-link" href="#">
                    Menu
                  </a>
                </li>

                <li className="nav-item pr-3">
                  <a className="nav-link" href="#">
                    Stories
                  </a>
                </li>
                <li className="nav-item pr-3">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>

              <form className="form-inline my-2 my-lg-0">
                <button className="btn btn-primary my-2 my-sm-0" type="submit">
                  Book a table
                </button>
              </form>
            </div>
          </nav>
        </div>
      </div>
    </Fragment>
  );
}
