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
            users: {},
            status: false,
            ready: false,
            showAdmin: false
        })
        this.getUsers = this.getUsers.bind(this);
        this.handleDisable = this.handleDisable.bind(this);
        this.promoteUserToAdmin = this.promoteUserToAdmin.bind(this);
        this.turnOnAdmin = this.turnOnAdmin.bind(this);
    }
    /*
        getUsers() calls the cognito function listUsers to get a list of users
        sets the returned array of users to the users state
    */
    async getUsers() {
        try {
            let allUsers = {};
            let more = true;
            let paginationToken = '';
            let params = {
                UserPoolId: process.env.REACT_APP_USER_POOL_ID,
                Limit: 60
            };

            AWS.config.update({
                region: process.env.REACT_APP_REGION,
                accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
                secretAccessKey: process.env.REACT_APP_SECRET_KEY,
            });
            while (more) {

                if (paginationToken !== '') {
                    params.PaginationToken = paginationToken;
                }
                const cognito = new AWS.CognitoIdentityServiceProvider();
                const rawUsers = await cognito.listUsers(params).promise();
                // console.log("allUsers before map: ", rawUsers);
                allUsers = rawUsers.Users.map(user => cognito.adminListGroupsForUser({
                    UserPoolId: process.env.REACT_APP_USER_POOL_ID, Username: user.Username
                }, function (err, data) {
                    (err)
                        ? console.log("Error on getting Data: ", err)
                        : (data.Groups.length >= 1)
                            ? (data.Groups[0].GroupName === "Administrators")
                                ? user.isUserAdmin = true
                                : user.isUserAdmin = false
                            : user.isUserAdmin = false
                    // user.isUserAdmin = false
                }));
                this.setState({
                    users: rawUsers.Users
                })
                if (rawUsers.PaginationToken) {
                    paginationToken = rawUsers.PaginationToken;
                } else {
                    more = false;
                }
            }


            // console.log(user.Username)
            // let params = {
            //     UserPoolId: process.env.REACT_APP_USER_POOL_ID,
            //     Username: user.Username
            // };



        } catch (e) {
            console.log(e);
        }
    }
    async turnOnAdmin() {
        await this.setState({
            showAdmin: !this.state.showAdmin
        })
    }
    async componentDidMount() {

        await this.getUsers();
        // await this.getAdmins();
        this.setState({
            ready: true,
        })
    }

    async shouldComponentUpdate(prevState) {
        return true
    }
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
        }
    };

    // promote user to admin
    async promoteUserToAdmin(event, user) {
        event.preventDefault();
        let cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

        // get user data to check if already an Administrator
        let getParams = {
            UserPoolId: process.env.REACT_APP_USER_POOL_ID,
            Username: user.Username,
        };

        let params = {
            GroupName: 'Administrators',
            UserPoolId: process.env.REACT_APP_USER_POOL_ID,
            Username: user.Username,
        };

        let removeParams = {
            GroupName: 'Administrators',
            Username: user.Username,
            UserPoolId: process.env.REACT_APP_USER_POOL_ID,
        }

        /*
        add condition to check for disabled 
        */
        /* 
            This function calls adminListGroupsForUser to get the groups the user is in.
            If the user is already in the 'Administrators' group, then remove them from it
            Else move the user to the 'Administrators' group
        */
        cognitoidentityserviceprovider.adminListGroupsForUser(getParams, function (err, data) {
            if (data.Groups.length >= 1 && data.Groups[0].GroupName === "Administrators") {

                cognitoidentityserviceprovider.adminRemoveUserFromGroup(removeParams, function (err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Removed from admin");
                    }
                })

            } else {
                cognitoidentityserviceprovider.adminAddUserToGroup(params, function (err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Changed to admin");
                    }
                })

            }
        })

        // change toggle state
        if (user.isUserAdmin === true) {
            this.setState({
                status: false,
            })
            user.isUserAdmin = false;
        } else {
            this.setState({
                status: true,
            })
            user.isUserAdmin = true;
        }
        console.log(user);
    }

    render() {
        if (!this.state.ready) {
            return (
                <h1>Loading...</h1>
            )
        } else {
            const { users } = this.state
            if (this.state.showAdmin) {
                return (
                    <div className='about-container'>
                        <div className='heading'><h1>Admin DB</h1></div>
                        <button onClick={this.turnOnAdmin}>Show Enabled User</button>
                        <Paper>
                            <Table stickyHeader aria-label="sticky table" style={{ background: 'gray' }}>
                                <TableHead>
                                    <TableRow >
                                        <TableCell style={{ fontSize: '3vh', color: 'white', background: 'black' }} >Users</TableCell>
                                        {/* <TableCell>Email</TableCell> */}
                                        <TableCell style={{ fontSize: '3vh', color: 'white', background: 'black' }}>Admin</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {users.map(user => (
                                        <TableRow key={user.Username}>
                                            <TableCell style={{ fontSize: '2.5vh' }} component="th" scope="row">
                                                {user.Username}
                                            </TableCell>
                                            <TableCell key={user.Username}>
                                                <Switch
                                                    checked={user.isUserAdmin}//if not admin will be checked
                                                    onClick={(event) => this.promoteUserToAdmin(event, user)}
                                                    id={user.Username + 'Admin'} />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Paper>
                    </div>
                )
            }
            return (
                <div className='about-container'>
                    <div className='heading'><h1>Admin DB</h1></div>
                    <button onClick={this.turnOnAdmin}>Show Admin Role</button>
                    <Paper>
                        <Table stickyHeader aria-label="sticky table" style={{ background: 'gray' }}>
                            <TableHead>
                                <TableRow >
                                    <TableCell style={{ fontSize: '3vh', color: 'white', background: 'black' }} >Users</TableCell>
                                    {/* <TableCell>Email</TableCell> */}
                                    <TableCell style={{ fontSize: '3vh', color: 'white', background: 'black' }}>Disabled</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.map(user => (
                                    <TableRow key={user.Username}>
                                        <TableCell style={{ fontSize: '2.5vh' }} component="th" scope="row">
                                            {user.Username}
                                        </TableCell>
                                        <TableCell>
                                            <Switch
                                                color="primary"
                                                checked={user.Enabled}
                                                onClick={(event) => this.handleDisable(event, user)}
                                                id={user.Username} />
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

}

export default AdminDashboard;
