import React from "react";

export default function BlogPost() {
  return (
    <div class="media">
      <div class="d-flex mr-4 profile-box">
        <img
          class=""
          src="https://placeimg.com/450/450/any"
          alt="Generic placeholder image"
        />
      </div>
      <div class="media-body">
        <div class="card" style="width: 35.5rem;">
          <div class="card-header">
            <div class="media-body d-flex">
              <img
                class="mr-3 profile-img"
                src="https://placeimg.com/450/450/any"
                alt="Generic placeholder image"
              />
              <div
                class="media-body d-flex
                        space-between"
              >
                <div class="post-user">
                  <p class="">USERNAME</p>
                </div>
                <div class="share">
                  <a href="#">Follow</a>
                </div>
              </div>
            </div>
          </div>
          <img
            class="img-fluid"
            src="https://source.unsplash.com/random"
            alt=""
          />
          <div class="card-block">
            <div id="root"></div>
            <p class="card-text text-muted post-tags">#example tags</p>
          </div>
          <div class="card-footer text-muted">
            <div class="float-left footer-info">17,543 Notes</div>
            <div class="float-right">
              <i class="fa fa-paper-plane footer-icons" aria-hidden="true"></i>
              <i
                class="fa fa-share-square-o footer-icons"
                aria-hidden="true"
              ></i>
              <i class="fa fa-heart-o footer-icons" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
