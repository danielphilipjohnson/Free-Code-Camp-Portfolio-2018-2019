import React, { Component } from "react";
import MarkDownPreviewer from "./components/MarkdownPreviewer";
import Markdown from "./components/Markdown";


import Navbar from "./components/sitewide/navbar";
import BlogType from "./components/BlogType";
import "./App.css";

class App extends Component {
  render() {

    return (
      // <Navbar/>  
      <div className="container">
        <BlogType/>
      <Markdown />
     </div>
      )
    ;
  }
}

export default App;