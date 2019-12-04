import React, { Component } from 'react';
import './SideDrawerMenu.css';
import { Auth } from 'aws-amplify';
import { AmazonAIPredictionsProvider } from '@aws-amplify/predictions';

let amins = ['admin','admin2', 'admin3', 'admin4']
class sideDrawerMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      isLoggedIn: false,
      isadmin: false
    }
  }

  async componentDidMount() {
    const user = await Auth.currentUserInfo();
    if (user) {
      this.setState({
        username: user.username,
        isLoggedIn: true,
      });
    for(var i = 0; i< amins.length;i++){
      if (this.state.username === amins[i]){
        this.setState({
          isadmin: true
        });
      }
    }
    }
  }

  handleSignOut = () => {
    Auth.signOut().then(() => {
      this.setState({
        username: '',
        isLoggedIn: false,
        isadmin: false
      });
    });
  }

  render() {
    let animateDrawer = 'side-drawer';
    if (this.props.show) {
      animateDrawer = 'side-drawer open';
    }

    return (
      <nav className={animateDrawer}>
        <ul>
          <li><a href="/Home">Home</a></li>
          {/* <div className = 'side-drawer-divider'>
            <hr/>
          </div> */}

          <li><a href="/Game">Games</a></li>
          <li><a href="/About">About Us</a></li>
          <li><a href="/Contact">Contact Us</a></li>
          <li><button hidden={!this.state.isLoggedIn} onClick={this.handleSignOut} style={{ background: 'none', border: 'none' }}><a href="/">Sign out</a></button></li>
          <li hidden={!this.state.isadmin}><a href="/cc">Create Game (Beta)</a></li>
        </ul>
      </nav>
    );
  }

}



export default sideDrawerMenu;