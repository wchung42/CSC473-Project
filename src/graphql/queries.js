export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    email
    scores {
      items {
        id
        name
        createdAt
        updatedAt
        status
      }
      nextToken
    }
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      email
      scores {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getScore = `query GetScore($id: ID!) {
  getScore(id: $id) {
    id
    name
    notes {
      items {
        number
        dot
        doubleDot
        line
        doubleLine
        curve
        row
        column
      }
      nextToken
    }
    user {
      id
      username
      email
      scores {
        nextToken
      }
    }
    createdAt
    updatedAt
    status
  }
}
`;
export const listScores = `query ListScores(
  $filter: ModelScoreFilterInput
  $limit: Int
  $nextToken: String
) {
  listScores(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      notes {
        nextToken
      }
      user {
        id
        username
        email
      }
      createdAt
      updatedAt
      status
    }
    nextToken
  }
}
`;
export const getNote = `query GetNote($id: ID!) {
  getNote(id: $id) {
    number
    dot
    doubleDot
    line
    doubleLine
    curve
    row
    column
    score {
      id
      name
      notes {
        nextToken
      }
      user {
        id
        username
        email
      }
      createdAt
      updatedAt
      status
    }
  }
}
`;
export const listNotes = `query ListNotes(
  $filter: ModelNoteFilterInput
  $limit: Int
  $nextToken: String
) {
  listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      number
      dot
      doubleDot
      line
      doubleLine
      curve
      row
      column
      score {
        id
        name
        createdAt
        updatedAt
        status
      }
    }
    nextToken
  }
}
`;