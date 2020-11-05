import React from "react";
import Ingredients from '../Menu/ingredients';
export default function Card(props) {
  return (
    <div class="card col-md-6" style={{ width: "18rem" }} key={props.key}>
      <img class="card-img-top" src={props.imageSrc} alt="Card image cap" />
      <div class="card-body bg-dark text-white">
        <h5 class="card-title">{props.name}</h5>

        <p class="card-text">
          <Ingredients
            ingredients={props.ingredients}
            starterID={props.key}
            category={"starters"}
            changeRecipe={props.changeRecipe}
          />
        </p>
        <button type="button" className="btn btn-item">
          {props.price}
        </button>
      </div>
    </div>
  );
}
