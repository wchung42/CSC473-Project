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
    TimeLimit
    Players
    Finished
    Total_Questions
    Total_Hints
    Question {
      items {
        id
        Instruction
        QuestionGeo
        Question
        QuestionAid
        AnswerType
        Answer
        AnswerAid
        Hint
      }
      nextToken
    }
    Rating
    Review
    AidStuffs
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
      TimeLimit
      Players
      Finished
      Total_Questions
      Total_Hints
      Question {
        nextToken
      }
      Rating
      Review
      AidStuffs
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
      TimeLimit
      Players
      Finished
      Total_Questions
      Total_Hints
      Question {
        nextToken
      }
      Rating
      Review
      AidStuffs
    }
    Instruction
    QuestionGeo
    Question
    QuestionAid
    AnswerType
    Answer
    AnswerAid
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
        TimeLimit
        Players
        Finished
        Total_Questions
        Total_Hints
        Rating
        Review
        AidStuffs
      }
      Instruction
      QuestionGeo
      Question
      QuestionAid
      AnswerType
      Answer
      AnswerAid
      Hint
    }
    nextToken
  }
}
`;
