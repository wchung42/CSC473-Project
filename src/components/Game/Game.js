import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import getAnswer from './gameFunctions.js';
import './Game.css';
import Puzzle from './Puzzle'; // import puzzle component


class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  // position = async () => {
  //   await navigator.geolocation.getCurrentPosition(
  //     position => this.setState({
  //       latitude: position.coords.latitude,
  //       longitude: position.coords.longitude
  //     }), newState => console.log(newState))

  //   console.log(this.state.latitude, this.state.longitude)
  // }

  //Want to load the game in here based on the name
  render = () => {

    return (
      <div className="Game">

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
          integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
          crossOrigin="anonymous" />

        <div className = "game-state">
          <Puzzle />
        </div>
        <br />
      </div>
    );
  }
}


export default Game;