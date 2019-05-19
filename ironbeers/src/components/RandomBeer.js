import React, { Component } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

export default class RandomBeer extends Component {
  constructor(){
    super()
    this.state = {
        AllBeers: []
    }
}

componentDidMount() {
  axios.get("https://ih-beer-api.herokuapp.com/beers")
  .then(response => {
    /* const random = Math.floor(Math.random()*response.data.length) */
    const random = Math.floor(Math.random()*20)
    this.setState({AllBeers: response.data[random]})
    console.log(random)
    console.log(this.state.AllBeers)
  })}
  
  render() {

    return (
      <div>
      <NavBar />

        <div className="beer-wrapper">

          <div className="beer-card">
        
            <h1>{this.state.AllBeers.name}</h1>
            <h3>{this.state.AllBeers.tagline}</h3>
            <img src={this.state.AllBeers.image_url} alt='' />
            <p>{this.state.AllBeers.description}</p>
          
          </div>
          
        </div>
      </div>
    )
  }
}
