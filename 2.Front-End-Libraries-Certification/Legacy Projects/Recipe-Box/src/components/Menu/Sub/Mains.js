import React, { Component } from "react";

import Card from "../../Card/Card";

import card0 from "../../../img/card0.jpg";
import card1 from "../../../img/card1.jpg";
import card2 from "../../../img/card2.jpg";
import card3 from "../../../img/card3.jpg";
import card4 from "../../../img/card4.jpg";
import card5 from "../../../img/card5.jpg";

const images = [card0, card1, card2, card3, card4, card5];
class Mains extends Component {
  render() {
    let recipeElement;
    if (this.props.mains) {
      recipeElement = this.props.mains.map((main, index) => {
        return (
          <Card
            imageSrc={images[index % 6]}
            key={main.id}
            name={main.name}
            price={main.price}
            ingredients={main.ingredients}
          />
        );
      });
    }
    return (
      <div className="tab-pane" id="mains" role="tabpanel">
          <div className="row">
        {recipeElement}
        </div>
      </div>
    );
  }
}

export default Mains;
