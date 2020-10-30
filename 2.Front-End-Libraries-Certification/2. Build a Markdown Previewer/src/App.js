import React, { Component } from "react";

import MarkdownContainer from "./components/Markdown/MarkdownContainer";

import Navbar from "./components/sitewide/Navbar";

import BlogType from "./components/Blog/BlogType";
import BlogPost from "./components/Blog/BlogPost";

import "./App.css";

class App extends Component {
  render() {
    const numbers = [1, 2, 3, 4, 5];
    const BlogItems = numbers.map((number) =>  <BlogPost />);


    return (
      <div>
        <Navbar />

        <div className="container">
          <BlogType />
        
          <div className="posts d-flex flex-row flex-wrap">
            <MarkdownContainer />
            {BlogItems}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
