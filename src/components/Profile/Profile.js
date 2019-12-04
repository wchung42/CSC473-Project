import React, { Component } from 'react';
import Avatar from 'react-avatar';
import Amplify, { Auth } from 'aws-amplify';

class ProfilePage extends Component{
    constructor(props) {
        super(props);
        this.state = {
          username: '',
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
render(){
    return(
    <div>
        <div className="container">
            <br/>
        <Avatar name={this.state.username} size ="300" round={true} />
        <br/>
        <br/>
        <br/>
        <h1 style={{fontSize:'400%'}}>Welcome Home  {this.state.username}!</h1>

        <h1 style={{fontSize:'400%'}}>Bio:</h1>
        <textarea style={{fontSize:'400%', backgroundColor:'gray'}} value="Just happy to be here honestly"></textarea>

        <hr/>
        </div>
        
    </div>
    
    
    
    )
}

}

export default ProfilePage;