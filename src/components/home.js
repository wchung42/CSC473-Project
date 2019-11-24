import React, { Component } from 'react';
import games from './Game/games.json';
import { Connect } from 'aws-amplify-react';
import { graphqlOperation } from 'aws-amplify';

//declare query to listGame
const listGames = `query listGames{
  listGames(limit: 5){
    items{
      id
      Title
      Location
      Difficulty
      Story
      Questions
      Answer
    }
  }
}`

class gamesList extends React.Component {
  gameInfo() {
    return this.props.games.map(game =>
      <li key={game.id}>
        {game.Title}
      </li>);
  }
}

class Home extends React.Component {
  render() {
    console.log("Home Executed")
    return (
      <Connect query={graphqlOperation(listGames)}>
        {({ data, loading, errors }) => {
          if (loading) { return <div>Loading...</div>; }
          if (!data.listGames) console.log("Error!");
          console.log(data.listGames.items.map(game => console.log(game.id + game.Title)));
          // return <gamesList games={data.listGames.items} />;
        }}
      </Connect>
    );
  }
}

export default Home;