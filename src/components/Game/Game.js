import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import games from './games.json';
// import getAnswer from './gameFunctions.js';
import './Game.css';
import Navbar from '../Navbar/Navbar';
import SideDrawerMenu from '../SideDrawerMenu/SideDrawerMenu';
import Backdrop from '../Backdrop/Backdrop';
import Footer from '../Footer/Footer';

// import puzzle component
import Puzzle from './Puzzle';


class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // game state
      gameState: true,
      // temp side drawer
      sideDrawerOpen: false
    }
  }

  /* this is temporary ****************************************** */
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerMenuOpen: !prevState.sideDrawerMenuOpen };
    })
  };

  // clicking backdrop closes side drawer
  backdropClickHandler = () => {
    this.setState({ sideDrawerMenuOpen: false });
  }
  /* *************************************************************** */

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

    let backdrop;
    if (this.state.sideDrawerMenuOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div className="Game">

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
          integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
          crossOrigin="anonymous" />
        <div>
          <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawerMenu show={this.state.sideDrawerMenuOpen} />
          {backdrop}
        </div>

        <div className = "game-state">
          <Puzzle />
        </div>
        <br />
        <Footer />
      </div>
    );
  }
}


export default Game;