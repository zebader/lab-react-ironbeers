import React, { Component } from 'react'
import NavBar from './NavBar'
export default class Beer extends Component {
  state = {
        beer: this.props.location.state
}

componentDidMount = ()=> console.log(this.state.beer.beer);



  render() {
    const beer = this.state.beer.beer
    return (
      <div>

      <NavBar />
      <div className="beer-wrapper">

      <div className="beer-card">
        <h1>{beer.name}</h1>
        <h3>{beer.tagline}</h3>
        <img src={beer.image_url} alt='' />
        <p>{beer.description}</p>
      </div>
      </div>
      </div>
    )
  }
}
