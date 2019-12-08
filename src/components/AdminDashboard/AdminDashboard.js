import React, { Component } from 'react';
import AWS from 'aws-sdk';
import './AdminDashboard.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


class AdminDashboard extends Component {
    constructor(props){
        super(props);
        this.state = ({
            users: [],
            setUsers: [],
            usernames: []
        })
        this.getUsers = this.getUsers.bind(this);
        this.getData = this.getData.bind(this);
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

            return allUsers;
        } catch (e) {
            console.log(e);
        }
    }

    async getData() {
        const userData = await this.getUsers();
        console.log(userData);
        let usernames = [];
        for (let i = 0; i < userData.length; i++) {
            usernames.push({username:userData[i].Username});
        }
        this.setState({
            usernames: usernames
        })
        //console.log(usernames)
    }


    render() {
        //const rows = this.getData();
        //console.log('rows' + rows)
        return (
            <div>
               <div>WELCOME ADMIN</div>
                <button onClick = { this.getData }>Click me</button>

                {/* display table */}
                <Paper>
                    <Table aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Users</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.usernames.map(row => (
                                <TableRow key={row.username}>
                                    <TableCell component="th" scope="row">
                                        {row.username}
                                    </TableCell>
                            
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
            
        )

         
    }

}

export default AdminDashboard;
