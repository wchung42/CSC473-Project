import React, { Component, ReactDOM } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
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
    // this.panelGenrator = this.panelGenrator.bind(this);
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

       console.log(this.state.latitude, this.state.longitude);
       
      //  var R = 6371e3; // metres
      //  var φ1 = lat1.toRadians();
      //  var φ2 = lat2.toRadians();
      //  var Δφ = (lat2-lat1).toRadians();
      //  var Δλ = (lon2-lon1).toRadians();

      //  var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
      //         Math.cos(φ1) * Math.cos(φ2) *
      //         Math.sin(Δλ/2) * Math.sin(Δλ/2);
      //  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

      //  var d = R * c;
   }


  componentDidUpdate(prevProps) {
    if (prevProps.latitude !== this.props.latitude) {
      this.setState({
        latitude: this.props.latitude
      })
    }
  }
  //Want to load the game in here based on the name
  render = () => {
    let panelGenrator = () => {
      let listItems = games
        .map(item =>
          <Panel gameId={item.Id} func={this.getGameId} />
        )
      return <ol className="cardsX" >{listItems}</ol>
    }
    // go to game list page
    if (!this.state.gameReady && (this.state.gameSynopsis === 0) && (this.state.gameStart === 0)) {
      return (
        <div className="Game">
          <br />
          <p className="Location">Click the button to get your coordinates.</p>

          <p className="Location">{this.state.latitude} {this.state.longitude}</p>

          <button onClick={this.position} className='Location'>Location</button>
          <br />

          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
            integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
            crossOrigin="anonymous" />
          <br />
          <div className="exit">
            <button className="btn btn-lg btn-danger" type="button"><a href="/">&nbsp; Exit &nbsp;</a></button>
          </div>
          <div className="game-list">
            <Panel func={this.getGameId} />
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
            <a href = "/Game" className="btn btn-lg btn-danger nounderline" type="button">&nbsp; Exit &nbsp;</a>
          </div>
          <div className="synopsis">
            <h1>{games[this.state.gameID].Story}</h1>
          </div>
          <div className="start">
            <button id="start-btn" className="btn btn-lg btn-success" type="button" onClick={this.startGame}>&nbsp; Start &nbsp;</button>
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
            <button className="btn-lg btn-danger" type="button"><a href="/Game">&nbsp; Exit &nbsp;</a></button>
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