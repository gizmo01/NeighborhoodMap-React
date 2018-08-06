import React, { Component } from 'react';
import Map from './Map'
import logo from './logo.svg';
import './App.css';
import * as locations from './locations.json';

class App extends Component {
  state = {
    venue: locations,
    searchedVenues: '',
    placeToShow: '',
    isOpen: false,
    error: false,
    infoContent: ""
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Welcome to React</h1>

      </div>
    );
  }
}

export default App;
