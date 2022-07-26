import React, { Component } from "react";
import { movies } from "../movieData";
 class Favourite extends Component {
  render() {
    let movieData = movies.results;
    let genreids = {
      28: "Action",
      12: "Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      10751: "Family",
      14: "Fantasy",
      36: "History",
      27: "Horror",
      10402: "Music",
      9648: "Mystery",
      10749: "Romance",
      878: "Sci-Fi",
      10770: "TV",
      53: "Thriller",
      10752: "War",
      37: "Western",
    };

    return (
      <div className="main">
        <div className="row">
          <div className="col-3">
            <div class="list-group">
              <a
                href="#"
                class="list-group-item list-group-item-action active"
                aria-current="true"
              >
                The current link item
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                A second link item
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                A third link item
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                A fourth link item
              </a>
              <a class="list-group-item list-group-item-action disabled">
                A disabled link item
              </a>
            </div>
          </div>
          <div className="col-9"></div>
        </div>
      </div>
    );
  }
}

export default Favourite;
