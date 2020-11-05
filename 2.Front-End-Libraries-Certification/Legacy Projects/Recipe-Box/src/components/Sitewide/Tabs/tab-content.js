import React, { Component } from 'react';
import Mains from '../../Menu/Sub/mains';
import Starters from '../../Menu/Sub/Starters'
import Dessert from '../../Menu/Sub/Dessert';


class TabContent extends Component {
    render() {

        return (
            <div className="tab-content">
                
                <Starters starters={this.props.recipes.starters} changeRecipe={this.props.changeRecipe} />

                <Mains mains={this.props.recipes.mains} changeRecipe={this.props.changeRecipe}/>
                
                <Dessert desserts={this.props.recipes.desserts} changeRecipe={this.props.changeRecipe}/>
            </div>
        );
    }
}

export default TabContent;
