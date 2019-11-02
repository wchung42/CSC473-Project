import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import DrawerToggleButton from '../SideDrawerMenu/DrawerToggleButton';

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: null,
      longitude: null,
    }
  }

   navbar = props => (
    <header className="navbarGame">
        <nav className="navigation">

            <div className="nav-logo"><a href="/"><img src={require("../Navbar/escapeInverted.png")} alt="logo" /></a></div>
            <div className="spaceGame-btw-logo-items" />
            <button className = "fa fa-bars fa-4x " onClick = { props.click }>
            </button>
        </nav>
    </header>
);

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

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
          integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
          crossorigin="anonymous" />

        <div>
        <this.navbar drawerClickHandler={this.drawerToggleClickHandler} />
        </div>
        <section className = "middle">
        <body>
          <br/>
    
      <div className="exit">
    <button className="btn-large btn-danger" type="button">&nbsp; Exit &nbsp;</button>
    </div>
    <div className ="text-center">
    <p className="text-center quest">Question{/*states for question*/}</p>
    
    <br/>
    <br/>
    <img className = "" src = "https://static01.nyt.com/images/2016/05/28/nyregion/29CUNY1/29CUNY1-articleLarge.jpg?quality=75&auto=webp&disable=upscale"/>
    <br/>
    <br/>
    <br/>
    <input type="text" className ="text-center textbox"/>
    <br/>
    
    <text className = "hint">hint should print here</text>
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