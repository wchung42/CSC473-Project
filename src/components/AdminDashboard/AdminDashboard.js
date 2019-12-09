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

    /*
        getUsers() calls the cognito function listUsers to get a list of users
        sets the returned array of users to the users state
    */
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
                    region: process.env.REACT_APP_REGION,
                    accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
                    secretAccessKey: process.env.REACT_APP_SECRET_KEY,
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

            let cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

            for (let i = 0; i < allUsers.length; i++) {
                let params = {
                    UserPoolId: process.env.REACT_APP_USER_POOL_ID,
                    Username: allUsers[i].Username,
                };
                cognitoidentityserviceprovider.adminListGroupsForUser(params, function(err, data) {
                    if (data.Groups.length >= 1 && data.Groups[0].GroupName === "Administrators") {
                        allUsers[i].isAdmin = true;
                    } else {
                        allUsers[i].isAdmin = false;
                    }
                })
            }
            console.log(allUsers)
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
        const getParams = {
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
        let isAdmin = false;
        cognitoidentityserviceprovider.adminListGroupsForUser(getParams, function(err, data){
            if (data.Groups.length >= 1 && data.Groups[0].GroupName === "Administrators") {
                console.log(isAdmin)
                isAdmin = true;
                console.log(isAdmin)
                cognitoidentityserviceprovider.adminRemoveUserFromGroup(removeParams, function(err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Removed from admin");
                    }
                }) 
            } else {
                cognitoidentityserviceprovider.adminAddUserToGroup(params, function(err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Changed to admin"); 
                    }
                })
            }
        })
        // move selected user to 'Administrators' group
        
        
        // check that user is confirmed
        // if (!(user.UserStatus === "CONFIRMED" && user.Attributes.email_verified === "true")){
        //     console.log("User was not properly confirmed and/or email was not verified");
        // }
        // console.log(isAdmin)
        // if (isAdmin){
        //     cognitoidentityserviceprovider.adminRemoveUserFromGroup(removeParams, function(err, data) {
        //         if (err) {
        //             console.log(err);
        //         } else {
        //             console.log("Removed from admin");
        //         }
        //     })
        //     console.log("User is already an Administrator or is not in a group")   
        // }
        // else {
            
        //     cognitoidentityserviceprovider.adminAddUserToGroup(params, function(err, data) {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log("Changed to admin"); 
        //     }
        // })
        // }
    }

    render() {
        const { users } = this.state
        return (
            <div className = 'about-container'>
                <div className = 'heading'><h1>Admin DB</h1></div>
                <Paper>
                    <Table stickyHeader aria-label="sticky table" style={{background:'gray'}}>
                        <TableHead>
                            <TableRow >
                                <TableCell style={{fontSize:'3vh', color:'white', background:'black'}} >Users</TableCell>
                                {/* <TableCell>Email</TableCell> */}
                                <TableCell style={{fontSize:'3vh', color:'white', background:'black'}}>Disabled</TableCell>
                                <TableCell style={{fontSize:'3vh', color:'white', background:'black'}}>Admin</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map(row => (
                                <TableRow  key={row.Username}>
                                    <TableCell style={{fontSize:'2.5vh'}} component="th" scope="row">
                                        {row.Username}
                                    </TableCell>
                                    <TableCell>
                                        <Switch
                                            color = "primary"
                                            checked={!row.Enabled}
                                            onClick={(event) => this.handleDisable(event, row)}
                                            id={row.Username} />
                                    </TableCell>
                                    <TableCell>
                                        <Switch
                                            checked={row.isAdmin}
                                            onClick={(event) => this.promoteUserToAdmin(event, row)}
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
