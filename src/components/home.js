import React, { Component } from 'react';
import { Connect } from 'aws-amplify-react';
import { graphqlOperation } from 'aws-amplify';
import Amplify from 'aws-amplify';
import aws_exports from '../aws-exports';

Amplify.configure(aws_exports);
console.log(aws_exports)
//declare query to listGames
const ListGames = `query listGames {
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
      // <Connect query={graphqlOperation(ListGames)}>
      //   {({ data, loading, errors }) => {
      //     if (loading) { return <div>Loading...</div>; }
      //     if (errors) console.log(errors);
      //     console.log(data.listGames);
      //     return <GamesList games={data.listGames.items} />
      //   }}
      // </Connect>
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}
export default home;