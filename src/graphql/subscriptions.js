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
export const onUpdateGame = `subscription OnUpdateGame {
  onUpdateGame {
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
export const onDeleteGame = `subscription OnDeleteGame {
  onDeleteGame {
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
export const onCreateReview = `subscription OnCreateReview {
  onCreateReview {
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
export const onUpdateReview = `subscription OnUpdateReview {
  onUpdateReview {
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
export const onDeleteReview = `subscription OnDeleteReview {
  onDeleteReview {
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
export const onCreateUserProfile = `subscription OnCreateUserProfile {
  onCreateUserProfile {
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
        Geo_Location
        Players
        Finished
        Total_Questions
        Total_Hints
        At_Question
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
export const onUpdateUserProfile = `subscription OnUpdateUserProfile {
  onUpdateUserProfile {
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
        Geo_Location
        Players
        Finished
        Total_Questions
        Total_Hints
        At_Question
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
export const onDeleteUserProfile = `subscription OnDeleteUserProfile {
  onDeleteUserProfile {
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
        Geo_Location
        Players
        Finished
        Total_Questions
        Total_Hints
        At_Question
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
export const onCreateRecord = `subscription OnCreateRecord {
  onCreateRecord {
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
export const onUpdateRecord = `subscription OnUpdateRecord {
  onUpdateRecord {
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
export const onDeleteRecord = `subscription OnDeleteRecord {
  onDeleteRecord {
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
