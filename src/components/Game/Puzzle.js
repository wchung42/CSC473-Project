import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import games from './games.json';
import './Game.css';
import Endgame from './Endgame';
import Answer from './Answer';
import Question from './Question';

class Puzzle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: this.props.gameId,
            questionIndex: 1,
            // image change
            imageIndex: 1,
            hintCount: 0,
            usedHint: false,
            latitude: null,
            longitude: null,
            // game ends when last question is completed
            gameState: true,
            win: false,
            timeStopper: 0 // used to stop timer

        }
        this.getAnswer = this.getAnswer.bind(this);
        this.getHint = this.getHint.bind(this);
    }
    //this function is to get answer from NUMBER TYPE
    getAnswer(e) {
        let userAnswer = e.target.value;
        console.log("userAnswer", userAnswer)
        let currentGameIndex = this.state.index;
        let currentQuestionIndex = this.state.questionIndex;
        let answer = games[currentGameIndex].Answers[currentQuestionIndex];

        //if the answer is correct
        if (userAnswer.toLowerCase() == answer.toLowerCase()) {
            //else moving to the next question
            console.log("right answer");
            this.setState({
                questionIndex: currentQuestionIndex + 1,
                imageIndex: currentQuestionIndex + 1,
                usedHint: false
            })
            //if this is the last question then End game
            if (currentQuestionIndex == games[currentGameIndex].Total_Questions) {
                this.setState({
                    gameState: false,
                    win: true
                }); console.log("End of game");
            }
        }
        //wrong answer => reset the current value of the pound button
        else {
            console.log("Wrong Answer")
            if (document.getElementById("answerBox")) {
                document.getElementById("answerBox").value = "";
                document.getElementById("submitBttn").value = "";
            }
            if (document.getElementById("pound")) {
                document.getElementById("pound").value = "";
            }
        }
    }

    getHint() {
        let localIndex = this.state.index;
        let localQuestionIndex = this.state.questionIndex;
        let totalHint = games[localIndex].Total_Hint;
        let hintCount = this.state.hintCount;
        let hintArea = document.getElementById("hint");
        let usedHint = this.state.usedHint;
        if (hintCount < totalHint && !usedHint) {
            hintCount += 1;
            hintArea.innerText = games[localIndex].Hint[localQuestionIndex];
            this.setState({
                hintCount: hintCount,
                usedHint: true
            })
        }
        else if (usedHint) {
            hintArea.innerText = games[localIndex].Hint[localQuestionIndex];
        }
        else {
            hintArea.innerText = "Sorry You've Run Out Of Hint! NOW USE YOUR DAMN BRAIN"
        }
        if (localQuestionIndex + 1 > games[localIndex].total_questions) {
            console.log("Hint button timeout not necessary");
        } else {
            document.getElementById("hintBttn").disabled = true;
            // document.getElementById("hintBttn").style.backgroundColor = "gray";
            setTimeout(function () {
                document.getElementById("hintBttn").disabled = false;
            }, 2000)
        }
    }

    // when state changes, check to see if the game has ended
    // stop timer when game is completed
    componentDidUpdate() {
        if (this.state.win && this.state.timeStopper === 0) {
            this.setState({ timeStopper: 1 })
            this.props.gameHandler();
        }
    }

    render() {
        // game states - playing or end game
        if (!this.state.gameState) {
            const winPage = <Endgame outcome={this.state.win} />;
            return (
                <div>
                    {/* display win page when game is completed before timer hits 0 */}
                    {winPage}
                </div>
            )
        }
        else {
            let questionPage = <Question id={this.state.index} qId={this.state.questionIndex} iId={this.state.imageIndex} />;
            let answerPage = <Answer id={this.state.index} qId={this.state.questionIndex} action={this.getAnswer} />;
            return (
                <div className="game">
                    <section className="middle">

                        <div className="text-center">
                            {questionPage}
                            <br /><br /><br />
                            {answerPage}
                            <p id="hint" className="questN" value=""></p>
                            <div className = "hint">
                                <button id="hintBttn" className="btn-lg btn-warning" type="button" onClick={this.getHint}>
                                    {games[this.state.index].Total_Hint - this.state.hintCount} Hint(s) Left</button>
                            </div>
                        </div>
                    </section>
                </div>

            )
        }

    }


}

export default Puzzle;

  // position = async () => {
  //   await navigator.geolocation.getCurrentPosition(
  //     position => this.setState({
  //       latitude: position.coords.latitude,
  //       longitude: position.coords.longitude
  //     }), newState => console.log(newState))

  //   console.log(this.state.latitude, this.state.longitude)
  // }




// getAnswer() {
//     let localIndex = this.state.index;
//     let localQuestionIndex = this.state.questionIndex;
//     let qIndex = localQuestionIndex + 1;  //INDICATE THE NEXT QUESTION
//     let imgIndex = qIndex; // IMAGE INDEX 
//     let answer = games[localIndex].answers[localQuestionIndex];
//     let answerBox = document.getElementById("answer");
//     let userAnswer = answerBox.value.toLowerCase(); //USER ANSWER = VALUE OF ANSWER BOX

//     // console.log(answer);

//     //correct answer
//     if (userAnswer == answer.toLowerCase()) {
//         document.getElementById("result").innerText = "Correct";
//         answerBox.style.borderColor = "palegreen";
//         answerBox.value = "";
//         document.getElementById("hint").innerText = "";
//         this.setState({
//             questionIndex: qIndex,
//             imageIndex: imgIndex,
//             usedHint: false
//         })
//         // check if for more questions
//         if (localQuestionIndex == games[localIndex].total_questions) {
//             this.setState({
//                 gameState: false,
//                 win: true
//             })
//             console.log("End of game");
//         }
//         // console.log(this.state.questionIndex);
//     }
//     else {//wrong answer
//         answerBox.style.borderColor = "salmon";
//         document.getElementById("result").innerText = "Wrong";
//         answerBox.value = "";
//         // console.log(this.state.questionIndex);
//     }
//     if (qIndex > games[localIndex].total_questions) {
//         console.log("Submit button time out not necessary");
//     } else {
//         document.getElementById("submitBttn").disabled = true;
//         // document.getElementById("hintBttn").style.backgroundColor = "gray";
//         setTimeout(function () {
//             document.getElementById("submitBttn").disabled = false;
//         }, 2000)
//     }
// }