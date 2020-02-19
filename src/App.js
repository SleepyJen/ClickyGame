import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Navs/Nav'

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Nav />
        <br />
        <div>
          <Header />
        </div>
      </div>
    )
  }
}

export default App;