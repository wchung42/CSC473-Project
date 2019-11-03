import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import games from './games.json';
// import getAnswer from './gameFunctions.js';
import './Game.css'
import DrawerToggleButton from '../SideDrawerMenu/DrawerToggleButton';


class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      questionIndex: 1,
      hintCount: 0,
      usedHint: false,
      latitude: null,
      longitude: null,
    }
    this.getAnswer = this.getAnswer.bind(this);
    this.getHint = this.getHint.bind(this);
  }

  getAnswer() {
    let localIndex = this.state.index;
    let localQuestionIndex = this.state.questionIndex;
    let qIndex = localQuestionIndex + 1;  //INDICATE THE NEXT QUESTION
    let answer = games[localIndex].answers[localQuestionIndex];
    let answerBox = document.getElementById("answer");
    let userAnswer = answerBox.value; //USER ANSWER = VALUE OF ANSWER BOX
    // console.log(answer);
    if (userAnswer == answer) {
      document.getElementById("result").innerText = "Correct";
      answerBox.style.borderColor = "palegreen";
      answerBox.value = "";
      this.setState({
        questionIndex: qIndex,
        usedHint: false
      })
      // console.log(this.state.questionIndex);
    }
    else {
      answerBox.style.borderColor = "salmon";
      document.getElementById("result").innerText = "Wrong";
      answerBox.value = "";
      // console.log(this.state.questionIndex);
    }
  }

  getHint() {
    let localIndex = this.state.index;
    let localQuestionIndex = this.state.questionIndex;
    let totalHint = games[localIndex].total_hint;
    let hintCount = this.state.hintCount;
    let hintArea = document.getElementById("hint");
    let usedHint = this.state.usedHint;
    if (hintCount < totalHint && !usedHint) {
      hintCount += 1;
      hintArea.innerText = games[localIndex].hint[localQuestionIndex];
      this.setState({
        hintCount: hintCount,
        usedHint: true
      })
    }
    else if (usedHint) {
      hintArea.innerText = games[localIndex].hint[localQuestionIndex];
    }
    else {
      hintArea.innerText = "Sorry You've Run Out Of Hint! NOW USE YOUR DAMN BRAIN"
    }
  }

  navbar = props => (
    <header className="navbarGame">
      <nav className="navigation">
        <div className="nav-logo"><a href="/"><img src={require("../Navbar/escapeInverted.png")} alt="logo" /></a></div>
        <div className="spaceGame-btw-logo-items" />
        <button className="fa fa-bars fa-4x " onClick={props.click}>
        </button>
      </nav>
    </header>
  );

  // position = async () => {
  //   await navigator.geolocation.getCurrentPosition(
  //     position => this.setState({
  //       latitude: position.coords.latitude,
  //       longitude: position.coords.longitude
  //     }), newState => console.log(newState))

  //   console.log(this.state.latitude, this.state.longitude)
  // }

  //Want to load the game in here based on the name
  render = () => {

    return (
      <div className="Game">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
          integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
          crossOrigin="anonymous" />
        <div>
          <this.navbar drawerClickHandler={this.drawerToggleClickHandler} />
        </div>
        <section className="middle">
          <body>
            <br />

            <div className="exit">
              <button className="btn-large btn-danger" type="button">&nbsp; Exit &nbsp;</button>
            </div>
            <div className="text-center">

              <h1 className="gameTitle">
                {games[this.state.index].Title} Challenge
              </h1>
              <p className="text-center questN">
                Question {this.state.questionIndex}
              </p>
              <p className="text-center quest">
                {games[this.state.index].questions[this.state.questionIndex]}
              </p>

              <br />
              <br />
              <img className="" src="https://static01.nyt.com/images/2016/05/28/nyregion/29CUNY1/29CUNY1-articleLarge.jpg?quality=75&auto=webp&disable=upscale" />
              <br />
              <br />
              <br />
              <input id="answer" type="text" className="text-center textbox" />
              <br />
              <p id="hint" className="questN"></p>
              <br />
              <br />
              <div >
                <button className="btn-large  btn-success" type="button" onClick={this.getAnswer}>&nbsp; Submit &nbsp;</button>
                <p id="result" className="questN"></p>
                <br />
                <br />

                <button className="btn-large btn-warning " type="button" onClick={this.getHint}>
                  {games[this.state.index].total_hint - this.state.hintCount} Hint(s) Left</button>
              </div>
            </div>

            <p className="cr text-center"><strong>Escape Team © 2019</strong></p>
          </body>
        </section>

      </div>
    );
  }
}


export default Game;