import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import AddCountry from './containers/CountriesAdd';
import Countries from './containers/Countries';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddCountry/>
        <Countries />
      </div>
    );
  }
}


export default App;
