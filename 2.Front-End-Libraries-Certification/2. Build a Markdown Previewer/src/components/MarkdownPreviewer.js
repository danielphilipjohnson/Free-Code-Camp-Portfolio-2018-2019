import React, { Component } from "react";
import DisplayContainer from "./DisplayContainer";
import MarkDownEditor from "./MarkDownEditor";
//var marked = require('marked');

class MarkdownPreviewer extends Component {
  constructor() {
    super();
    this.state = {
      convertedMarkdownText:
        "* apples \n * banana \n ![placeholder](https://placeimg.com/450/250/any)",
      title: "Blog Title",
    };
    this.changeMarkup = this.changeMarkup.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
  }
  changeMarkup(modifiedText) {
    this.setState({
      convertedMarkdownText: modifiedText,
    });
  }
  changeTitle(newTitle) {
    this.setState({
      title: newTitle,
    });
  }

  render() {
    return (
      <div className="App">
         <MarkDownEditor
                  text={this.state.convertedMarkdownText}
                  changeMarkup={this.changeMarkup}
                  changeTitle={this.changeTitle}
                />
                <DisplayContainer
                  newText={this.state.convertedMarkdownText}
                  title={this.state.title}
                />

                
        {/* <div className="media">
          <div className="d-flex mr-4 profile-box">
            <h2 className="profile-letter">U</h2>
          </div>
          <div className="media-body">
            <div className="card" style="width: 35.5rem;">
              <div
                className="card-header d-flex flex-row
                                justify-content-between"
              >
                <div className="post-user">
                  <p className="">
                    Here's a blog: <span>USERNAME</span>
                  </p>
                </div>
                <div className="share">
                  <i className="fa fa-retweet" aria-hidden="true"></i>
                  <a href="#">Follow</a>
                </div>
              </div>
              <div className="post-content">
                <MarkDownEditor
                  text={this.state.convertedMarkdownText}
                  changeMarkup={this.changeMarkup}
                  changeTitle={this.changeTitle}
                />
                <DisplayContainer
                  newText={this.state.convertedMarkdownText}
                  title={this.state.title}
                />
              </div>
              <div className="card-block">
               
                <p className="card-text text-muted post-tags"># example tags</p>
              </div>
              <div className="card-footer text-muted">
                <div className="float-left footer-info">17,543 Notes</div>
                <div className="float-right">
                  <i
                    className="fa fa-paper-plane footer-icons"
                    aria-hidden="true"
                  ></i>
                  <i
                    className="fa fa-share-square-o footer-icons"
                    aria-hidden="true"
                  ></i>
                  <i className="fa fa-heart-o footer-icons" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default MarkdownPreviewer;
