import React, { Component, ReactDOM } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Game.css';
import Timer from './Timer';  // timer component that determines state of game
import games from './games.json'; // get the game title
import Panel from './gamePanel';
import { withAuthenticator, Connect } from 'aws-amplify-react';
import * as subscriptions from '../../graphql/subscriptions';
import Amplify, { Analytics, API, Auth, graphqlOperation, Storage } from 'aws-amplify';
import gql from 'graphql-tag';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
import { getCurrentLocation, getDistanceFromLatLonInKm } from './util.js'; // import geolocation helper functions
// import { List } from 'material-ui';

//each time the user press Play => mutationUpdate players
const ListGames = `query ListGames{
  listGames{
    items{
      id
      Title
      Thumbnail
      Location
      Difficulty
      Capacity
      Story
      Time_Limit
      Rating
    }
  }
}`;

const GetGame = `query GetGameInfo($id: ID!){
  getGame(id:$id){
    id
    Title
    Thumbnail
    Location
    Difficulty
    Capacity
    Players
    Finished
    Geo_Location
    Story
    Time_Limit
    Total_Questions
    Total_Hints
    At_Question
    Questions{
      items{
        id
        Question
        Answer
        Hint
        Answer_Aid0
        Answer_Aid1
        Answer_Aid2
        Answer_Aid3
      }
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
      gameFinished: false,
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
    // this.gameUpdateSubscriptions = null;
  }

  async componentDidMount() {
    try {
      const apiData = await API.graphql(graphqlOperation(ListGames));
      const gamesTest = apiData.data.listGames.items;
      this.setState({ games: gamesTest.reverse() });
    } catch (error) { console.log(error) }
  }
  //retrieve infomation from DB
  // async componentDidMount() {
  //   try {
  //     const apiData = await API.graphql(graphqlOperation(ListGames));
  //     const gamesTest = apiData.data.listGames.items;
  //     this.setState({ games: gamesTest.reverse() });
  //   } catch (error) { console.log(error) }

  //   try {
  //     this.gameUpdateSubscriptions = await API.graphql(graphqlOperation(subscriptions.onUpdateGame, { id: this.state.gameID })).subscribe({
  //       next: (gameData) => {
  //         console.log("SUBSCRIPTION DATA", gameData.value.data.onUpdateGame.AtQuestion);
  //         if (gameData.value.data.onUpdateGame.id == this.state.gameID) {
  //           this.setState({
  //             gameAtQuestion: gameData.value.data.onUpdateGame.AtQuestion,
  //             gameFinished: gameData.value.data.onUpdateGame.Finished
  //           })
  //           console.log("new atquestion:", this.state.gameAtQuestion)
  //         }
  //         else {
  //           console.log("Game", gameData.value.data.onUpdateGame.id, " updated")
  //         }
  //       }

  //     });
  //   } catch (errorOfSub) { console.log(errorOfSub) }

  // }



  //onclick will getGameId and then edit all states
  async getGameId(ev) {
    let id = ev.currentTarget.value.toString();
    try {
      const apiData = await API.graphql(graphqlOperation(queries.getGame, { id: id }));
      // console.log(apiData);
      const localGame = apiData.data.getGame;
      console.log(localGame);
      let listQuestion = localGame.Questions.items.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
      console.log("List Of Questions: ", listQuestion);
      let AnswerType = listQuestion.map(item => item.Answer_Type)
      let Questions = listQuestion.map(item => item.Question)
      let Answers = listQuestion.map(item => item.Answer)
      let Hints = listQuestion.map(item => item.Hint)
      console.log("Questions: ", Questions)
      console.log("Answer Type: ", AnswerType)
      console.log("Answers: ", Answers)
      console.log("Hints: ", Hints)
      await this.setState({
        gameID: localGame.id,
        gameTitle: localGame.Title,
        gameThumbnail: localGame.Thumbnail,
        gameLocation: localGame.Location,
        gameDifficulty: localGame.Difficulty,
        gameCapacity: localGame.Capacity,
        gamePlayers: localGame.Players,
        gameFinished: localGame.Finished,
        gameTotalQuestions: localGame.Total_Questions,
        gameTotalHints: localGame.Total_Hints,
        gameQuestions: localGame.Questions,
        gameGeoLocation: localGame.Geo_Location,
        gameStory: localGame.Story,
        gameTimeLimt: localGame.Time_Limit,
        gameAtQuestion: localGame.At_Question,
        gameReady: true,
        gameSynopsis: 1
      })
      // await this.setState({ games: gamesTest.reverse() });
    } catch (error) { console.log(error) }
    // await this.setState({
    //   gameID: id,
    //   gameTitle: this.state.games[id].Title,
    //   gameThumbnail: this.state.games[id].Thumbnail,
    //   gameLocation: "CCNY",
    //   gameDifficulty: this.state.games[id].Difficulty,
    //   gameStory: this.state.games[id].Story,
    //   gameTimeLimt: "1800",
    //   gameFinished: this.state.games[id].Finished,
    //   gameTotalQuestions: this.state.games[id].Total_Questions,
    //   gameTotalHints: this.state.games[id].Total_Hints,
    //   gameQuestions: this.state.games[id].Questions,
    //   gameAtQuestion: this.state.games[id].AtQuestion,
    //   gameQuestionVisualAids: this.state.games[id].QuestionVisualAid,
    //   gameHints: this.state.games[id].Hints,
    //   gameAnswerType: this.state.games[id].AnswerType,
    //   gameAnswers: this.state.games[id].Answers,
    //   gameGeoLocation: "",

    // })
    // const nQuestion = {
    //   id: this.state.gameID,
    //   Finished: false
    // }
    // const nextQuestion = await API.graphql(graphqlOperation(mutations.updateGame, { input: nQuestion }));
    // console.log("Games0: ", this.state.games[0])
    // console.log("Games0 Question: ", this.state.games[0].Questions)
    // console.log("Games1: ", this.state.games[1])
    // console.log("Id got back from user is: ", id)
    // console.log("Game Id is", this.state.gameID)
    // console.log("Game Title: ", this.state.gameTitle)
    // console.log("At Question: ", this.state.gameAtQuestion)
    // console.log("hints of this game: ", this.state.gameHints)
    // console.log("questions of this game: ", this.state.gameQuestions)
    // console.log("Answers of this games: ", this.state.gameAnswers)
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
      if (dist >= 0.09) {
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
    //run the game
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
              key={this.state.gameAtQuestion}
              gameID={this.state.gameID}
              gameTitle={this.state.gameTitle}
              gameThumbnail={this.state.gameThumbnail}
              gameLocation={this.state.gameLocation}
              gameDifficulty={this.state.gameDifficulty}
              gameStory={this.state.gameStory}
              gameFinished={this.state.gameFinished}
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



export default withAuthenticator(Game);
// export default Game;

