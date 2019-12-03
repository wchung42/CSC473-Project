import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Amplify, { Auth } from 'aws-amplify';
import { Authenticator, Greetings } from 'aws-amplify-react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import awsconfig from '../../aws-exports';
import '../Navbar/Navbar.css'
import DrawerToggleButton from '../SideDrawerMenu/DrawerToggleButton';
import { minHeight } from '@material-ui/system';

Amplify.configure(awsconfig);

class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      showAuth: false,
      isLoggedIn: false,
    };
  }

  async componentDidMount() {
    const user = await Auth.currentUserInfo();
    //const user = Auth.currentUserInfo();
    if (user) {
      this.setState({
        username: user.username,
        isLoggedIn: true,
      });
    }
  }

  handleShowAuth = () => {
    this.setState({
      showAuth: true,
    });
  }

  handleCloseAuth = () => {
    this.setState({
      showAuth: false,
    });
  }

  handleAuthStateChange = (state) => {
    if (state === 'signedIn') {
      const { username } = Auth.user;
      this.setState({
        showAuth: false,
        username: username,
      });
    }
  }

  handleSignOut = () => {
    Auth.signOut().then(() => {
      this.setState({
        username: '',
      });
    });
  }

  render() {


    const { username, showAuth } = this.state;
    const {
      handleShowAuth, handleCloseAuth, handleAuthStateChange,
    } = this;


    return (
      <div>

        <Navbar className="navigation navbar">

          <div className="nav-logo"><a href="/"><img src={require("./escape.png")} alt="logo" /></a></div>
          <div className="space-btw-logo-items" />
          <div className="nav-items">
            {username
              ? (
                <div className="userLOGOUT">
                  <Nav className="navigation">

                    <Nav.Item className="nav-link login" >
                      {' '}
                      <a id="username">{username /*Printing the username*/} </a>
                    </Nav.Item>
                  </Nav>
                </div>
              )
              : (
                <Nav className="navigation">
                  <button className="login"
                    style={{ color: 'white', background: 'none', border: 'none', }}
                    onClick={handleShowAuth}
                  >
                    <a>Sign in</a>
                  </button>
                </Nav>
              )}
          </div>

          <div>
            <DrawerToggleButton click={this.props.drawerClickHandler} />
          </div>
        </Navbar>

        <Dialog className="auth" onClose={handleCloseAuth} aria-labelledby="simple-dialog-title" open={showAuth}>
          <Authenticator
            hideDefault={!showAuth}
            onStateChange={handleAuthStateChange}
          />
        </Dialog>
      </div>
    );
  }
}
export default Navigation;