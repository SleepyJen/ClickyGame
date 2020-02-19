import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Navs/Nav'
import Image from './Components/Img/Image';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cliked: false,
      correctGuesses: 0,
      bestScore: 0,
      shuffle: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      message: 'Click on an Image to Start'
    };
  }
  render() {
    return (
      <div className="body">
        <Nav />
        <div>
          <Header />
        </div>
        <br></br>
        <div className="container">
          <div className="row justify-content-center">
            <Image src={this.state.shuffle[0]} />
            <Image src={this.state.shuffle[1]} />
            <Image src={this.state.shuffle[2]} />
            <Image src={this.state.shuffle[3]} />
          </div>
          <div className="row justify-content-center">
            <Image src={this.state.shuffle[4]} />
            <Image src={this.state.shuffle[5]} />
            <Image src={this.state.shuffle[6]} />
            <Image src={this.state.shuffle[7]} />
          </div>
          <div className="row justify-content-center">
            <Image src={this.state.shuffle[8]} />
            <Image src={this.state.shuffle[9]} />
            <Image src={this.state.shuffle[10]} />
            <Image src={this.state.shuffle[11]} />
          </div>
        </div>
        <br></br>
      </div>
    )
  }
}

export default App;