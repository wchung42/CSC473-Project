import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar/Navbar';
import SideDrawerMenu from './components/SideDrawerMenu/SideDrawerMenu';
import Backdrop from './components/Backdrop/Backdrop';
import Game from './components/Game/Game';
import Home from './components/home/home';
import Footer from './components/Footer/Footer'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import CreateGame from './components/createGame/createGame';
import GameStory from './components/createGame/gameStory'
import GameQuestions from './components/createGame/gameQuestions'
import ProfilePage from './components/Profile/Profile'
import Amplify, { Analytics, API, Auth, graphqlOperation, Storage } from 'aws-amplify';
//backend stuffs START HERE

import aws_config from './aws-exports';
import { Connect } from 'aws-amplify-react';
import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';


Amplify.configure(aws_config);




//END HERE
Analytics.configure({ disabled: true })

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
        <div key={this.state.sideDrawerMenuOpen.toString()} >
          <SideDrawerMenu show={this.state.sideDrawerMenuOpen} />
          {backdrop}
        </div>
        <div className="body-page">

          <Router>
            <Switch>

              <Route path='/Game' component={Game} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path ='/cc' component={CreateGame}/>
              <Route path ='/gs' component={GameStory}/>
              <Route path ='/gq' component={GameQuestions}/>
              <Route path ='/profile' component={ProfilePage}/>
              <Route path='/' component={Home} />


            </Switch>
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
}


export default App;
