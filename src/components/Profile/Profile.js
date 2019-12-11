import React, { Component } from 'react';
import Avatar from 'react-avatar';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
import { withAuthenticator } from 'aws-amplify-react';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      userName: '',
      name: "Fill in Your Name",
      bio: 'Tell the World about Yourself',
      profilePic: '#',
      isAdmin: false,
      record: [],
      userExisted: false,
      edit: false,
      loading: true
    };
    this.setUserInfo = this.setUserInfo.bind(this);
    this.createUserProfile = this.createUserProfile.bind(this);
  }

  async componentDidMount() {
    await Auth.currentAuthenticatedUser()
      .then(user =>
        this.setUserInfo(user)
      )
      .catch(err => console.log("Authentication Error: ", err))

    try {
      console.log("username before retrieving data: ", this.state.userName);
      const apiData = await API.graphql(graphqlOperation(queries.getUserProfile, { id: this.state.id }));
      // console.log("apiData", apiData)
      const userData = apiData.data.getUserProfile;
      console.log(userData);
      await this.setState({
        name: userData.Name,
        bio: userData.Bio,
        profilePic: userData.ProfilePic,
        record: (userData.record) ? userData.record : [],
        userExisted: true,
        loading: false
      })
    } catch (error) {
      this.setState({
        edit: true,
        userExisted: false
      })
      console.log("Error on Retrieving User Data", error);
    }
  }

  async createUserProfile(e) {
    // e.preventDefault();
    console.log("id, Username", this.state.userName);
    console.log("Name", this.state.name)
    console.log("user bio input:", e.target["user-Bio"].value)
    console.log("user-ProfilePic", e.target["user-profilePic"].value)


    const defaultProfile = {
      id: this.state.userName,
      Username: this.state.userName,
      Bio: e.target["user-Bio"].value,
      Name: e.target["user-Name"].value,
      ProfilePic: e.target["user-profilePic"].value,
    }
    if (this.state.userExisted) {
      try {
        await API.graphql(graphqlOperation(mutations.updateUserProfile, { input: defaultProfile }))
        this.setState({
          edit: false,
          loading: false
        })

      } catch (error) {
        console.log("Error on Updating User Profile: ", error)
      }
    } else {
      try {
        await API.graphql(graphqlOperation(mutations.createUserProfile, { input: defaultProfile }))
        this.setState({
          edit: false,
          loading: false
        })
      } catch (error) {
        console.log("Error on Creating User Profile: ", error)
      }
    }
  }

  async setUserInfo(user) {

    await this.setState({
      userName: user.username,
      id: user.username
    });
    console.log("user", this.state.userName)
    if (user.signInUserSession.idToken.payload['cognito:groups'] == 'Administrators') {
      await this.setState({
        isAdmin: true,
      })
    }
  }


  render() {
    if (this.state.edit) {
      return (
        <div>
          <div className='form-area was-validated'>
            <form onSubmit={this.createUserProfile} action='/profile'>
              <a href='/profile'></a>
              <div className='form-group'>

                <label for='user-Name'>Name</label>
                <input id='user-Name' type='text' className='form-control' required defaultValue={this.state.name}></input>

                <label for='user-Bio'>Bio</label>
                <input id='user-Bio' type='text' className='form-control' required defaultValue={this.state.bio}></input>

                <label for='user-profilePic'>Profile's Picture Link</label>
                <input id='user-profilePic' type='text' className='form-control' required defaultValue={this.state.profilePic}></input>
                <br></br>
                <button type='submit' className='btn-lg btn-success' id="profileSubmitButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      )
    } else if (this.state.loading) {
      return (<div>Loading User Info...</div>)
    }
    else {
      return (
        <div>
          <div className="container" key={this.state.name}>
            <br />
            <Avatar
              name={this.state.username}
              src={this.state.profilePic}
              size="300"
              round={true} />
            <br />
            <br />
            <br />
            <h1 style={{ fontSize: '400%' }}>Welcome Home  {this.state.name}!</h1>

            <h3>Bio:</h3>
            <textarea style={{ fontSize: '400%', backgroundColor: 'gray' }} defaultValue={this.state.bio}></textarea>

            <hr />
            <div>
              <h2 style={{ fontSize: '100%', textDecoration: 'underline' }}>Leaderboard</h2>
              <Table style={{ fontSize: '100%', color: 'white' }} striped bordered hover>
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
              <button id="Edit" className="btn-lg" onClick={() => this.setState({ edit: true })}>Edit Profile</button>
            </div>

          </div>

        </div>



      )
    }

  }

}

export default withAuthenticator(ProfilePage)