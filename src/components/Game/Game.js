import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import getAnswer from './gameFunctions.js';
import './Game.css';
import Puzzle from './Puzzle'; // import puzzle component
import Timer from './Timer';


class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameID: 0,
      gameReady: false,
    };
    this.getGameId = this.getGameId.bind(this);
  }

  getGameId(ev) {
    console.log(ev.currentTarget.value)
    this.setState({
      gameID: ev.currentTarget.value,
      gameReady: true
    }, console.log(this.state.gameID))
    console.log(this.state.gameID)
  }

  //Want to load the game in here based on the name
  render = () => {

    if (!this.state.gameReady) {
      return (
        <div className="Game">
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
            integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
            crossOrigin="anonymous" />
          <br />
          <div className="exit">
            <button className="btn-large btn-danger" type="button"><a href="/Game">&nbsp; Exit &nbsp;</a></button>
          </div>
          <div className="gameInterface">
            <button id="bttn1" className="gameButton" type="button" onClick={this.getGameId} value="0">0</button><br /><br />
            <button id="bttn2" className="gameButton" type="button" onClick={this.getGameId} value="1">1</button><br /><br />
            <button id="bttn3" className="gameButton" type="button" onClick={this.getGameId} value="2">2</button><br /><br />
            <button id="bttn4" className="gameButton" type="button" onClick={this.getGameId} value="3">3</button><br /><br />
          </div>
          <br />
        </div>
      )
    }
    else {
      return (
        <div className="Game">
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
            integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
            crossOrigin="anonymous" />
          <br />
          <div className="exit">
            <button className="btn-large btn-danger" type="button"><a href="/Game">&nbsp; Exit &nbsp;</a></button>
          </div>
          <div className="gameInterface">
            <Timer gameId={this.state.gameID} startCount="300" />
          </div>
          <br />
        </div>
      );
    }
  }
}


export default Game;