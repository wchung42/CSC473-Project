/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGame = `mutation CreateGame($input: CreateGameInput!) {
  createGame(input: $input) {
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
export const updateGame = `mutation UpdateGame($input: UpdateGameInput!) {
  updateGame(input: $input) {
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
export const deleteGame = `mutation DeleteGame($input: DeleteGameInput!) {
  deleteGame(input: $input) {
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
export const createQuestion = `mutation CreateQuestion($input: CreateQuestionInput!) {
  createQuestion(input: $input) {
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
export const updateQuestion = `mutation UpdateQuestion($input: UpdateQuestionInput!) {
  updateQuestion(input: $input) {
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
export const deleteQuestion = `mutation DeleteQuestion($input: DeleteQuestionInput!) {
  deleteQuestion(input: $input) {
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
