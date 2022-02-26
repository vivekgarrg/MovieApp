import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class NavBar extends Component {
  render() {
    return (
      <div style={{display:"flex", padding:"2px", background:"black"}}>
          <Link to='/' className='logo'><h1>Movie App</h1></Link>
          <Link to='/favourite' className='fav'><h1>Favourites</h1></Link>
      </div>
    )
  }
}
