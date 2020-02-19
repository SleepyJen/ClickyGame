import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Navs/Nav'
import Image from './Components/Img/Image';

class App extends Component {
  constructor() {
    super();
    this.state = {
      clicked: [],
      correctGuesses: 0,
      bestScore: 0,
      shuffle: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      message: 'Click on an Image to Start'
    };
    this.reshuffle = this.reshuffle.bind(this);
  }

  reshuffle(name) {
    let arr = this.state.shuffle;
    arr.sort(() => {
      return 0.5 - Math.random();
    });

    if (this.state.clicked.includes(name)) {
      let newBest = this.state.bestScore;
      if (this.state.correctGuesses > this.state.bestScore) {
        newBest = this.state.correctGuesses;
      }
      this.setState({
        message: 'Sorry, That guess is wrong please try again!',
        correctGuesses: 0,
        bestScore: newBest
      });
    } else {
      let cg = this.state.correctGuesses + 1;
      this.setState({
        shuffle: arr,
        clicked: [...this.state.clicked, name],
        correctGuesses: cg
      });
    }

  }

  render() {
    return (
      <div className="body">
        <Nav message={this.state.message} correctGuesses={this.state.correctGuesses} highScore={this.state.bestScore} />
        <div>
          <Header />
        </div>
        <br></br>
        <div className="container">
          <div className="row justify-content-center">
            <Image click={this.reshuffle} src={this.state.shuffle[0]} />
            <Image click={this.reshuffle} src={this.state.shuffle[1]} />
            <Image click={this.reshuffle} src={this.state.shuffle[2]} />
            <Image click={this.reshuffle} src={this.state.shuffle[3]} />
          </div>
          <div className="row justify-content-center">
            <Image click={this.reshuffle} src={this.state.shuffle[4]} />
            <Image click={this.reshuffle} src={this.state.shuffle[5]} />
            <Image click={this.reshuffle} src={this.state.shuffle[6]} />
            <Image click={this.reshuffle} src={this.state.shuffle[7]} />
          </div>
          <div className="row justify-content-center">
            <Image click={this.reshuffle} src={this.state.shuffle[8]} />
            <Image click={this.reshuffle} src={this.state.shuffle[9]} />
            <Image click={this.reshuffle} src={this.state.shuffle[10]} />
            <Image click={this.reshuffle} src={this.state.shuffle[11]} />
          </div>
        </div>
        <br></br>
      </div>
    )
  }
}

export default App;