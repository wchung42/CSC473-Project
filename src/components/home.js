import React, { Component } from 'react';
// import games from './Game/games.json';
import { Connect } from 'aws-amplify-react';
import { graphqlOperation } from 'aws-amplify';

//declare query to listGames
const listGames = `query listGames {
  listGames(limit: 9999) {
      items {
        id
        Title
        Location
        Difficulty
        Story
        Questions
        Answers
      }
  }
}`;

class GamesList extends React.Component {
  gameItems() {
    console.log("Here", this.props.games);
    return this.props.games.map(game =>
      <li key={game.id}>
        {game.Title}
      </li>)
  }

  render() {
    return (
      <ul>
        {this.gameItems()}
      </ul>
    )
  }
}

class home extends React.Component {
  render() {
    return (
      <Connect query={graphqlOperation(listGames)}>
        {({ data, loading, errors }) => {
          if (loading) { return <div>Loading...</div>; }
          if (errors) console.log(errors);
          console.log(data.listGames);
          return <GamesList games={data.listGames.items} />
        }}
      </Connect>
    );
  }
}
export default home;