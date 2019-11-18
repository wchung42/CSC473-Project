import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import getAnswer from './gameFunctions.js';
import './Game.css';
import Timer from './Timer';  // timer component that determines state of game
import games from './games.json'; // get the game title
import Panel from './gamePanel';

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameID: 0,
      gameReady: false,
      latitude: null,
      longitude: null,
      gameSynopsis: 0, // 0: don't display game synopsis ; 1: display synopsis
      gameStart: 0 // 0: start button clicked, start game ; 1: stay on synopsis page
    };
    this.getGameId = this.getGameId.bind(this);
    this.startGame = this.startGame.bind(this);
  }

  getGameId(ev) {
    console.log(ev.currentTarget.value)
    this.setState({
      gameID: ev.currentTarget.value,
      gameReady: true,
      gameSynopsis: 1
    }, console.log(this.state.gameID))
    console.log(this.state.gameID)
  }

  startGame() {
    console.log('starting game');
    this.setState({
      gameSynopsis: 0,
      gameStart: 1
    })
  }

  position = async () => {
    await navigator.geolocation.getCurrentPosition(
       position => this.setState({
        latitude: position.coords.latitude,
         longitude: position.coords.longitude
       }), newState => console.log(newState))

       if(this.state.longitude === null){
     console.log(this.state.latitude, this.state.longitude);
       }
       else{
        console.log(this.state.latitude, this.state.longitude);
       }
   }

  //Want to load the game in here based on the name
  render = () => {

    // go to game list page
    if (!this.state.gameReady && (this.state.gameSynopsis === 0) && (this.state.gameStart === 0)) {
      return (
        <div className="Game">
          <br/>
          <p className ="Location">Click the button to get your coordinates.</p>
    
      <p className ="Location">{this.state.latitude} {this.state.longitude}</p>

          <button onClick={this.position} className='Location'>Location</button>
          <br/>

          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
            integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
            crossOrigin="anonymous" />
          <br />
          <div className="exit">
            <button className="btn-large btn-danger" type="button"><a href="/Game">&nbsp; Exit &nbsp;</a></button>
          </div>
          <div className="game-list">
            <Panel gameId="0" func={this.getGameId} />
            <Panel gameId="1" func={this.getGameId} />
            <Panel gameId="2" func={this.getGameId} />
            <Panel gameId="3" func={this.getGameId} />
          </div>
          <br />
        </div>
      )
    }
    // go to game synopsis page
    else if (this.state.gameReady && (this.state.gameSynopsis === 1) && (this.state.gameStart === 0)) {
      return (
        <div className="Game">
          <div className="exit">
            <button className="btn-large btn-danger" type="button"><a href="/Game">&nbsp; Exit &nbsp;</a></button>
          </div>
          <div className="synopsis">
            <h1>{games[this.state.gameID].Story}</h1>
          </div>
          <div className="start">
            <button id="start-btn" className="btn-large btn-success" type="button" onClick={this.startGame}>&nbsp; Start &nbsp;</button>
          </div>

        </div>
      )
    }
    else if (this.state.gameReady && (this.state.gameSynopsis === 0) && (this.state.gameStart === 1)) {
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