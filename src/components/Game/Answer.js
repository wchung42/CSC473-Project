import React, { Component } from 'react';
import games from './games.json';

class Answer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameIndex: this.props.id,
            questionIndex: this.props.questionId,
        };
        this.enterNum = this.enterNum.bind(this);
        this.enterText = this.enterText.bind(this);
    }
    //this function will add value of button pressed to pound value
    enterNum(e) {
        document.getElementById("pound").value += e.currentTarget.value;
        console.log("pound value", document.getElementById("pound").value)
    }
    //this enter will get current value of the input and assign that value to submit button
    enterText() {
        document.getElementById("submitBttn").value = document.getElementById("answerBox").value;
    }

    componentDidUpdate(prevProps) {
        if (prevProps.questionId !== this.props.questionId) {
            this.setState({
                questionIndex: this.props.questionId,  //update question index to re-render
            })
        }
    }

    render() {
        if (games[this.state.gameIndex].Answer_Type[this.state.questionIndex] == "number") {
            return (
                // Construct Num Pad
                <div key={this.props.questionId} id="numPad">
                    <button type="button" className="number" onClick={this.enterNum} value="7">7</button>
                    <button type="button" className="number" onClick={this.enterNum} value="8">8</button>
                    <button type="button" className="number" onClick={this.enterNum} value="9">9</button>

                    <button type="button" className="number" onClick={this.enterNum} value="4">4</button>
                    <button type="button" className="number" onClick={this.enterNum} value="5">5</button>
                    <button type="button" className="number" onClick={this.enterNum} value="6">6</button>

                    <button type="button" className="number" onClick={this.enterNum} value="1">1</button>
                    <button type="button" className="number" onClick={this.enterNum} value="2">2</button>
                    <button type="button" className="number" onClick={this.enterNum} value="3">3</button>


                    <button type="button" className="number" onClick={this.enterNum} value=".">.</button>
                    <button type="button" className="number" onClick={this.enterNum} value="0">0</button>
                    <button type="button" className="number" id="pound" onClick={this.props.action} value="">#</button>
                </div>
            )
        }
        else {
            return (
                <div key={this.props.questionId} id="textAnswer">
                    <input id="answerBox" type="text" className="text-center textbox" onChange={this.enterText} />
                    <br />
                    <button id="submitBttn" className="btn-large  btn-success" type="button" onClick={this.props.action} value="">&nbsp; Submit &nbsp;</button>
                </div>
            )

        }

    }
}

export default Answer;