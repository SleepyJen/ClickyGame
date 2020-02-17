import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Navs/Nav';
import Header from './Components/Navs/Header/Header';

class App extends Component {
  render() {
    return (
      <main>
        <Nav />
        <Header />
      </main>
    )
  }
}

export default App;