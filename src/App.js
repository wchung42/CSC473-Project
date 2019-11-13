import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar/Navbar';
import SideDrawerMenu from './components/SideDrawerMenu/SideDrawerMenu';
import Backdrop from './components/Backdrop/Backdrop';
import Game from './components/Game/Game';
import Home from './components/home';
import Footer from './components/Footer/Footer'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { Analytics, Auth } from 'aws-amplify';
import Login from './components/Login/login';

Analytics.configure({ disabled: true })

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
      latitude: null,
      longitude: null,
      sideDrawerMenuOpen: false

    }
  }

  //Testing

  componentDidMount() {
    Analytics.startSession();
    window.addEventListener('beforeunload', () => {
        Analytics.stopSession();
    })
    Auth.currentAuthenticatedUser().then(user => {
        this.updateCurrentUser(user)
    });
}

updateCurrentUser = (user) => {
    this.setState({
        currentUser: user
    })
}

onSignOut = async () => {
    await Auth.signOut();
    this.setState({
        currentUser: null
    })
}

  //Testing

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

        <div>
          <Navbar drawerClickHandler={this.drawerToggleClickHandler} />

          <SideDrawerMenu show={this.state.sideDrawerMenuOpen} />
          {backdrop}
        </div>
        <div className="body-page">
          <Router>
            <Switch>

              <Route path='/Game' component={Game} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route exact path="/login" 
                        render = {() => <Login onLogin={this.updateCurrentUser} />}
                    />
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