/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGame = `subscription OnCreateGame {
  onCreateGame {
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
export const onUpdateGame = `subscription OnUpdateGame {
  onUpdateGame {
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
export const onDeleteGame = `subscription OnDeleteGame {
  onDeleteGame {
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
export const onCreateQuestion = `subscription OnCreateQuestion {
  onCreateQuestion {
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
export const onUpdateQuestion = `subscription OnUpdateQuestion {
  onUpdateQuestion {
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
export const onDeleteQuestion = `subscription OnDeleteQuestion {
  onDeleteQuestion {
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
