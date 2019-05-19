import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

export default class BeerList extends Component {
  constructor(){
    super()
    this.state = {
        AllBeers: []
    }
}

componentDidMount() {
  axios.get("https://ih-beer-api.herokuapp.com/beers")
  .then(response => {
    this.setState({AllBeers: response.data})
  })
}

  render() {
    return (
      <div>
        <NavBar />
        <h1>List of beers</h1>
        <div className="beer-wrapper">

        {this.state.AllBeers.map((beer) => 
          
            <Link to={{
              pathname: `/beers/${beer._id}`,
              state: { beer: beer }
            }} key={beer._id} className="beer-card" >
            <div >
              <h1>{beer.name}</h1>
              <h3>{beer.tagline}</h3>
              <img src={beer.image_url} alt='' />
              <p>{beer.description}</p>
              </div>
            </Link>
          )
          }

        </div>
      </div>
    )
  }
}
