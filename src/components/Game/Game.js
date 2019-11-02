import React, { Component } from 'react';
import './Game.css';
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
    <p className="text-center">{/*states for question*/}</p>
    
   
    <div className ="text-center">

    <button className="btn btn-primary" type="button">&nbsp; Exit &nbsp;</button>
    <br/>
    <br/>
    <img className = "" src = "https://static01.nyt.com/images/2016/05/28/nyregion/29CUNY1/29CUNY1-articleLarge.jpg?quality=75&auto=webp&disable=upscale"/>
    <br/>
    <br/>
    <br/>
    <input type="text" className="text-center"/>
    <br/>
    <br/>
    <button className="btn btn-primary" type="button">Answer</button>
    <br/>
    <br/>
    <button className="btn btn-primary" type="button">Hint</button>
    </div>


  </body>
      </section>
          
        </div>
    );
  }
}


export default Game;