import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
 faStar
} from "@fortawesome/free-solid-svg-icons";


import testimony0 from "../../img/testimony/testimony0.jpg";
import testimony1 from "../../img/testimony/testimony1.jpg";
import testimony2 from "../../img/testimony/testimony2.jpg";


function generateStarRating(c){
  const starList = [];

  for(var i= 0; i <c; i++){
    starList.push(<FontAwesomeIcon icon={faStar} />)
  }
  return (
    <div className="ratings">
      {starList}
      </div>
  )
}


export default function Testimony() {

  const customerItems = [
    {
      review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
    nulla voluptates dolore quam exercitationem deleniti eaque ducimus
    ratione, dolores, optio at numquam? Corporis voluptatem asperiores
    quae quia commodi magni molestias.`,
      stars: 5,
      src: testimony0,
      name: "Jason McClean",
    },
    {
      review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
    nulla voluptates dolore quam exercitationem deleniti eaque ducimus
    ratione, dolores, optio at numquam? Corporis voluptatem asperiores
    quae quia commodi magni molestias.`,
      stars: 4,
      src: testimony1,
      name: "Mark Stevenson",
    },
    {
      review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
    nulla voluptates dolore quam exercitationem deleniti eaque ducimus
    ratione, dolores, optio at numquam? Corporis voluptatem asperiores
    quae quia commodi magni molestias.`,
      stars: 5,
      src: testimony2,
      name: "Art Leonard",
    },
  ];


  const customers = customerItems.map((customer) => {
    return (
      <div className="col-md-4">
        <img
          className="rounded-circle"
          src={customer.src}
          height="150"
          alt=""
          srcset=""
        />
        <p>
         {customer.review}
         
        </p>
        <div className="ratings">
      
          {generateStarRating(customer.stars)}
    
        </div>
        <h4>{customer.name}</h4>
        <h6>Customer</h6>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        {customers}
        
      </div>
    </div>
  );
}
