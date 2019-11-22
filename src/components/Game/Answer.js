import React, { Component } from 'react';
import games from './games.json';
import OrderQuestion from './OrderQuestion/OrderQuestion';
import './Game.css';

class Answer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameIndex: this.props.id,
            questionIndex: this.props.qId,
            
        };
        this.enterNum = this.enterNum.bind(this);
        this.enterText = this.enterText.bind(this);
        this.handleOrderAnswer = this.handleOrderAnswer.bind(this);
    }
    //this function will add value of button pressed to pound value
    enterNum(e) {
        document.getElementById("pound").value += e.currentTarget.value;
        //console.log("pound value", document.getElementById("pound").value)
    }
    //this enter will get current value of the input and assign that value to submit button
    enterText() {
        document.getElementById("submitBttn").value = document.getElementById("answerBox").value;
    }

    // index order of images will be assigned to submit button
    handleOrderAnswer(order) {
        // this.setState({
        //     dragOrder: order
        // })
        document.getElementById("submitButtonOrder").value = order
    }

    componentDidUpdate(prevProps) {
        if (prevProps.qId !== this.props.qId) {
            this.setState({
                questionIndex: this.props.qId,  //update question index to re-render
            })
        }
    }

    render() {
        if (games[this.state.gameIndex].Answer_Type[this.state.questionIndex] == "number") {
            return (
                // Construct Num Pad
                <div className = "answerSpace">
                    <div key={this.props.qId} id="numPad">
                        <button type="button" className="number" id = 'num7' onClick={this.enterNum} value="7">7</button>
                        <button type="button" className="number" id = 'num8' onClick={this.enterNum} value="8">8</button>
                        <button type="button" className="number" id = 'num9' onClick={this.enterNum} value="9">9</button>

                        <button type="button" className="number" id = 'num4' onClick={this.enterNum} value="4">4</button>
                        <button type="button" className="number" id = 'num5' onClick={this.enterNum} value="5">5</button>
                        <button type="button" className="number" id = 'num6' onClick={this.enterNum} value="6">6</button>

                        <button type="button" className="number" id = 'num1' onClick={this.enterNum} value="1">1</button>
                        <button type="button" className="number" id = 'num2' onClick={this.enterNum} value="2">2</button>
                        <button type="button" className="number" id = 'num3' onClick={this.enterNum} value="3">3</button>


                        <button type="button" className="number" id = 'numDot' onClick={this.enterNum} value=".">.</button>
                        <button type="button" className="number" id = 'num0' onClick={this.enterNum} value="0">0</button>
                        <button type="button" className="number" id="pound" onClick={this.props.action} value="">#</button>
                    </div>
                </div>   
            )
        }
        else if (games[this.state.gameIndex].Answer_Type[this.state.questionIndex] == "ordering") {
            return (
                <div className = "answerSpace">
                    <div id = "orderingAnswer">
                        <OrderQuestion id = "1" handleOrderChange = {this.handleOrderAnswer}/>
                        <br/>
                        <div className = "submit">
                            <button id="submitButtonOrder" className="btn-lg  btn-success" type="button" onClick={this.props.action} value="">&nbsp; Submit &nbsp;</button> 
                        </div>
                    </div>
                    
                    
                </div>
            )
        }
        else {
            return (
                <div className = "answerSpace">
                    <div key={this.props.qId} id="textAnswer">
                        <input id="answerBox" type="text" className="text-center textbox" onChange={this.enterText} />
                        <br />
                        <div className = "submit">
                        <button id="submitBttn" className="btn-lg  btn-success" type="button" onClick={this.props.action} value="">&nbsp; Submit &nbsp;</button> 
                        </div>
                    
                    </div>
                </div>
                
            )

        }

    }
}

export default Answer;