import React, { Component, ReactDOM } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Game.css';
import Timer from './Timer';  // timer component that determines state of game
import games from './games.json'; // get the game title
import Panel from './gamePanel';
import { withAuthenticator, Connect } from 'aws-amplify-react';
import Amplify, { Analytics, API, Auth, graphqlOperation, Storage } from 'aws-amplify';

//each time the user press Play => mutationUpdate players
const ListGames = `query ListGames {
  listGames{
    items{
      id
      Title
      Thumbnail
      Location
      Difficulty
      Story
      TimeLimit
      Total_Questions
      Total_Hints
      Questions
      QuestionVisualAid
      Hints
      AnswerType
      Answers  
      GeoLocation      
    }
  }
}`;

// class GamesList extends React.Component {
//   gameItems() {
//     return this.props.games.map(game =>
//       <ul>
//         <li key={game.id}>
//           {game.Title}
//           <br />
//           {game.Story}
//           <br />
//           {game.GeoLocation[0]}
//           <br />
//           {game.GeoLocation[1]}
//           <br />
//           Question 1:{game.Questions[0]}
//           <br />
//           Question 2: {game.Questions[1]}
//           <br />
//           Question 3: {game.Questions[2]}
//         </li>
//       </ul>

//     )
//   }

//   render() {
//     return (
//       <div>
//         {this.gameItems()}
//       </div>
//     )
//   }
// }

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameID: 0,
      gameTitle: "",
      gameThumbnail: "#",
      gameLocation: "CCNY",
      gameDifficulty: 3,
      gameStory: "",
      gameCapacity: "",
      gameTimeLimt: "",
      gameTotalQuestions: "",
      gameTotalHints: "",
      gameQuestions: "",
      gameQuestionVisualAids: "",
      gameHints: "",
      gameAnswerType: "",
      gameAnswers: "",
      gameGeoLocation: "",
      latitude: null,
      longitude: null,
      gameReady: false,
      gameSynopsis: 0, // 0: don't display game synopsis ; 1: display synopsis
      gameStart: 0 // 0: start button clicked, start game ; 1: stay on synopsis page
    };
    this.getGameId = this.getGameId.bind(this);
    // this.updateGameInfo = this.updateGameInfo.bind(this);
    this.startGame = this.startGame.bind(this);
    // this.panelGenrator = this.panelGenrator.bind(this);
  }
  // updateGameInfo(Games)
  //onclick will getGameId and then edit all states in the DB
  getGameId(ev) {
    console.log(ev.currentTarget.value)
    let id = ev.currentTarget.value
    this.setState({
      gameID: id,
      gameTitle: games[id].Title,
      gameThumbnail: games[id].Thumbnail,
      gameLocation: "CCNY",
      gameDifficulty: games[id].Difficulty,
      gameStory: games[id].Story,
      gameTimeLimt: "1800",
      gameTotalQuestions: games[id].Total_Questions,
      gameTotalHints: games[id].Total_Hint,
      gameQuestions: games[id].Game_Story,
      gameQuestionVisualAids: games[id].Images,
      gameHints: games[id].Hint,
      gameAnswerType: games[id].Answer_Type,
      gameAnswers: games[id].Answers,
      gameGeoLocation: "",
      gameReady: true,
      gameSynopsis: 1
    })
    console.log(this.state.gameID)
    console.log(this.state.gameHints)
    console.log(this.state.gameLocation)
  }

  startGame() {
    console.log('starting game');
    this.setState({
      gameSynopsis: 0,
      gameStart: 1
    })
  }

  position = async () => {
    await navigator.geolocation.getCurrentPosition(
      position => this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }), newState => console.log(newState))

    console.log(this.state.latitude, this.state.longitude);
  }


  componentDidUpdate(prevProps) {
    if (prevProps.latitude !== this.props.latitude) {
      this.setState({
        latitude: this.props.latitude
      })
    }
  }
  //This will load list of games in the database (from __games__ )
  render = () => {
    // id, thumbnail, title,location, capacity, timelimite, difficulty
    let panelGenrator = () => {
      let listItems = games
        .map(item =>
          <Panel
            Id={item.Id}
            Thumbnail={item.Thumbnail}
            Title={item.Title}
            Difficulty={3}
            Location={"CCNY"}
            Capacity={"10"}
            TimeLimit={"3000"}
            func={this.getGameId} />)
      console.log(games)
      return <ol className="cardsX" >{listItems}</ol>
    }
    // go to game list page
    if (!this.state.gameReady && (this.state.gameSynopsis === 0) && (this.state.gameStart === 0)) {
      return (

        <div className="Game">
          {/* <Connect query={graphqlOperation(ListGames)}>
            {({ data, loading, errors }) => {
              if (loading) { return <div>Loading...</div>; }
              if (errors) console.log(errors);
              console.log(data.listGames);

              return <GamesList games={data.listGames.items} />
            }}
          </Connect> */}
          <br />
          <p className="Location">Click the button to get your coordinates.</p>

          <p className="Location">{this.state.latitude} {this.state.longitude}</p>

          <button onClick={this.position} className='Location'>Location</button>
          <br />

          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
            integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
            crossOrigin="anonymous" />
          <br />
          <div className="exit">
            <button className="btn btn-lg btn-danger" type="button"><a href="/">&nbsp; Exit &nbsp;</a></button>
          </div>
          <div className="game-list">
            <Panel games={games} func={this.getGameId} />
          </div>


          <br />
        </div>
      )
    }
    // go to game synopsis page
    else if (this.state.gameReady && (this.state.gameSynopsis === 1) && (this.state.gameStart === 0)) {
      return (
        <div className="Game">
          <div className="exit">
            <a href="/Game" className="btn btn-lg btn-danger nounderline" type="button">&nbsp; Exit &nbsp;</a>
          </div>
          <div className="synopsis">
            <h1>{games[this.state.gameID].Story}</h1>
          </div>
          <div className="start">
            <button id="start-btn" className="btn btn-lg btn-success" type="button" onClick={this.startGame}>&nbsp; Start &nbsp;</button>
          </div>

        </div>
      )
    }
    else if (this.state.gameReady && (this.state.gameSynopsis === 0) && (this.state.gameStart === 1)) {
      return (
        <div className="Game">
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
            integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
            crossOrigin="anonymous" />
          <br />
          <div className="exit">
            <button className="btn-lg btn-danger" type="button"><a href="/Game">&nbsp; Exit &nbsp;</a></button>
          </div>
          <div className="gameInterface">
            <Timer gameId={this.state.gameID} startCount="300" />
          </div>
          <br />
        </div>
      );
    }
  }
}


// export default withAuthenticator(Game);
export default Game;