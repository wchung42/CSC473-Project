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
      Total_Questions
      Time_Limit
      ReviewCount
      Average_Rating
      Time_Left
      In_Progress
    }
  }
}`;

const questionTotal = `query`


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
    this.resetGame = this.resetGame.bind(this);
    this.exitGame = this.exitGame.bind(this);
    this.deleteGame = this.deleteGame.bind(this);
    // this.gameUpdateSubscriptions = null;
  }

  async componentDidMount() {
    this._isMounted = true;
    try {
      const apiData = await API.graphql(graphqlOperation(ListGames));
      const gamesTest = apiData.data.listGames.items;
      this.setState({ games: gamesTest.sort((a, b) => (a.id - b.id)) });
      console.log(this.state.games.length);
    } catch (error) { console.log("Errors in retrieving list of game: ", error) }

    Auth.currentAuthenticatedUser()
      .then(user =>
        this.setState({
          gameUserName: user.username
        })
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
    } catch (errorOfSub) { console.log("Errors of Subscription Data: ", errorOfSub) }

  }

  componentWillUnmount() {
    this._isMounted = false;
    console.log("GAME COMPONENT WILL UNMOUNT")
  }

  //onclick will getGameId and then edit all states
  async getGameId(ev) {
    let id = ev;
    try {
      const apiData = await API.graphql(graphqlOperation(queries.getGame, { first: 50, id: id }));
      const localGame = apiData.data.getGame;
      let listQuestion = localGame.Questions.items.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
      let review = localGame.Review.items;
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
        gameReviews: review,
        gameHints: listQuestion.map(item => item.Hint),
        gameReviewCount: localGame.ReviewCount,
        gameAverageRating: localGame.Average_Rating,
        gameStory: localGame.Story,
        gameAtQuestion: localGame.At_Question,
        gameReady: true,
        gameSynopsis: 1
      })
    } catch (errors) { console.log("Errors on Loading Game Info:", errors) }

    console.log("Capacity of this game", this.state.gameCapacity);
    console.log("list of Player in game: ", this.state.gamePlayers);
  }

  async resetGame(value) {
    const id = value;
    const resetGameData = {
      id: id,
      Capacity: 15,
      Time_Left: 1800,
      Finished: false,
      In_Progress: false,
      At_Question: 0,
      Hint_Count: 0,
      Players: [],
    }
    try {
      await API.graphql(graphqlOperation(mutations.updateGame, { input: resetGameData }))
    } catch (errors) { console.log("Errors on Reset Game", errors) }
  }

  async exitGame() {
    let username = this.state.gameUserName;
    let listPlayer = this.state.gamePlayers.filter(function (value) { return value !== username });
    const removePlayer = {
      id: this.state.gameID,
      Capacity: this.state.gameCapacity + 1,
      Players: listPlayer
    }
    try {
      const apidata = await API.graphql(graphqlOperation(mutations.updateGame, { input: removePlayer }));
      console.log("Remove Player data: ", apidata)
    } catch (error) { console.log("Error on Exit a game: ", error) }
  }

  async startGame() {
    // watch current location
    let current, dist;
    let currentState = this;
    let target = {
      latitude: this.state.latitude,
      longitude: this.state.longitude
    }
    function success(position) {
      let userCoords = position.coords;
      // calculate distance to target
      dist = getDistanceFromLatLonInKm(userCoords.latitude, userCoords.longitude, target.latitude, target.longitude);
      // player must be within 10 meters of starting point for game to begin
      if (dist >= 0.09) {
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
        } catch (errors) { console.log("Errors on Starting Game: ", errors) }
      } else {
        document.getElementById('notAtLocationIndicator').innerText = Math.round(dist * 1000) + 'm Away from the Starting Location';
      }
    }

    // error callback
    function error(err) {
      console.warn('Error(' + err.code + '): ' + err.message);
    }
    // start watching
    current = await navigator.geolocation.watchPosition(success, error, { enableHighAccuracy: true });
  }

  async deleteGame(Id, total) {
    let id = Id;
    let gameId = (id < 10) ? "00" + id : "0" + id;
    //delete game
    try {
      await API.graphql(graphqlOperation(mutations.deleteGame, { input: { id } }));
      console.log(id);
    } catch (error) { console.log("Errors on Deleting Game: ", error) }
    //delete questions connected to the game
    for (let i = 0; i < total; i++) {
      let questionId2nd = (i < 10) ? "00" + i : "0" + i;
      let questionId1st = gameId;
      let questionId = questionId1st + questionId2nd;
      console.log("Deleting Question: ", questionId);
      try {
        await API.graphql(graphqlOperation(mutations.deleteQuestion, { input: { id: questionId } }));
      } catch (error) { console.log("Error on deleting Question " + questionId + ": ", error) }

      questionId = "";
    }
    //delete reviews connected to the game
    try {
      let reviews = this.state.gameReviews.map(item => item.id);
      if (reviews != null) {
        reviews.forEach(item =>
          API.graphql(graphqlOperation(mutations.deleteReview, { input: { id: item } })))
      }
    } catch (error) { console.log("Error on deleteing Reviews: ", error) }
  }

  //This will load list of games in the database (from __games__ )
  render = () => {
    // id, thumbnail, title,location, capacity, timelimite, difficulty
    // go to game list page
    if (!this.state.gameReady && (this.state.gameSynopsis === 0) && (this.state.gameStart === 0)) {
      return (

        <div className="Game">

          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
            integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
            crossOrigin="anonymous" />
          <br />
          {/* <div className="exit">
            <button className="btn btn-lg btn-danger" type="button"><a href="/">&nbsp; Exit &nbsp;</a></button>
          </div> */}
          <div className="game-list">
            <Panel
              username={this.props.gameUserName}
              games={this.state.games}
              func={this.getGameId}
              resetFunc={this.resetGame}
              deleteFunc={this.deleteGame} />
          </div>
          <br />
        </div>
      )
    }
    // Display game Story
    else if (this.state.gameReady && (this.state.gameSynopsis === 1) && (this.state.gameStart === 0)) {
      let reviews = this.state.gameReviews ?
        this.state.gameReviews.map(item =>
          <h4 className="reviewSection">
            {item.review} - {item.username}
          </h4>) : <h4>This Game Doesn't Have any Reviews.</h4>

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
            </div>
            <div className='section-divider'>
              <hr />
            </div>
            <div className="start">
              <button id="hintBttn" className="btn btn-lg btn-success" type="button" onClick={this.startGame}>&nbsp; JOIN &nbsp;</button>
            </div>
            <div id="notAtLocationIndicator">
              <p></p>
            </div>
            <div className='section-title'>
              <h3><strong>Reviews</strong></h3>
              {reviews}
            </div>
          </div>
          <button
            hidden={!['admin', 'admin123', 'admin2'].includes(this.state.gameUserName) && this.state.gameID <= -1}
            id={"deleteBttn" + this.state.gameID}
            className="btn btn-lg btn-primary"
            type="button"
            onClick={() => this.deleteGame(this.state.gameID, this.state.gameTotalQuestions)}
          >
            DELETE
            </button>

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
            <button
              className="btn-lg btn-danger"
              type="button"
              onClick={this.exitGame}
            ><a href='/Game'>&nbsp;Exit&nbsp;</a></button>
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

