import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
      <div style={{display:"flex", padding:"2px"}}>
          <h1>Movies App</h1>
          <Link to='/favourite'><h2 style={{marginLeft:"2rem", marginTop:"0.5rem"}} >Favourites</h2></Link>
      </div>
    )
  }
}
