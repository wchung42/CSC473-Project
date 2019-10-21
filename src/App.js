import React, { Component } from 'react';
import games from './games.json';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SideDrawerMenu from './components/SideDrawerMenu/SideDrawerMenu';
import Backdrop from './components/Backdrop/Backdrop';
// import sherapd from './images/sherapd0.jpg'

class App extends Component {
  state = {
    sideDrawerMenuOpen: false
  };

  // toggle drawer button handler
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerMenuOpen: !prevState.sideDrawerMenuOpen};
    })
  };

  // clicking backdrop closes side drawer
  backdropClickHandler = () => {
    this.setState({sideDrawerMenuOpen: false});
  }
  
  // this state later will be written into a file in a backend so creator can generate new games without coding

  render = () => {
    // console.log(games) 
    let listItems = games
      .filter(game => game.popular == true)
      .map(item =>
        <li className="bodyTitle" key={item.id} >
          <strong>{item.Title} </strong>
          <strong>({item.Difficulty}/5)</strong>
          <br />
          <img
            key={item.id}
            className={("img" + item.id)}
            src={require('./images/' + item.thumbnail)}
            onMouseEnter={e => e.currentTarget.src = require('./images/' + item.id + "/1.jpg")}
            onMouseOut={e => e.currentTarget.src = require('./images/' + item.thumbnail)}
          />
        </li >
      );
    
    // handle side drawer 
    let backdrop;
    if (this.state.sideDrawerMenuOpen) {
      backdrop = <Backdrop click = { this.backdropClickHandler }/>;
    }
    
    return (
      <div className="App">
         <Navbar drawerClickHandler = { this.drawerToggleClickHandler }/>;
         <SideDrawerMenu show = { this.state.sideDrawerMenuOpen }/>;
         { backdrop };                           

                                         
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
          integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
          crossorigin="anonymous" />
        <link rel="stylesheet" href="styles.css"></link>
        <header>
          <h1 className="greeting">
            <br />
          </h1>
        </header>
        <body className="body">
          <p><strong>Popular Games</strong></p>
          <ol >{listItems}</ol>
        </body>


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
					<a href="#">Games</a>
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