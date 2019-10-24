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
      <div >
      <body className='gameBody'></body>
      <footer className='cr'>
          <div >
            <p><strong>Escape Team © 2019</strong></p>
          </div>

        </footer>
        </div>
    );
  }
}


export default Game;