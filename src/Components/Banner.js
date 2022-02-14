import React, { Component } from 'react'
import axios from 'axios';

export default class Banner extends Component {

  constructor(){
    super();
    this.state = {
      movie : []
    }
  }
  async componentDidMount(){
    let res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=20b7dac373c2e985d153e16ebbc26ff8&language=en-US&page=1`)
    let data = res.data;
    this.setState({
      movie : [data.results[0]]
    })
}
  render() {
    return (
        
      <div >
       { this.state.movie.length == 0 ? <div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div>   :
        <div>
          <div className="card banner-card">
          <img src={`https://image.tmdb.org/t/p/original/${this.state.movie[0].backdrop_path}`} className="card-img-top banner-img" alt="..."/>
                  <h1 className="card-title banner-title">{this.state.movie[0].title}</h1>
                 <p className='card-text banner-text'>{this.state.movie[0].overview}</p>
        </div> 
</div>
        
      }
      </div>
  //     <div className="card">
  // <img src={`https://image.tmdb.org/t/p/original/${this.state.movie[0].backdrop_path}`} className="card-img-top" alt="Banner"/>
  // <div className="card-body">
  //   <h5 className="card-title">{this.state.movie[0].title}</h5>
  //   <a href="#" className="btn btn-primary">Go somewhere</a>
  // </div>
  // </div> 

    )
  }
}
