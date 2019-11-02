import React, { Component } from 'react';
import games from './games.json';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SideDrawerMenu from './components/SideDrawerMenu/SideDrawerMenu';
import Backdrop from './components/Backdrop/Backdrop';
import 'bootstrap/dist/css/bootstrap.css';
import Game from './components/Game/Game';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: null,
      longitude: null,
      sideDrawerMenuOpen: false

    }
  }

  // toggle drawer button handler
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerMenuOpen: !prevState.sideDrawerMenuOpen };
    })
  };

  // clicking backdrop closes side drawer
  backdropClickHandler = () => {
    this.setState({ sideDrawerMenuOpen: false });
  }
  // this state later will be written into a file in a backend so creator can generate new games without coding

  render = () => {
    // console.log(games) 
    let listItems = games
      .filter(game => game.popular == true)
      .map(item =>
        <li className="bodyCard" key={item.id} >
          <div className="card">
            <img
              key={item.id}
              className="card-img-top"
              src={require('./images/' + item.thumbnail)}
              onMouseEnter={e => e.currentTarget.src = require('./images/' + item.id + "/1.jpg")}
              onMouseOut={e => e.currentTarget.src = require('./images/' + item.thumbnail)} />
            <div className="card-body">
              <h5 className="card-title">
                <strong>{item.Title} ({item.Difficulty}/5)</strong>
              </h5>
              <p className="card-text"> {item.Story}</p>
              <a href="#" class="btn btn-primary">Play</a>
            </div>
          </div>
        </li >
      );

    // handle side drawer 
    let backdrop;
    if (this.state.sideDrawerMenuOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div className="App">
        <meta name="viewport" content="600px"></meta>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawerMenu show={this.state.sideDrawerMenuOpen} />
        {backdrop}

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
          integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
          crossorigin="anonymous" />
        <link rel="stylesheet" href="styles.css"></link>
        <section className="middle">
          <header className="Welcome-Section">
          </header>

          <body className="Body-Section">
            <p className="popular-game"><strong>POPULAR GAMES</strong></p>
            <ol className="cards" >{listItems}</ol>
          </body>
        </section>

        <footer className="footer-all">
          <div className="footer-social">

            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-github"></i></a>

          </div>

          <div className="footer-info">

            <p>
              <a href="#">Home</a>
              ·
					<a href="<Game/>">Games</a>
              ·
					<a href="#">About</a>
              ·
					<a href="#">Faq</a>
              ·
					<a href="#">Contact</a>
            </p>

            <p><strong>Escape Team © 2019</strong></p>
          </div>

        </footer>
      </div>
    );
  }
}


export default App;