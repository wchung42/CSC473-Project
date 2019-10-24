import React, { Component } from 'react';
import games from './Game.json';
import './game.css';

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

  render = () => {
    
    return (
      <div className="game">
        
      </div>
    );
  }
}


export default Game;