import React from "react";
import MarkdownPreviewer from "./MarkdownPreviewer";

export default function MarkdownContainer() {
  return (

    <div className="media">
      <div className="d-flex mr-4 profile-box">
        <h2 className="profile-letter">U</h2>
      </div>
      <div className="media-body">
        <div className="card" style={{width: "35.5rem"}}>
          <div
            className="card-header d-flex flex-row justify-content-between">
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
          <MarkdownPreviewer /> 
          </div>
          <div className="card-block">
         
            <p className="card-text text-muted post-tags"># example tags</p>
          </div>
          <div className="card-footer text-muted">
            <div className="float-left footer-info">17,543 Notes</div>
            <div className="float-right">
              <i className="fa fa-paper-plane footer-icons" aria-hidden="true"></i>
              <i
                className="fa fa-share-square-o footer-icons"
                aria-hidden="true"
              ></i>
              <i className="fa fa-heart-o footer-icons" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
