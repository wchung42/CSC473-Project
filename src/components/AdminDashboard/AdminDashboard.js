import React, { Component } from 'react';
import AWS from 'aws-sdk';
import './AdminDashboard.css';

class AdminDashboard extends Component {
    constructor(props){
        super(props);
        this.state = ({
            users: [],
            setUsers: [],
        })
    }

    async getUsers() {
        try {
            let allUsers = [];
            let more = true;
            let paginationToken = '';

            while (more) {
                let params = {
                    UserPoolId: process.env.REACT_APP_USER_POOL_ID,
                    Limit: 60
                };
                if (paginationToken !== '') {
                    params.PaginationToken = paginationToken;
                }

                AWS.config.update({
                    region: `${process.env.REACT_APP_REGION}`,
                    accessKeyId: `${process.env.REACT_APP_ACCESS_KEY_ID}`,
                    secretAccessKey: `${process.env.REACT_APP_SECRET_KEY}`,
                });
                const cognito = new AWS.CognitoIdentityServiceProvider();
                const rawUsers = await cognito.listUsers(params).promise();
                console.log(rawUsers);
                allUsers = allUsers.concat(rawUsers.Users);
                console.log(allUsers);
                if (rawUsers.PaginationToken) {
                    paginationToken = rawUsers.PaginationToken;
                  } else {
                    more = false;
                }
            }
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>
               <div>WELCOME ADMIN</div>
            <button onClick = { this.getUsers }>Click me</button> 
            </div>
            
        )

         
    }

}

export default AdminDashboard;
