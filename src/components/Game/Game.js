import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

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
        <section className = "middle">
        <body>
    
      <div className="exit">
    <p>Nav should be here</p>
    <button className="btn-large btn-danger" type="button">&nbsp; Exit &nbsp;</button>
    </div>
    <div className ="text-center">
    <p className="text-center">Question{/*states for question*/}</p>
    
    <br/>
    <br/>
    <img className = "" src = "https://static01.nyt.com/images/2016/05/28/nyregion/29CUNY1/29CUNY1-articleLarge.jpg?quality=75&auto=webp&disable=upscale"/>
    <br/>
    <br/>
    <br/>
    <input type="text" className ="text-center textbox"/>
    <br/>
    <br/>
    <div >
    <button className="btn-large  btn-success" type="button">&nbsp; Answer &nbsp;</button>
    <br/>
    <br/>
    <button className="btn-large btn-warning " type="button">Hint</button>
    </div>
    </div>

      <p className="cr text-center"><strong>Escape Team © 2019</strong></p>

  </body>
      </section>
          
        </div>
    );
  }
}


export default Game;