import * as mutations from './graphql/mutations';
import { graphqlOperation, Analytics, API } from 'aws-amplify';

const assertErrors = (response) => {
    if (response && response.errors && response.errors.length > 0) {
        throw new Error(response.errors.join('\n'))
    }
}

export const createUser = async (user) => {
    try {
        const response = await API.graphql(
            graphqlOperation(mutations.createUser, { user })
        );
        assertErrors(response);
        return response.data.createUser;
    } catch (e) {
        Analytics.record({
            name: 'createUserError',
            attributes: {
                error: e.message
            }
        })
    }
}

export const updateUser = async (user) => {
    try {
        const response = await API.graphql(
            graphqlOperation(mutations.updateUser, { user })
        );
        assertErrors(response);
        return response.data.updateUser;
    } catch (e) {
        Analytics.record({
            name: 'updateUserError',
            attributes: {
                error: e.message
            }
        })
    }
}

export const deleteUser = async (user) => {
    try {
        const response = await API.graphql(
            graphqlOperation(mutations.deleteUser, { user })
        );
        assertErrors(response);
        return response.data.deleteUser;
    } catch (e) {
        Analytics.record({
            name: 'deleteUserError',
            attributes: {
                error: e.message
            }
        })
    }
}

export const createScore = async (user) => {
    try {
        const response = await API.graphql(
            graphqlOperation(mutations.createScore, { user })
        );
        assertErrors(response);
        return response.data.createScore;
    } catch (e) {
        Analytics.record({
            name: 'createScoreError',
            attributes: {
                error: e.message
            }
        })
    }
}

export const deleteScore = async (user) => {
    try {
        const response = await API.graphql(
            graphqlOperation(mutations.deleteScore, { user })
        );
        assertErrors(response);
        return response.data.deleteScore;
    } catch (e) {
        Analytics.record({
            name: 'deleteScoreError',
            attributes: {
                error: e.message
            }
        })
    }
}