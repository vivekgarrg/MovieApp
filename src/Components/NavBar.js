import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <div style={{display:"flex", padding:"2px"}}>
          <h1>Movies App</h1>
          <h2 style={{marginLeft:"2rem", marginTop:"0.5rem"}} >Favourites</h2>
      </div>
    )
  }
}
