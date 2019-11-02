import React, { Component } from 'react';
import './Game.css';

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: null,
      longitude: null,
    }
  }

  position = async () => {
    await navigator.geolocation.getCurrentPosition(
      position => this.setState({ 
        latitude: position.coords.latitude, 
        longitude: position.coords.longitude
      }), newState => console.log(newState))
      
    console.log(this.state.latitude, this.state.longitude)
  }

  //Want to load the game in here based on the name
  render = () => {

    return (
      <div className="Game">
      <body className="gameBody">
        <img className = "g-image" src="https://www.ccny.cuny.edu/sites/default/files/SHEPARD%206%20overall%20after%20%281%29.jpg" alt="Smiley face"></img>
        <br/>
        <br/>
        <input type = "text" className = "textbox" ></input>
      </body>
          <footer className = ".footer-all">
          <p className = "footP"><strong>Escape Team © 2019</strong></p>
        </footer>
        </div>
    );
  }
}


export default Game;