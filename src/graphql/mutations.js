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
    Time_Left
    Geo_Location
    Players
    Finished
    Total_Questions
    Total_Hints
    Hint_Count
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
    ReviewCount
    Average_Rating
    Aid_Stuffs
    Record {
      items {
        id
        time
      }
      nextToken
    }
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
    Time_Left
    Geo_Location
    Players
    Finished
    Total_Questions
    Total_Hints
    Hint_Count
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
    ReviewCount
    Average_Rating
    Aid_Stuffs
    Record {
      items {
        id
        time
      }
      nextToken
    }
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
    Time_Left
    Geo_Location
    Players
    Finished
    Total_Questions
    Total_Hints
    Hint_Count
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
    ReviewCount
    Average_Rating
    Aid_Stuffs
    Record {
      items {
        id
        time
      }
      nextToken
    }
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
      Time_Left
      Geo_Location
      Players
      Finished
      Total_Questions
      Total_Hints
      Hint_Count
      At_Question
      Questions {
        nextToken
      }
      Review {
        nextToken
      }
      ReviewCount
      Average_Rating
      Aid_Stuffs
      Record {
        nextToken
      }
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
      Time_Left
      Geo_Location
      Players
      Finished
      Total_Questions
      Total_Hints
      Hint_Count
      At_Question
      Questions {
        nextToken
      }
      Review {
        nextToken
      }
      ReviewCount
      Average_Rating
      Aid_Stuffs
      Record {
        nextToken
      }
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
      Time_Left
      Geo_Location
      Players
      Finished
      Total_Questions
      Total_Hints
      Hint_Count
      At_Question
      Questions {
        nextToken
      }
      Review {
        nextToken
      }
      ReviewCount
      Average_Rating
      Aid_Stuffs
      Record {
        nextToken
      }
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
      Time_Left
      Geo_Location
      Players
      Finished
      Total_Questions
      Total_Hints
      Hint_Count
      At_Question
      Questions {
        nextToken
      }
      Review {
        nextToken
      }
      ReviewCount
      Average_Rating
      Aid_Stuffs
      Record {
        nextToken
      }
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
      Time_Left
      Geo_Location
      Players
      Finished
      Total_Questions
      Total_Hints
      Hint_Count
      At_Question
      Questions {
        nextToken
      }
      Review {
        nextToken
      }
      ReviewCount
      Average_Rating
      Aid_Stuffs
      Record {
        nextToken
      }
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
      Time_Left
      Geo_Location
      Players
      Finished
      Total_Questions
      Total_Hints
      Hint_Count
      At_Question
      Questions {
        nextToken
      }
      Review {
        nextToken
      }
      ReviewCount
      Average_Rating
      Aid_Stuffs
      Record {
        nextToken
      }
    }
    rating
    review
    username
  }
}
`;
export const createUserProfile = `mutation CreateUserProfile($input: CreateUserProfileInput!) {
  createUserProfile(input: $input) {
    id
    Username
    Name
    Bio
    ProfilePic
    isAdmin
    record {
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
        Time_Left
        Geo_Location
        Players
        Finished
        Total_Questions
        Total_Hints
        Hint_Count
        At_Question
        ReviewCount
        Average_Rating
        Aid_Stuffs
      }
      user {
        id
        Username
        Name
        Bio
        ProfilePic
        isAdmin
      }
      time
    }
  }
}
`;
export const updateUserProfile = `mutation UpdateUserProfile($input: UpdateUserProfileInput!) {
  updateUserProfile(input: $input) {
    id
    Username
    Name
    Bio
    ProfilePic
    isAdmin
    record {
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
        Time_Left
        Geo_Location
        Players
        Finished
        Total_Questions
        Total_Hints
        Hint_Count
        At_Question
        ReviewCount
        Average_Rating
        Aid_Stuffs
      }
      user {
        id
        Username
        Name
        Bio
        ProfilePic
        isAdmin
      }
      time
    }
  }
}
`;
export const deleteUserProfile = `mutation DeleteUserProfile($input: DeleteUserProfileInput!) {
  deleteUserProfile(input: $input) {
    id
    Username
    Name
    Bio
    ProfilePic
    isAdmin
    record {
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
        Time_Left
        Geo_Location
        Players
        Finished
        Total_Questions
        Total_Hints
        Hint_Count
        At_Question
        ReviewCount
        Average_Rating
        Aid_Stuffs
      }
      user {
        id
        Username
        Name
        Bio
        ProfilePic
        isAdmin
      }
      time
    }
  }
}
`;
export const createRecord = `mutation CreateRecord($input: CreateRecordInput!) {
  createRecord(input: $input) {
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
      Time_Left
      Geo_Location
      Players
      Finished
      Total_Questions
      Total_Hints
      Hint_Count
      At_Question
      Questions {
        nextToken
      }
      Review {
        nextToken
      }
      ReviewCount
      Average_Rating
      Aid_Stuffs
      Record {
        nextToken
      }
    }
    user {
      id
      Username
      Name
      Bio
      ProfilePic
      isAdmin
      record {
        id
        time
      }
    }
    time
  }
}
`;
export const updateRecord = `mutation UpdateRecord($input: UpdateRecordInput!) {
  updateRecord(input: $input) {
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
      Time_Left
      Geo_Location
      Players
      Finished
      Total_Questions
      Total_Hints
      Hint_Count
      At_Question
      Questions {
        nextToken
      }
      Review {
        nextToken
      }
      ReviewCount
      Average_Rating
      Aid_Stuffs
      Record {
        nextToken
      }
    }
    user {
      id
      Username
      Name
      Bio
      ProfilePic
      isAdmin
      record {
        id
        time
      }
    }
    time
  }
}
`;
export const deleteRecord = `mutation DeleteRecord($input: DeleteRecordInput!) {
  deleteRecord(input: $input) {
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
      Time_Left
      Geo_Location
      Players
      Finished
      Total_Questions
      Total_Hints
      Hint_Count
      At_Question
      Questions {
        nextToken
      }
      Review {
        nextToken
      }
      ReviewCount
      Average_Rating
      Aid_Stuffs
      Record {
        nextToken
      }
    }
    user {
      id
      Username
      Name
      Bio
      ProfilePic
      isAdmin
      record {
        id
        time
      }
    }
    time
  }
}
`;
