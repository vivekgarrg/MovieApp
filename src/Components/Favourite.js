import React, { Component } from 'react'

export default class Favourite extends Component {
    constructor()
    {
        super()
        this.state = {
            genres:[]
        }
    }
  render() {
    const oldData =   JSON.parse(localStorage.getItem('movies-app')||'[]')
      let temp = oldData.map((movie)=>{
          console.log(movie)
      })
    return (
      <>
      <div className='main'>
            <div className='row'>
                <div className='col-3'>
             <ul class="list-group favourites-generes">
             <li className="list-group-item">All Genres</li>
             <li className="list-group-item">item</li>
             <li className="list-group-item">A third item</li>
             <li className="list-group-item">A fourth item</li>
             <li className="list-group-item">And a fifth one</li>
             </ul>

                </div>
                <div className='col-9'>
                    <div className='row favourites-table'>
                        <input type='text' className='col input-group-text'/> <input type='text' className='col input-group-text'/>
                        <table class="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Title</th>
      <th scope="col">Popularity</th>
      <th scope="col">Rating</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
      {oldData.map((movieObj)=>{
          return(
            <tr>
            <th scope="row"><img style={{width:100}} src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}/></th>
            <td><b>{movieObj.title}</b></td>
            <td>{movieObj.popularity}</td>
            <td>{movieObj.vote_average}</td>
            <td><button className='btn btn-danger'>Delete</button></td>
          </tr>
          )
      })}
  </tbody>
</table>


<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
                    </div>
                </div>
            </div>
      </div>
      </>
    )
  }
}
