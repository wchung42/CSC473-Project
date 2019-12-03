/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGame = `query GetGame($id: ID!) {
  getGame(id: $id) {
    id
    Title
    Thumbnail
    Location
    Difficulty
    Capacity
    Story
    Time_Limit
    Geo_Location
    Players
    Finished
    Total_Questions
    Total_Hints
    At_Question
    Questions {
      items {
        id
        Instruction
        Question_Geo
        Question
        Question_Aid
        Answer_Type
        Answer
        Answer_Aid0
        Answer_Aid1
        Answer_Aid2
        Answer_Aid3
        Hint
      }
      nextToken
    }
    Review {
      items {
        id
        rating
        review
        username
      }
      nextToken
    }
    Aid_Stuffs
  }
}
`;
export const listGames = `query ListGames(
  $filter: ModelGameFilterInput
  $limit: Int
  $nextToken: String
) {
  listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      Title
      Thumbnail
      Location
      Difficulty
      Capacity
      Story
      Time_Limit
      Geo_Location
      Players
      Finished
      Total_Questions
      Total_Hints
      At_Question
      Questions {
        nextToken
      }
      Review {
        nextToken
      }
      Aid_Stuffs
    }
    nextToken
  }
}
`;
export const getQuestion = `query GetQuestion($id: ID!) {
  getQuestion(id: $id) {
    id
    game {
      id
      Title
      Thumbnail
      Location
      Difficulty
      Capacity
      Story
      Time_Limit
      Geo_Location
      Players
      Finished
      Total_Questions
      Total_Hints
      At_Question
      Questions {
        nextToken
      }
      Review {
        nextToken
      }
      Aid_Stuffs
    }
    Instruction
    Question_Geo
    Question
    Question_Aid
    Answer_Type
    Answer
    Answer_Aid0
    Answer_Aid1
    Answer_Aid2
    Answer_Aid3
    Hint
  }
}
`;
export const listQuestions = `query ListQuestions(
  $filter: ModelQuestionFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      game {
        id
        Title
        Thumbnail
        Location
        Difficulty
        Capacity
        Story
        Time_Limit
        Geo_Location
        Players
        Finished
        Total_Questions
        Total_Hints
        At_Question
        Aid_Stuffs
      }
      Instruction
      Question_Geo
      Question
      Question_Aid
      Answer_Type
      Answer
      Answer_Aid0
      Answer_Aid1
      Answer_Aid2
      Answer_Aid3
      Hint
    }
    nextToken
  }
}
`;
export const getReview = `query GetReview($id: ID!) {
  getReview(id: $id) {
    id
    game {
      id
      Title
      Thumbnail
      Location
      Difficulty
      Capacity
      Story
      Time_Limit
      Geo_Location
      Players
      Finished
      Total_Questions
      Total_Hints
      At_Question
      Questions {
        nextToken
      }
      Review {
        nextToken
      }
      Aid_Stuffs
    }
    rating
    review
    username
  }
}
`;
export const listReviews = `query ListReviews(
  $filter: ModelReviewFilterInput
  $limit: Int
  $nextToken: String
) {
  listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      game {
        id
        Title
        Thumbnail
        Location
        Difficulty
        Capacity
        Story
        Time_Limit
        Geo_Location
        Players
        Finished
        Total_Questions
        Total_Hints
        At_Question
        Aid_Stuffs
      }
      rating
      review
      username
    }
    nextToken
  }
}
`;
