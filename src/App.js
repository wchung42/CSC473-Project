import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import games from './games.json';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SideDrawerMenu from './components/SideDrawerMenu/SideDrawerMenu';
import Backdrop from './components/Backdrop/Backdrop';
import 'bootstrap/dist/css/bootstrap.css';
import Game from './components/Game/Game';
import Home from  './components/home';
import Footer from './components/Footer/Footer'
import About from './components/About/About';
import Contact from './components/Contact/Contact';


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

    let backdrop;
    if (this.state.sideDrawerMenuOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div className="App">
        
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
          integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
          crossOrigin="anonymous" />
        <link rel="stylesheet" href="styles.css"></link>

        <meta name="viewport" content="600px"></meta>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawerMenu show={this.state.sideDrawerMenuOpen} />
        {backdrop}

        <Router>
          <Switch>

            <Route path = '/Home' component ={Home}/>
            <Route path ='/Game' component ={Game}/>
            <Route path ='/about' component ={About}/>
            <Route path ='/contact' component ={Contact}/>
        
          </Switch>
        </Router>

        <Footer/>
      </div>
    );
  }
}


export default App;