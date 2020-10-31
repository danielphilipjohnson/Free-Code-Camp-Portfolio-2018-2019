import React, { Component } from "react";
import Controls from "./Controls/Controls";
import "./Display.css";

import logo from "../img/waves.webp";

class Display extends Component {
  render() {
    return (
      <header id="display" className="top">
        <div className="drum-display">
          <h2 className="drum-display__title">{this.props.text}</h2>
          <img src={logo} alt="Logo" />
   

          <Controls
            updateSoundBankAndDisplay={this.props.updateSoundBankAndDisplay}
            bankSets={this.props.bankSets}
          />
        </div>
      </header>
    );
  }
}

export default Display;
