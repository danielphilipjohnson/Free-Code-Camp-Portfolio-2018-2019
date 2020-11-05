import React, { Component } from "react";

import Card from "../../Card/Card";

import card0 from "../../../img/card0.jpg";
import card1 from "../../../img/card1.jpg";
import card2 from "../../../img/card2.jpg";
import card3 from "../../../img/card3.jpg";
import card4 from "../../../img/card4.jpg";
import card5 from "../../../img/card5.jpg";

const images = [card0, card1, card2, card3, card4, card5];

class Dessert extends Component {
  render() {
    let recipeElement;
    if (this.props.desserts) {
      recipeElement = this.props.desserts.map((dessert, index) => {
        return (
          <Card
            imageSrc={images[index % 6]}
            key={dessert.id}
            name={dessert.name}
            price={dessert.price}
            ingredients={dessert.ingredients}
          />
        );
      });
    }

    return (
      <div className="tab-pane" id="desserts" role="tabpanel">
        <div className="row">{recipeElement}</div>
      </div>
    );
  }
}

export default Dessert;
