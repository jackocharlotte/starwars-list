import React, { Component } from 'react';
import Starwars from './starwars.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Starwars></Starwars>
      </div>
    );
  }
}
export default App;
