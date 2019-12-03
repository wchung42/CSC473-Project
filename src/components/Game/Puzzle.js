import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Game.css';
import Endgame from './Endgame';
import Answer from './Answer';
import Question from './Question';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
//props this file needs to run: Id, TotalQuestion, TotalHints, AtQuestion, Questions, AnswerType, Answers, Hints, Long, Lad, TimeLimit
//Each time answers is right => mutation Update AtQuestion 
//When the game ends it will reset players pool => mutation updateGame(players: "")
//Rework Hint component a little bit
import getDistanceFromLatLonInKm from './util.js' // distance function
// still need this lat and long
// import games from './games.json';

class Puzzle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: this.props.gID,
            totalQuestions: this.props.gTotalQuestions,
            totalHints: this.props.gTotalHints,
            atQuestion: parseInt(this.props.gAtQuestion),
            questions: this.props.gQuestions,
            questionVisualAid: this.props.gQuestionVisualAids,
            answerType: this.props.gAnswerType,
            answers: this.props.gAnswers,
            hints: this.props.gHints,
            geoLocation: this.props.gGeoLocation,
            hintCount: 0,
            usedHint: false,
            latitude: null,
            longitude: null,
            // 0 when player not at location; 1 when player is
            atLocation: 0,
            // game ends when last question is completed
            gameState: true,
            win: false,
            timeStopper: 0 // used to stop timer

        }
        this.getAnswer = this.getAnswer.bind(this);
        this.getHint = this.getHint.bind(this);
    }
    //this function is to get answer from NUMBER TYPE
    async getAnswer(e) {
        let userAnswer = e.target.value.toString();
        console.log("userAnswer", userAnswer)
        console.log("current Index", this.state.index)
        console.log("hints", this.state.hints)
        console.log("current Questions Index", this.state.atQuestion)
        console.log('List of Answer', this.state.answers)
        console.log('Answer Type List: ', this.state.answerType)
        console.log('List of Question Visual Aid', this.state.questionVisualAid)
        let answer = this.state.answers[this.state.atQuestion];
        console.log(answer)
        //if the answer is correct
        if (userAnswer.toLowerCase() == answer.toLowerCase()) {
            //moving to the next question
            console.log("right answer");
            // clear hint space when moving to next question
            document.getElementById('hint').innerText = '';
            await this.setState({
                atQuestion: this.state.atQuestion + 1,
                usedHint: false,
                atLocation: 0
            })
            //if this is the last question then End game
            if (this.state.atQuestion == this.state.totalQuestions) {
                await this.setState({
                    gameState: false,
                    win: true
                }); console.log("End of game");
                const nQuestion = {
                    id: this.props.gID,
                    At_Question: 0,
                    Players: [],
                    Finished: true
                }
                //update the database when the answer is correct
                try {
                    const nextQuestion = await API.graphql(graphqlOperation(mutations.updateGame, { input: nQuestion }));
                    console.log("Next Question: ", nextQuestion);
                } catch (errors) { console.log(errors) };

            } else {
                if (document.getElementById("answerBox")) {
                    document.getElementById("answerBox").value = "";
                    document.getElementById("submitBttn").value = "";
                }
                if (document.getElementById("pound")) { document.getElementById("pound").value = ""; }

                const nQuestion = {
                    id: this.state.index,
                    At_Question: this.props.gAtQuestion + 1
                }
                const nextQuestion = await API.graphql(graphqlOperation(mutations.updateGame, { input: nQuestion }));
                console.log("Next Question: ", nextQuestion);
                console.log("this state index: ", this.state.index)
                console.log("Currently At Question: ", this.state.atQuestion)
            }
            //reset value of submit buttons

        }
        //wrong answer => reset the current value of the pound button
        else {
            console.log("Wrong Answer")
            if (document.getElementById("answerBox")) {
                // visual cue for wrong answer in text box
                document.getElementById('answerBox').style.border = "medium solid #FF0000";

                setTimeout(function () {
                    document.getElementById('answerBox').style.border = "thin solid #000000";
                }, 750)

                document.getElementById("answerBox").value = "";
                document.getElementById("submitBttn").value = "";
            }
            if (document.getElementById("pound")) {
                document.getElementById("pound").value = "";

                // visual cue for wrong answer in numpad
                document.getElementById('pound').style.background = '#FF0000';
                setTimeout(function () {
                    document.getElementById('pound').style.background = '#DDDDDD';
                }, 750);


            }
        }
    }

    getHint() {
        let questionIndex = this.state.atQuestion;
        let totalHint = this.state.totalHints;
        let hintCount = this.state.hintCount;
        let hintArea = document.getElementById("hint");
        let usedHint = this.state.usedHint;
        //Display hint and increment hint count
        if (hintCount < totalHint && !usedHint) {
            hintCount += 1;
            hintArea.innerText = this.state.hints[questionIndex];
            this.setState({
                hintCount: hintCount,
                usedHint: true
            })
        }
        //when the player press the hint button more than once for same question
        else if (usedHint) {
            hintArea.innerText = this.state.hints[questionIndex];
        }
        //when the users run out of hint
        else {
            hintArea.innerText = "Sorry You've Run Out Of Hint! NOW USE YOUR DAMN BRAIN"
        }
        //Timeout to prevent spamming
        if (questionIndex + 1 > this.state.totalQuestions) {
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
        // check location upon component update
        // let current, target, dist;
        // let currentState = this;

        // function success(position) {
        //     let userCoords = position.coords;
        //     console.log(`latitude: ${userCoords.latitude} | longitude: ${userCoords.longitude}`)

        //     // calculate distance to target
        //     dist = getDistanceFromLatLonInKm(userCoords.latitude, userCoords.longitude, target.latitude, target.longitude);
        //     console.log('Distance: ' + dist)

        //     // player must be within 20 meters of location for answer to appear
        //     if (dist <= 0.03) {
        //         console.log('You are here!');
        //         // stop watching player location
        //         navigator.geolocation.clearWatch(current)
        //         // allow question
        //         currentState.setState({
        //             atLocation: 1
        //         });
        //     }
        // }

        // // error callback
        // function error(err) {
        //     console.warn('Error(' + err.code + '): ' + err.message);
        // }

        // // TAKEN FROM THE JSON FILE FOR NOW
        // target = {
        //     latitude: 40.820583,
        //     longitude: -73.949105
        // }

        // // start watching
        // current = setTimeout(navigator.geolocation.watchPosition(success, error, { enableHighAccuracy: true }), 10000);
    }

    render() {
        // game states - playing or end game

        //define DragDrop data
        let DragDrop_Data = {};
        if (this.state.answerType[this.state.atQuestion] == "Ordering") {
            let AidStuffs0 = this.props.gVisualAid0[this.state.atQuestion]; //initial order
            let AidStuffs1 = this.props.gVisualAid1[this.state.atQuestion]; //array of images
            let AidStuffs2 = this.props.gVisualAid2[this.state.atQuestion];
            let AidStuffs3 = this.props.gVisualAid3[this.state.atQuestion];
            // console.log("AidStuffs0: ", AidStuffs0)
            // console.log("AidStuffs1: ", AidStuffs1)
            // console.log("AidStuffs2: ", AidStuffs2)
            //define attributes for Drag and Drop
            let row1 = {
                "id": "row1",
                "title": "placeholder",
                "imageIds": AidStuffs0
            };
            let rows = { row1 };
            let images = {};
            for (let i = 0; i < AidStuffs1.length; i++) {
                let temp = {
                    "id": i.toString(),
                    "url": AidStuffs1[i]
                }
                let temp2 = {}
                images[i.toString()] = temp
            };
            let rowOrder = ["row1"];
            DragDrop_Data = { rows, images, rowOrder };
        }
        //-----------------------------------------------//
        let questionPage = <Question
            qContent={this.state.questions[this.state.atQuestion]}
            qAid={this.state.questionVisualAid[this.state.atQuestion]} />;
        let answerPage = <Answer
            answerType={this.state.answerType[this.state.atQuestion]}
            action={this.getAnswer}
            aidStuffs={DragDrop_Data} />;
        return (
            <div className="game">
                <section className="middle">
                    <progress className='prog' value={this.state.atQuestion} max={this.state.totalQuestions} />
                    <br /><br />
                    <div className="text-center">
                        <h1>{this.props.gTitle} Challenge</h1>
                        {questionPage}
                        <br /><br /><br />
                        {answerPage}
                        <p id="hint" className="questN" value=""></p>
                        <div className="hint">
                            <button id="hintBttn" className="btn-lg btn-warning" type="button" onClick={this.getHint}>
                                {this.state.totalHints - this.state.hintCount} Hint(s) Left</button>
                        </div>
                    </div>
                </section>
            </div>

        )

    }


}

export default Puzzle;