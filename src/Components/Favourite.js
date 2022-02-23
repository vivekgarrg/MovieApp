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
      <th scope="col">Title</th>
      <th scope="col">Genres</th>
      <th scope="col">Popularity</th>
      <th scope="col">Rating</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
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
