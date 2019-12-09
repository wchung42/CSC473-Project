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
export const updateGame = `mutation UpdateGame($input: UpdateGameInput!) {
  updateGame(input: $input) {
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
export const deleteGame = `mutation DeleteGame($input: DeleteGameInput!) {
  deleteGame(input: $input) {
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
export const createReview = `mutation CreateReview($input: CreateReviewInput!) {
  createReview(input: $input) {
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
export const updateReview = `mutation UpdateReview($input: UpdateReviewInput!) {
  updateReview(input: $input) {
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
export const deleteReview = `mutation DeleteReview($input: DeleteReviewInput!) {
  deleteReview(input: $input) {
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
