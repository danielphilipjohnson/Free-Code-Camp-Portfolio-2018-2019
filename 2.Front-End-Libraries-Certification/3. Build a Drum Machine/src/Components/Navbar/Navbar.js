import React from "react";
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav__links">
        <li>
          <h1 className="nav-logo">@ DrumMachine 1</h1>
        </li>
        <li>
          <div className="mid">
            <select className="sound-select" name="cars" id="cars">
              <option value="volvo">Club - Bubblegums</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <div className="btn-drum btn-drum--sm">
              <span>130</span>
            </div>
            <div className="btn-drum btn-drum--active btn-drum--sm">
              <i class="fas fa-play"></i>
            </div>
            <div className="btn-drum btn-drum--sm">
              <i class="fas fa-circle"></i>
            </div>
          </div>
        </li>
        <li></li>
  
      </ul>
    </nav>
  );
}
