import React from "react";
import './BlogPost.css';
export default function BlogPost() {
  return (
    <div className="media">
      <div className="d-none d-lg-flex mr-4 profile-box">
        <img
          className=" rounded"
          src="https://placeimg.com/450/450/any"
          alt="Generic placeholder image"
        />
      </div>
      <div className="media-body">
        <div className="card card-blog">
          <div className="card-header">
            <div className="media-body d-flex">
              <img
                className="mr-3 profile-img"
                src="https://placeimg.com/450/450/any"
                alt="Generic placeholder image"
              />
              <div
                className="media-body d-flex
                        space-between align-items-center"
              >
                <div className="post-user pr-3">
                  <p className="m-0">USERNAME</p>
                </div>
                <div className="share">
                  <a href="#">Follow</a>
                </div>
              </div>
            </div>
          </div>
          <img
            className="img-fluid"
            src="https://source.unsplash.com/random"
            alt=""
          />
          <div className="card-block">
            <p className="card-text text-muted post-tags">#example tags</p>
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
    </div>
  );
}
