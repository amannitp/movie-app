import React, { Component } from 'react'
import {movies} from '../movieData'
export class Banner extends Component {
  render() {
    let movieElem=movies.results[Math.floor(Math.random()*10)]
    let backDrop=movieElem.backdrop_path
    let tittle =movieElem.title
    let description=movieElem.overview
    return (
        <div className="card banner-card" >
        <img src={`https://image.tmdb.org/t/p/original
${backDrop}`} className="card-img-top banner-img" alt="..."/>
          <h5 className="card-title banner-tittle">{tittle}</h5>
          
      </div>
    )
  }
}

export default Banner