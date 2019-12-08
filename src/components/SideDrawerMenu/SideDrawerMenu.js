import React, { Component } from 'react';
import './SideDrawerMenu.css';
import { Auth } from 'aws-amplify';

let amins = ['admin','admin2', 'admin3', 'admin4']
class sideDrawerMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      username: '',
      isLoggedIn: false,
      isAdmin: false
    }
  }

  // static getDerivedStateFromProps(props, state) {
    
  // }

  async componentDidMount() {
    await Auth.currentAuthenticatedUser()
      .then(
        user => {
          this.setUserInfo(user);
          console.log(this.state.username);
          console.log(this.state.isAdmin);
        }
      )
      .catch(err => console.log(err));
    //const user = await Auth.currentUserInfo();
    // console.log(currentUserInfo)
    // if (currentUserInfo) {
    //   this.setState({
    //     username: currentUserInfo.username,
    //     isLoggedIn: true,
    //   });
    //   console.log(currentUserInfo);
      // get currentuser group and compare with admin
      // if (user.signInUserSession.idToken.payload['cognito:groups'] == "Administrator") {
      //   this.setState({
      //     isAdmin: true,
      //   })
      // }
      
    // for(var i = 0; i< amins.length;i++){
    //   if (this.state.username === amins[i]){
    //     this.setState({
    //       isadmin: true
    //     });
    //   }
    
    }
  
    // method to get the userinfo and set it to states
  setUserInfo(user) {
    this.setState({
      username: user.username,
      isLoggedIn: true,
    });
    if (user.signInUserSession.idToken.payload['cognito:groups'] == 'Administrators') {
      this.setState({
        isAdmin: true,
      })
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
          <li hidden={!this.state.isAdmin}><a href="/cc">Create Game (Beta)</a></li>
          <li hidden = {!this.state.isAdmin}><a href ="/admin">Admin Dashboard</a></li>
        </ul>
      </nav>
    );
  }

}



export default sideDrawerMenu;