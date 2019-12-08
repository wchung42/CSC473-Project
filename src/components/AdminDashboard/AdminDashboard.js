import React, { Component } from 'react';
import AWS from 'aws-sdk';
import './AdminDashboard.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';


class AdminDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            users: [],
            setUsers: [],
            usernames: [],
            status: false,
        })
        this.getUsers = this.getUsers.bind(this);
        this.handleDisable = this.handleDisable.bind(this);
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
                allUsers = allUsers.concat(rawUsers.Users);
                console.log(allUsers);
                console.log(allUsers[3].Attributes.filter(attr => { return attr.Name === "email" })[0].Value)
                if (rawUsers.PaginationToken) {
                    paginationToken = rawUsers.PaginationToken;
                } else {
                    more = false;
                }
            }

            this.setState({
                users: allUsers,
            })

        } catch (e) {
            console.log(e);
        }
    }

    async componentDidMount() {
        await this.getUsers();
    }
    // async getData() {
    //     const userData = await this.getUsers();
    //     console.log(userData);
    //     let usernames = [];
    //     for (let i = 0; i < userData.length; i++) {
    //         usernames.push({username:userData[i].Username});
    //     }
    //     this.setState({
    //         usernames: usernames
    //     })
    //     //console.log(usernames)
    // }

    async handleDisable(event, user) {
        event.preventDefault();
        let cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();
        let params = {
            UserPoolId: process.env.REACT_APP_USER_POOL_ID,
            Username: user.Username,
        }


        // check if user is disable
        if (user.Enabled) {
            cognitoidentityserviceprovider.adminDisableUser(params, function (err, data) {
                if (err) {
                    console.log(err);
                }
                else {

                    console.log("User disabled")
                }

            })
            this.setState({
                status: false,
            });
            user.Enabled = false;
            //this.forceUpdate();
            //document.getElementById()
            //e.target.checked = true
        } else if (!user.Enabled) {
            cognitoidentityserviceprovider.adminEnableUser(params, function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("User enabled");
                }

            })
            this.setState({
                status: true,
            });
            user.Enabled = true;
            // event.target.checked = false;
            //this.forceUpdate();
            //e.target.checked = false
        }

    };

    render() {
        const { users } = this.state
        return (
            <div>
                <div>WELCOME ADMIN</div>
                {/* <button onClick = { this.getUsers }>Click me</button> */}

                {/* display table */}
                <Paper>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Users</TableCell>
                                {/* <TableCell>Email</TableCell> */}
                                <TableCell>Enabled/Disabled</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map(row => (
                                <TableRow key={row.Username}>
                                    <TableCell component="th" scope="row">
                                        {row.Username}
                                    </TableCell>
                                    <TableCell>
                                        <Switch
                                            checked={!row.Enabled}
                                            onClick={(event) => this.handleDisable(event, row)}
                                            id={row.Username} />
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
