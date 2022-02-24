import React, { Component } from 'react'
import axios from 'axios';
import { findRenderedDOMComponentWithClass } from 'react-dom/cjs/react-dom-test-utils.production.min';

export default class Movies extends Component {
    constructor(){
        super();
        this.state = {
              hover:'',
              parr : [1],
              currentP : 1,
              movie: [],
              favourites:[]
        }
    }

   async componentDidMount(){
       let res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=20b7dac373c2e985d153e16ebbc26ff8&language=en-US&page=${this.state.currentP}`)
       let data = res.data;
     this.setState({
         movie : [...data.results]
     })
   }

   changeMovies=async()=>{
    let res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=20b7dac373c2e985d153e16ebbc26ff8&language=en-US&page=${this.state.currentP}`)
    let data = res.data;
    this.setState({
    movie : [...data.results]
  })
   
}

handleRight = () =>{
  let temp = []
  for(let i=1; i<=this.state.parr.length+1; i++)
  {
    temp.push(i);
  }
  this.setState({
    parr: [...temp],
    currentP : this.state.currentP+1
  },this.changeMovies)
}
handleLeft = () =>{
  if(this.state.currentP!=1){
  this.setState({
    currentP : this.state.currentP -1
  },this.changeMovies)
}
}
changePage = (value) =>{
  if(value!=this.state.currentP){
 this.setState({
   currentP : value
 },this.changeMovies)
}
}
handleFavourite = (movie) =>{

  let oldData =   JSON.parse(localStorage.getItem('movies-app')||'[]')
  if(this.state.favourites.includes(movie.id)){
    oldData = oldData.filter((m)=>m.id!=movie.id)
  }else{
    oldData.push(movie)
  }
  localStorage.setItem('movies-app',JSON.stringify(oldData))
  console.log(oldData)
  this.handleFavouriteState();
}

handleFavouriteState = () =>{
  let oldData =  JSON.parse(localStorage.getItem('movies-app')||'[]')
  let temp = oldData.map((movie)=>movie.id)
  this.setState({
    favourites:[...temp]
  })
}
  render() {
    return (
      <>
{
    this.state.movie.length == 0 ?
    <div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div> :
<div>
    <h3 className='text-center'><strong>Trending</strong></h3>
    <div className='movie-list'>{
        this.state.movie.map((movieObj) =>{
            return(
                
                <div className="card movie-card" onMouseEnter={()=> this.setState({hover : movieObj.id})} onMouseLeave={()=> this.setState({hover: ""})}>
                <img src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}  className="card-img-top movie-img" alt="..."/>
                {/* <div className="card-body movie-body"> */}
                  <h5 className="card-title movie-title">{movieObj.title}</h5>
                  <div className='button-wrapper' style={{display:"flex", width:"100%", justifyContent:"center"}}>
                    { this.state.hover == movieObj.id &&  <a className="btn btn-primary movie-button" onClick={()=>this.handleFavourite(movieObj)}>{this.state.favourites.includes(movieObj.id)?"Remove":"Add"}</a>}
                 
                {/* </div> */}
                </div>
              </div> 
            )
        })}
 
</div>

<div style={{display:'flex',justifyContent:'center'}}>
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" onClick={this.handleLeft}>Previous</a></li>
 {this.state.parr.map((value)=>{
       return(
        <li class="page-item"><a class="page-link" onClick={()=> this.changePage(value)}>{value}</a></li>
       )
 })}
    <li class="page-item"><a class="page-link" onClick={this.handleRight}>Next</a></li>
  </ul>
</nav>
</div>
      </div>
}

      </>
    )
  }
}
