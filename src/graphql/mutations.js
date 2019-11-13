export const createUser = `mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
        id
        username
        email
    }
}`

export const updateUser = `mutation updateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
        id
        username
        email
    }
}`

export const deleteUser = `mutation deleteUser($user: DeleteUserInput!) {
    deleteUser(input: $input) {
        id
        username
        email
        scores
    }
}`

export const createScore = `mutation createScore($input: CreateScoreInput!) {
    createScore(input: $input) {
        id
        content
        createdDate
        updatedDate
        status
        scoreUserId
    }
}`

export const deleteScore = `mutation deleteScore($input: DeleteScoreInput!) {
    deleteScore(input: $input) {
        id
        content
        createdDate
        updatedDate
        status
        scoreUserId
    }
}`


