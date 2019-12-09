import React, { Component } from 'react';
import Avatar from 'react-avatar';
import Amplify, { Auth } from 'aws-amplify';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

class ProfilePage extends Component {
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
  render() {
    return (
      <div>
        <div className="container">
          <br />
          <Avatar name={this.state.username} size="300" round={true} />
          <br />
          <br />
          <br />
          <h1 style={{ fontSize: '400%' }}>Welcome Home  {this.state.username}!</h1>

          <h1 style={{ fontSize: '400%' }}>Bio:</h1>
          <textarea style={{ fontSize: '400%', backgroundColor: 'gray' }} value="Just happy to be here honestly"></textarea>

          <hr />
          <div>
            <h2 style={{fontSize:'450%', textDecoration:'underline'}}>Leaderboard</h2>
                <Table style={{fontSize:'450%', color:'white'}}  striped bordered hover>
                <thead>
                    <tr>
                        <th>{this.state.username}</th>
                        <th>Accuracy</th>
                        </tr>
                </thead>
                    <tbody>
                            <tr>
                                <th>test</th>
                                <th>%</th>
                            </tr>
                    </tbody>
                    </Table>
                
            </div>

        </div>
        
      </div>



    )
  }

}

export default ProfilePage;