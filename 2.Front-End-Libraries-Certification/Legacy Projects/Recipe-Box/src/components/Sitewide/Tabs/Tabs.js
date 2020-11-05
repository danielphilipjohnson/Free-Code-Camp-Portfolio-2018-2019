import React from "react";

export default function Tabs() {
  return (
    <ul className="nav nav-tabs" role="tablist">
      <li className="nav-item">
        <a
          className="nav-link active"
          data-toggle="tab"
          href="#starters"
          role="tab"
        >
          Starters
        </a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" data-toggle="tab" href="#mains" role="tab">
          Mains
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="tab" href="#desserts" role="tab">
          Desserts
        </a>
      </li>
    </ul>
  );
}
