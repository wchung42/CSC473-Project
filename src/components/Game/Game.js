import React, { Component, ReactDOM } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Game.css';
import Timer from './Timer';  // timer component that determines state of game
import games from './games.json'; // get the game title
import Panel from './gamePanel';
import { withAuthenticator, Connect } from 'aws-amplify-react';
// import * as queries from '../../graphql/queries.js';
import Amplify, { Analytics, API, Auth, graphqlOperation, Storage } from 'aws-amplify';
import gql from 'graphql-tag';
import { getCurrentLocation, getDistanceFromLatLonInKm } from './util.js'; // import geolocation helper functions
import { ConsoleLogger } from '@aws-amplify/core';

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
      AtQuestion
      QuestionVisualAid
      Hints
      AnswerType
      Answers  
      GeoLocation      
    }
  }
}`;

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      games: [],
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
      gameAtQuestion: "",
      gameQuestions: [],
      gameQuestionVisualAids: [],
      gameHints: [],
      gameAnswerType: [],
      gameAnswers: [],
      gameGeoLocation: [],
      latitude: null,
      longitude: null,
      gameReady: false,
      gameSynopsis: 0, // 0: don't display game synopsis ; 1: display synopsis
      gameStart: 0 // 0: start button clicked, start game ; 1: stay on synopsis page
    };
    this.getGameId = this.getGameId.bind(this);
    this.startGame = this.startGame.bind(this);
    this.getPosition = this.getPosition.bind(this);
  }
  // updateGameInfo(Games)
  //onclick will getGameId and then edit all states
  async componentDidMount() {
    try {
      const apiData = await API.graphql(graphqlOperation(ListGames));
      const gamesTest = apiData.data.listGames.items;
      this.setState({ games: gamesTest.reverse() });
    } catch (error) { console.log(error) }
  }

  async getGameId(ev) {

    let id = ev.currentTarget.value
    await this.setState({
      gameID: id,
    })
    await this.setState({
      gameTitle: this.state.games[id].Title,
      gameThumbnail: this.state.games[id].Thumbnail,
      gameLocation: "CCNY",
      gameDifficulty: this.state.games[id].Difficulty,
      gameStory: this.state.games[id].Story,
      gameTimeLimt: "1800",
      gameTotalQuestions: this.state.games[id].Total_Questions,
      gameTotalHints: this.state.games[id].Total_Hints,
      gameQuestions: this.state.games[id].Questions,
      gameAtQuestion: this.state.games[id].AtQuestion,
      gameQuestionVisualAids: this.state.games[id].QuestionVisualAid,
      gameHints: this.state.games[id].Hints,
      gameAnswerType: this.state.games[id].AnswerType,
      gameAnswers: this.state.games[id].Answers,
      gameGeoLocation: "",
      gameReady: true,
      gameSynopsis: 1
    })
    console.log("Games0: ", this.state.games[0])
    console.log("Games0 Question: ", this.state.games[0].Questions)
    console.log("Games1: ", this.state.games[1])
    console.log("Id got back from user is: ", id)
    console.log("Game Id is", this.state.gameID)
    console.log("Game Title: ", this.state.gameTitle)
    console.log("At Question: ", this.state.gameAtQuestion)
    console.log("hints of this game: ", this.state.gameHints)
    console.log("questions of this game: ", this.state.gameQuestions)
    console.log("Answers of this games: ", this.state.gameAnswers)
  }

  startGame() {
    // watch current location
    let current, target, dist;
    let currentState = this;

    function success(position) {
      let userCoords = position.coords;
      console.log(`latitude: ${userCoords.latitude} | longitude: ${userCoords.longitude}`)
      // calculate distance to target
      dist = getDistanceFromLatLonInKm(userCoords.latitude, userCoords.longitude, target.latitude, target.longitude);
      console.log('Distance: ' + dist)
      // player must be within 10 meters of starting point for game to begin
      if (dist <= 0.09) {
        console.log('You are here!');
        // stop watching player location
        navigator.geolocation.clearWatch(current)
        // testtt
        console.log('starting game');
        currentState.setState({
          gameSynopsis: 0,
          gameStart: 1
        })
      } else {
        document.getElementById('notAtLocationIndicator').innerText = 'You are not at the starting location of the game.';
        console.log('not there yet');
        
      }
    }

    // error callback
    function error(err) {
      console.warn('Error(' + err.code + '): ' + err.message);
    }

    // this is just a test location for now -- in front of webb statue
    target = {
      latitude: 40.820583,
      longitude: -73.949105
    }

    // start watching
    current = navigator.geolocation.watchPosition(success, error, { enableHighAccuracy: true });
  }


  getPosition() {
    const success = async (pos) => {
      await this.setState({
        longitude: pos.coords.latitude,
        latitude: pos.coords.longitude
      })
      console.log("Inside", this.state.latitude, this.state.longitude);
    }
    const error = (err) => { console.warn(`ERROR(${err.code}): ${err.message}`); }
    navigator.geolocation.getCurrentPosition(success, error);
  }

  //This will load list of games in the database (from __games__ )
  render = () => {
    // id, thumbnail, title,location, capacity, timelimite, difficulty
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

          <button onClick={this.getPosition} className='Location'>Location</button>
          <br />

          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
            integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
            crossOrigin="anonymous" />
          <br />
          <div className="exit">
            <button className="btn btn-lg btn-danger" type="button"><a href="/">&nbsp; Exit &nbsp;</a></button>
          </div>
          <div className="game-list">
            <Panel games={this.state.games} func={this.getGameId} />
          </div>
          <br />
        </div>
      )
    }
    // Display game Story
    else if (this.state.gameReady && (this.state.gameSynopsis === 1) && (this.state.gameStart === 0)) {
      return (
        <div className="Game">
          <div className="exit">
            <a href="/Game" className="btn btn-lg btn-danger nounderline" type="button">&nbsp; Exit &nbsp;</a>
          </div>
          <div className="synopsis">
            <h1>{this.state.games[this.state.gameID].Story}</h1>
          </div>
          <div className="start">
            <button id="start-btn" className="btn btn-lg btn-success" type="button" onClick={this.startGame}>&nbsp; Start &nbsp;</button>
          </div>
          <div id="notAtLocationIndicator">
            <p></p>
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
            <Timer
              gameID={this.state.gameID}
              gameTitle={this.state.gameTitle}
              gameThumbnail={this.state.gameThumbnail}
              gameLocation={this.state.gameLocation}
              gameDifficulty={this.state.gameDifficulty}
              gameStory={this.state.gameStory}
              gameTotalQuestions={this.state.gameTotalQuestions}
              gameTotalHints={this.state.gameTotalHints}
              gameAtQuestion={this.state.gameAtQuestion}
              gameQuestions={this.state.gameQuestions}
              gameQuestionVisualAids={this.state.gameQuestionVisualAids}
              gameHints={this.state.gameHints}
              gameAnswerType={this.state.gameAnswerType}
              gameAnswers={this.state.gameAnswers}
              gameGeoLocation={this.state.gameGeoLocation}
              startCount={this.state.gameTimeLimt} />
          </div>
          <br />
        </div>
      );
    }
  }
}



// export default withAuthenticator(Game);
export default Game;

