import React, { Component } from 'react'

export default class Favourite extends Component {
    constructor()
    {
        super()
        this.state = {
            movies:[],
            currText:''
        }
    }
  popularityAsc=()=>{
      let temp = this.state.movies;

      temp.sort(function(objA, objB){
         return objA.popularity-objB.popularity
      })

    this.setState({
    movies:[...temp]
     })
       }
  RatingAsc=()=>
    {
       let temp = this.state.movies;
       temp.sort(function(objA, objB){
       return objA.vote_average-objB.vote_average
       })

        this.setState({
          movies:[...temp]
           })
   }
   movieDelete=(id)=>{
     let temp = this.state.movies.filter((movieObj)=>movieObj.id!=id)
     this.setState({
       movies:[...temp]
     })
     localStorage.setItem("movies-app",JSON.stringify(temp));
   }
  componentDidMount()
    {
        this.setState({
        movies:JSON.parse(localStorage.getItem('movies-app')||'[]')
        })
    }
  render() {
    let filterArr = []
   if(this.state.currText == '')
   {
       filterArr=this.state.movies;
   }else{
     filterArr=this.state.movies.filter((movieObj)=>
     {
       let title =movieObj.original_title.toLowerCase();
       return title.includes(this.state.currText.toLowerCase())
     })
   }
   console.log(filterArr)
    return (
      <>
      <div className='main'>
            <div className='row'>   
                <div className='col'>
                    <div className='row favourites-table'>
                        <input placeholder='Search ' type='text' className='col input-group-text' value={this.state.currText} onChange={(e)=>this.setState({currText:e.target.value})}/> 
                                                <table class="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col" className='text-col'>Title</th>
      <th scope="col" className='text-col' onClick={this.popularityAsc} >Popularity</th>
      <th scope="col" className='text-col' onClick={this.RatingAsc}>Rating</th>
      <th scope="col" className='text-col'>Delete</th>
    </tr>
  </thead>
  <tbody>
      {filterArr.map((movieObj)=>{
          return(
            <tr>
            <th scope="row"><img style={{width:100}} src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}/></th>
            <td className='text-col'><b>{movieObj.title}</b></td>
            <td className='text-col'>{movieObj.popularity}</td>
            <td className='text-col'>{movieObj.vote_average}</td>
            <td><button className='btn btn-danger' onClick={()=>this.movieDelete(movieObj.id)}>Delete</button></td>
          </tr>
          )
      })}
  </tbody>
</table>

                    </div>
                </div>
            </div>
      </div>
      </>
    )
  }
}
