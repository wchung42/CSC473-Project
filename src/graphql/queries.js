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
    Time_Left
    Geo_Location
    Players
    Finished
    In_Progress
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
      Time_Left
      Geo_Location
      Players
      Finished
      In_Progress
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
      Time_Left
      Geo_Location
      Players
      Finished
      In_Progress
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
        Time_Left
        Geo_Location
        Players
        Finished
        In_Progress
        Total_Questions
        Total_Hints
        Hint_Count
        At_Question
        ReviewCount
        Average_Rating
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
      Time_Left
      Geo_Location
      Players
      Finished
      In_Progress
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
        Time_Left
        Geo_Location
        Players
        Finished
        In_Progress
        Total_Questions
        Total_Hints
        Hint_Count
        At_Question
        ReviewCount
        Average_Rating
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
export const getUserProfile = `query GetUserProfile($id: ID!) {
  getUserProfile(id: $id) {
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
        In_Progress
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
export const listUserProfiles = `query ListUserProfiles(
  $filter: ModelUserProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getRecord = `query GetRecord($id: ID!) {
  getRecord(id: $id) {
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
      In_Progress
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
export const listRecords = `query ListRecords(
  $filter: ModelRecordFilterInput
  $limit: Int
  $nextToken: String
) {
  listRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        Time_Left
        Geo_Location
        Players
        Finished
        In_Progress
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
    nextToken
  }
}
`;
