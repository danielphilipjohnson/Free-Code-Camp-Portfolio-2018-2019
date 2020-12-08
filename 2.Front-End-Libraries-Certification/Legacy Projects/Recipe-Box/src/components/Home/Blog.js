import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import blog0 from "../../img/restaurant/restaurant0.jpg";

export default function Blog() {
  const blogItems = [
    {
      src: blog0,
      date: "Sept. 06, 2019",
      author: "Admin",
      title: "Taste the delicious foods in Asia",
    },
    {
      src: blog0,
      date: "Sept. 06, 2019",
      author: "Admin",
      title: "Taste the delicious foods in Asia",
    },
    {
      src: blog0,
      date: "Sept. 06, 2019",
      author: "Admin",
      title: "Taste the delicious foods in Asia",
    },
  ];

  const blogElement = blogItems.map((blog) => {
    return (
      <div class="card col-lg-4">
        <img class="card-img-top" src={blog.src} alt="Card image cap" />
        <div class="card-body">
          <p>{blog.date}</p>
          <p>{blog.author} </p>
          <h5 class="card-title">{blog.title}</h5>

          <a href="#" class="btn btn-primary">
            Read more <FontAwesomeIcon icon={faEnvelope} /> 3
          </a>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{blogElement}</div>
    </div>
  );
}
