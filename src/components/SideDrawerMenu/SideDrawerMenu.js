import React, { Component } from 'react';
import './SideDrawerMenu.css';
import Amplify, { Auth } from 'aws-amplify';
import { NONAME } from 'dns';

class sideDrawerMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      isLoggedIn: false,
    }
  }

  async componentDidMount() {
    const user = await Auth.currentUserInfo();
    if (user) {
      this.setState({
        username: user.username,
        isLoggedIn: true,
      });
    }
  }

  handleSignOut = () => {
    Auth.signOut().then(() => {
      this.setState({
        username: '',
        isLoggedIn: false,
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
        </ul>
      </nav>
    );
  }

}



export default sideDrawerMenu;