import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddCountry from './components/CountriesAdd';
import Countries from './components/Countries';

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
