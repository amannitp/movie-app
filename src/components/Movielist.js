import React, { Component } from 'react'
import {movies} from '../movieData'
import axios from 'axios'
export class Movielist extends Component {
  constructor(props) {
    super()
  
    this.state = {
       hover:'',
       movies:[],
       pageArr:[],
       currPage:1,
    }
  }
  async componentDidMount(){

    const res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=976e5f10590e3b03439a9b009c977abe&language=en-US&page=${this.state.currPage}`)
    //console.log(res.data)
    let movieDataApi=res.data

    this.setState({
      movies:[...movieDataApi.results]
    })
  }
  changePage = async()=>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=0b5415eb9bf023d556ef265b425e0e4a&language=en-US&page=${this.state.currPage}`)
    const movieDataApi = res.data.results

    this.setState({
      movies : [...movieDataApi]
    })

  }
  
  handleNext=()=>{
    let tempArr = []

    for(let i=1 ; i<=this.state.pageArr.length+1 ; i++){
      tempArr.push(i)
    }


    console.log(tempArr)

    this.setState({
            pageArr:[...tempArr],
            currPage : this.state.currPage+1
    } , this.changePage)
  }

  handlePrevious=()=>{
    if(this.state.currPage!=1){
      this.setState({
        currPage : this.state.currPage-1
  } , this.changePage)
    }
  }

  handlePageClick =(value)=>{
    if(value!= this.state.currPage){
      this.setState({
        currPage : value 
      } , this.changePage)
    }
        
  }
  render() {
    //let moviedata=movies.results
    //console.log(moviedata)
    return (
      <>
        <h3 className='text-center'><strong>Trending</strong></h3>


        <div className='movies-list movie-list'>
    
                    {this.state.movies.map((movieElem)=>(
                        <div class="card movie-card" onMouseEnter={()=>this.setState({hover:movieElem.id})} onMouseLeave={()=>this.setState({hover:''})} >
                        <img src={`https://image.tmdb.org/t/p/original${movieElem.backdrop_path}`}
 class="card-img-top movie-img" alt="..." style={{height:'40vh',width:'20vw'}}/>
                          <h5 class="card-title movie-tittle">{movieElem.original_title}</h5>

                          {this.state.hover==movieElem.id && 
                             <a href="#" class="btn btn-primary movie-button">Add to Favourite</a>
                          }
                          
                      </div>
                    ))}

                
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <nav aria-label="...">
            <ul class="pagination">
              <li class="page-item ">
                <a class="page-link" onClick={this.handlePrevious}>Previous</a>
              </li>

              {this.state.pageArr.map((value)=>(
               <li class="page-item">
               <a class="page-link" onClick={()=>this.handlePageClick(value)}>{value}</a>
             </li>
              ))}
              <li class="page-item">
                <a class="page-link" onClick={this.handleNext}>
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </>
    )
  }
}

export default Movielist