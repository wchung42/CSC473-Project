import React, { Component } from 'react';
import { Auth, graphqlOperation, API } from 'aws-amplify';
import { Authenticator, Greetings } from 'aws-amplify-react';
import awsmobile from '../../aws-exports';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';



const authErrorMessageMapper = (message) => {
    if (/incorrect.*username.*password/i.test(message)) {
        return 'Incorrect username or password';
    }
    console.log("ERROR: " + message);
    return message;
}

class Login extends Component {
    render() {
        return (
            <div>
                <Authenticator
                    hide={[Greetings]}                        
                    onStateChange={this.handleAuthStateChange}  
                    amplifyConfig={awsmobile}
                    errorMessage={authErrorMessageMapper}
                >
                </Authenticator>
            </div>
        )
    }
    
    handleAuthStateChange = async (state) => {
        if (state === 'signedIn') {
            const cognitoUser = await Auth.currentAuthenticatedUser();
            const userExists = await API.graphql(graphqlOperation(queries.getUser, {id: cognitoUser.username}));
            if (!userExists.data.getUser) {
                const createdUser = await API.graphql(graphqlOperation(mutations.createUser,{
                    input : {
                        id: cognitoUser.username, 
                        username: cognitoUser.username,
                        email: cognitoUser.attributes.email
                    }
                }));
                this.props.onLogin(cognitoUser);
            } 
            else {
                this.props.onLogin(cognitoUser);
            }
        }
    }
}

export default Login;