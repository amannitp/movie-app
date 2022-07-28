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
            <ul class="list-group list-group-flush genere-selector">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
              <li class="list-group-item">A fourth item</li>
              <li class="list-group-item">And a fifth one</li>
            </ul>
          </div>
          <div className="col-9 favourate-table">
            <div className="row">
              <input type='text' placeholder="search" className="input-group-text col"/>
              <input type='number'  className="list-group-item col"/>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Tittle</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Popularity</th>
                  <th scope="col">Rating</th>
                </tr>
              </thead>
              <tbody>
                {movieData.map((movieObj) => (
                  <tr>
                    <th scope="row">{movieObj.title}</th>
                    <td>{genreids[movieObj.genre_ids[0]]}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{movieObj.vote_average}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Favourite;
