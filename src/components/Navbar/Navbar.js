import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Amplify, { Auth } from 'aws-amplify';
import { Authenticator, Greetings } from 'aws-amplify-react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import awsconfig from '../../aws-exports';
import '../Navbar/Navbar.css'
import DrawerToggleButton from '../SideDrawerMenu/DrawerToggleButton';

Amplify.configure(awsconfig);

class Navigation extends Component{

    constructor(props) {
        super(props);
        this.state = {
          username: '',
          showAuth: false,
        };
      }

      async componentDidMount() {
        const user = await Auth.currentUserInfo();
        if (user) {
          this.setState({
            username: user.username,
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
            username,
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
    
render(){


      const { username, showAuth } = this.state;
      const {
        handleShowAuth, handleCloseAuth, handleAuthStateChange, handleSignOut,
      } = this;


return(
   <div>
        
        <Navbar className="navigation navbar">
         
            <div className="nav-logo"><a href="/"><img src={require("./escape.png")} alt="logo" /></a></div>
            <div className="space-btw-logo-items" />
             <div className="nav-items">
            {username
              ? (                  
                <div className ="userLOGOUT">
                <Nav className="navigation">
                    <ul>
                    <Nav.Item className="nav-link login" style={{color:'white'}}>
                    <li>
                      {' '}
                      {username /*Printing the username*/} 
                      </li>
                    </Nav.Item>
                  <Nav.Item>
                    <Button className ="login" style={{color:'white', fontSize:'200%'}} onClick={handleSignOut} data-testid="logout-button"> <li style={{color:'white', fontSize:'100%'}}>Sign Out</li></Button>
                  </Nav.Item>
                  </ul>
                </Nav>
                </div>
              )
              : (
                <Nav className="navigation">
                  <Button className ="login"
                  style={{color:'white'}}
                    onClick={handleShowAuth}
                  >
                    <a>Log in</a>
                  </Button>
                </Nav>
              )}
              </div>
          
          <div>
                <DrawerToggleButton click={this.props.drawerClickHandler} />
            </div>
        </Navbar>

        <Dialog className ="auth" onClose={handleCloseAuth} aria-labelledby="simple-dialog-title" open={showAuth}>
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