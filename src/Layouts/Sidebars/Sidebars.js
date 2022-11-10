import React, { Component } from 'react'
import PopularPost from './PopularPost'
import Trending from './Trending'
import LastestPost from './LastestPost'
import Video from './Video'
import Categories from './Categories'

export class Sidebars extends Component {
  render() {
    return (
      <div className="col-md-3">
        {/* ======= Sidebar ======= */}
        <div className="aside-block">
          <ul
            className="nav nav-pills custom-tab-nav mb-4"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-popular-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-popular"
                type="button"
                role="tab"
                aria-controls="pills-popular"
                aria-selected="true"
              >
                Popular
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-trending-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-trending"
                type="button"
                role="tab"
                aria-controls="pills-trending"
                aria-selected="false"
              >
                Trending
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-latest-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-latest"
                type="button"
                role="tab"
                aria-controls="pills-latest"
                aria-selected="false"
              >
                Latest
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            {/* Popular */}
            <PopularPost />
            {/* End Popular */}
            {/* Trending */}
            <Trending />
            {/* End Trending */}
            {/* Latest */}
            <LastestPost />
            {/* End Latest */}
          </div>
        </div>
          <Video />
          {/* End Video */}
          <Categories />
          {/* End Categories */}
      </div>
    )
  }
}

export default Sidebars