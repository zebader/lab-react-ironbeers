import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import BeerList from './components/BeerList'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'
import Beer from './components/Beer'


class App extends Component {
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
            <div className="App">
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/beers" component={BeerList}/>
                <Route exact path="/beers/:beerid" component={Beer} />
                <Route exact path="/randombeer" component={RandomBeer}/>
                <Route exact path="/newbeer" component={NewBeer}/>
              </Switch>
            </div>
        );
    }
}

export default App;