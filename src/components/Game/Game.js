import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Game.css';
import Timer from './Timer';  // timer component that determines state of game
import Panel from './gamePanel';
import { withAuthenticator } from 'aws-amplify-react';
import * as subscriptions from '../../graphql/subscriptions';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
import { getDistanceFromLatLonInKm } from './util.js'; // import geolocation helper functions
// import { List } from 'material-ui';

//each time the user press Play => mutationUpdate players
const ListGames = `query ListGames{
  listGames{
    items{
      id
      Title
      Thumbnail
      Location
      Geo_Location
      Difficulty
      Capacity
      Story
      Time_Limit
      ReviewCount
      Average_Rating
      Time_Left
      In_Progress
    }
  }
}`;


class Game extends Component {
  _isMounted = false;
  constructor(props) {
    super(props)
    this.state = {
      gameUserName: "",
      games: [],
      gameID: 0,
      gameTitle: "",
      gameThumbnail: "#",
      gameLocation: "CCNY",
      gameDifficulty: 3,
      gameStory: "",
      gameCapacity: "",
      gameTimeLimit: "",
      gameTimeLeft: "",
      gameFinished: false,
      gameInProgress: "",
      gameTotalQuestions: "",
      gameTotalHints: "",
      gameHintCount: "",
      gameAtQuestion: "",
      gamePlayers: [],
      gameQuestions: [],
      gameQuestionGeos: [],
      gameQuestionVisualAids: [],
      gameHints: [],
      gameAnswerType: [],
      gameAnswers: [],
      gameReviewCount: "",
      gameReviews: [],
      gameAverageRating: "",
      latitude: 0,
      longitude: 0,
      gameReady: false,
      gameVisualAid0: [],
      gameVisualAid1: [],
      gameVisualAid2: [],
      gameVisualAid3: [],
      gameSynopsis: 0, // 0: don't display game synopsis ; 1: display synopsis
      gameStart: 0 // 0: start button clicked, start game ; 1: stay on synopsis page
    };
    this.getGameId = this.getGameId.bind(this);
    this.startGame = this.startGame.bind(this);
    this.getPosition = this.getPosition.bind(this);
    // this.gameUpdateSubscriptions = null;
  }

  async componentDidMount() {
    this._isMounted = true;
    try {
      const apiData = await API.graphql(graphqlOperation(ListGames));
      const gamesTest = apiData.data.listGames.items;
      this.setState({ games: gamesTest.reverse() });
      console.log(this.state.games);
    } catch (error) { console.log(error) }

    Auth.currentAuthenticatedUser()
      .then(user =>
        this.setState({
          gameUserName: user.username

        })
        // console.log(user)
      )
      .catch(err => console.log(err))

    try {
      this.gameUpdateSubscriptions = await API.graphql(graphqlOperation(subscriptions.onUpdateGame, { id: this.state.gameID })).subscribe({
        next: (gameData) => {
          console.log("SUBSCRIPTION DATA", gameData.value.data.onUpdateGame.At_Question);
          if (gameData.value.data.onUpdateGame.id === this.state.gameID) {
            this.setState({
              gameAtQuestion: gameData.value.data.onUpdateGame.At_Question,
              gameFinished: gameData.value.data.onUpdateGame.Finished,
              gameCapacity: gameData.value.data.onUpdateGame.Capacity,
              gamePlayers: gameData.value.data.onUpdateGame.Players,
              gameHintCount: gameData.value.data.onUpdateGame.Hint_Count,
              gameTimeLeft: gameData.value.data.onUpdateGame.Time_Left,
              gameInProgress: gameData.value.data.onUpdateGame.In_Progress
            })
            console.log("list of Players in-game: ", this.state.gamePlayers)
          }
        }
      });
    } catch (errorOfSub) { console.log(errorOfSub) }

  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  //onclick will getGameId and then edit all states
  async getGameId(ev) {
    let id = ev.currentTarget.value.toString();
    try {
      const apiData = await API.graphql(graphqlOperation(queries.getGame, { first: 50, id: id }));
      const localGame = apiData.data.getGame;
      console.log(localGame);
      let listQuestion = localGame.Questions.items.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
      console.log(listQuestion)
      await this.setState({
        gameID: localGame.id,
        gameTitle: localGame.Title,
        gameThumbnail: localGame.Thumbnail,
        gameLocation: localGame.Location,
        gameDifficulty: localGame.Difficulty,
        gameCapacity: localGame.Capacity,
        gamePlayers: localGame.Players,
        gameFinished: localGame.Finished,
        gameTimeLimit: localGame.Time_Limit,
        gameTimeLeft: localGame.Time_Left,
        gameInProgress: localGame.In_Progress,
        gameTotalQuestions: localGame.Total_Questions,
        latitude: localGame.Geo_Location[0],
        longitude: localGame.Geo_Location[1],
        gameTotalHints: localGame.Total_Hints,
        gameHintCount: localGame.Hint_Count,
        gameQuestions: listQuestion.map(item => item.Question),
        gameQuestionGeos: listQuestion.map(item => item.Question_Geo),
        gameQuestionVisualAids: listQuestion.map(item => item.Question_Aid),
        gameAnswerType: listQuestion.map(item => item.Answer_Type),
        gameVisualAid0: listQuestion.map(item => item.Answer_Aid0),
        gameVisualAid1: listQuestion.map(item => item.Answer_Aid1),
        gameVisualAid2: listQuestion.map(item => item.Answer_Aid2),
        gameVisualAid3: listQuestion.map(item => item.Answer_Aid3),
        gameAnswers: listQuestion.map(item => item.Answer),
        gameHints: listQuestion.map(item => item.Hint),
        gameReviewCount: localGame.ReviewCount,
        gameAverageRating: localGame.Average_Rating,
        gameStory: localGame.Story,
        gameAtQuestion: localGame.At_Question,
        gameReady: true,
        gameSynopsis: 1
      })
    } catch (error) { console.log(error) }

    const nQuestion = {
      id: this.state.gameID,
      Finished: false
    }
    try {
      await API.graphql(graphqlOperation(mutations.updateGame, { input: nQuestion }));
    } catch (errors) { console.log(errors) };

    console.log("Title of this game: ", this.state.gameTitle);
    console.log("Total Questions of this game: ", this.state.gameTotalQuestions);
    console.log("List of Questions of this game: ", this.state.gameQuestions);
    console.log("List of answers of this game: ", this.state.gameAnswers);
    console.log("Capacity of this game", this.state.gameCapacity);
    console.log("list of Player in game: ", this.state.gamePlayers);
    console.log("Geo Location of this game: ", this.state.longitude, this.state.latitude);
    console.log("Number of Rating of this game: ", this.state.gameReviewCount);
    console.log("Game Average Rating: ", this.state.gameAverageRating);
    console.log("Hint used: ", this.state.gameHintCount);
    console.log("Geo Location of Questions:", this.state.gameQuestionGeos);
  }

  async startGame() {
    // watch current location
    let current, dist;
    let currentState = this;
    let target = {
      latitude: this.state.latitude,
      longitude: this.state.longitude
    }
    console.log("long and lat of the game: ", target)
    function success(position) {
      let userCoords = position.coords;
      console.log(`latitude: ${userCoords.latitude} | longitude: ${userCoords.longitude}`)
      // calculate distance to target
      dist = getDistanceFromLatLonInKm(userCoords.latitude, userCoords.longitude, target.latitude, target.longitude);
      console.log('Distance: ' + dist)
      // player must be within 10 meters of starting point for game to begin
      if (dist <= 0.09) {
        // stop watching player location
        currentState.setState({
          gameSynopsis: 0,
          gameStart: 1,
        })
        navigator.geolocation.clearWatch(current)

        let userName = currentState.state.gameUserName;
        currentState.state.gamePlayers.push(userName);
        const newGameState = {
          id: currentState.state.gameID,
          Capacity: currentState.state.gameCapacity - 1,
          Players: currentState.state.gamePlayers,
        }
        try {  // update game when a user join the game: Capacity -1 && username added to list of players
          API.graphql(graphqlOperation(mutations.updateGame, { input: newGameState }));
        } catch (errors) { console.log(errors) }
      } else {
        document.getElementById('notAtLocationIndicator').innerText = 'You are not at the starting location of the game.';
        console.log('not there yet');
      }
    }

    // error callback
    function error(err) {
      console.warn('Error(' + err.code + '): ' + err.message);
    }
    // start watching
    current = await navigator.geolocation.watchPosition(success, error, { enableHighAccuracy: true });


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
          {/* <div className="exit">
            <button className="btn btn-lg btn-danger" type="button"><a href="/">&nbsp; Exit &nbsp;</a></button>
          </div> */}
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
        <div className="game-synopsis-container">
          <div className="back-button">
            <a href="/Game" className="nounderline"><p>Browse more games</p></a>
          </div>
          <div className='game-title'>
            <h1>{this.state.games[this.state.gameID].Title}</h1>
          </div>
          <br /><br />
          <div className='synopsis-inner-container'>
            <div className='section-title'>
              <h3><strong>Story</strong></h3>
            </div>
            <div className='section-divider'>
              <hr />
            </div>
            <div className="synopsis">
              <p>{this.state.games[this.state.gameID].Story}</p>
            </div>

            <div className='section-divider'>
              <hr />
            </div>
            <div className='section-title'>
              <h3><strong>Starting Location</strong></h3>
            </div>
            <div className='section-divider'>
              <hr />
            </div>
            <div className='section-title'>
              <h3><strong>Instructions</strong></h3>
            </div>

            <div className='instructions'>
              <p>
                In order to JOIN the game, head to the <strong>starting location</strong> as indicated above.
                Once there, the <strong>START</strong> button will turn green. Click "Start" to begin the game.
              </p>
              <br></br>
              {/* INSERT REVIEWS HERE BY QUERRYING REVIEWS WITH GIVEN GAME ID AND DISPLAY IT */}

            </div>
            <div className='section-divider'>
              <hr />
            </div>
            <div className="start">
              <button id="start-btn" className="btn btn-lg btn-success" type="button" onClick={this.startGame}>&nbsp; JOIN &nbsp;</button>
            </div>
            <div id="notAtLocationIndicator">
              <p></p>
            </div>
            <div className='section-title'>
              <h3><strong>Reviews</strong></h3>
            </div>
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
              key={this.state.gameAtQuestion + this.state.gameInProgress}
              gameUserName={this.state.gameUserName}
              gameID={this.state.gameID}
              gameTitle={this.state.gameTitle}
              gameThumbnail={this.state.gameThumbnail}
              gameLocation={this.state.gameLocation}
              gameDifficulty={this.state.gameDifficulty}
              gameStory={this.state.gameStory}
              gameFinished={this.state.gameFinished}
              gameInProgress={this.state.gameInProgress}
              gameTotalQuestions={this.state.gameTotalQuestions}
              gameTotalHints={this.state.gameTotalHints}
              gameHintCount={this.state.gameHintCount}
              gameAtQuestion={this.state.gameAtQuestion}
              gameQuestions={this.state.gameQuestions}
              gameQuestionGeos={this.state.gameQuestionGeos}
              gameQuestionVisualAids={this.state.gameQuestionVisualAids}
              gameHints={this.state.gameHints}
              gameAnswerType={this.state.gameAnswerType}
              gameAnswers={this.state.gameAnswers}
              gameAverageRating={this.state.gameAverageRating}
              gameReviewCount={this.state.gameReviewCount}
              gameVisualAid0={this.state.gameVisualAid0}
              gameVisualAid1={this.state.gameVisualAid1}
              gameVisualAid2={this.state.gameVisualAid2}
              gameVisualAid3={this.state.gameVisualAid3}
              gameTimeLimit={this.state.gameTimeLimit}
              startCount={this.state.gameTimeLeft} />
          </div>
          <br />
        </div>
      );
    }
  }
}



export default withAuthenticator(Game);
// export default Game;

