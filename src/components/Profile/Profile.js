import React, { Component } from 'react';

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


}

export default ProfilePage;