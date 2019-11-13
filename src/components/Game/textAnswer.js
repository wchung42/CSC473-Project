import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class textAnswer extends Component {
    constructor(props) {
        super(props);
        this.enter = this.enter.bind(this);
    }
    //this enter will get current value of the input and assign that value to submit button
    enter() {
        let tempAnswer = document.getElementById("answer").value;
        document.getElementById("submitBttn").value += tempAnswer;
    }

    render() {
        return (
            <div id="answerBox">
                <input id="answer" type="text" className="text-center textbox" onChange={this.enter} />
                <button id="submitBttn" className="btn-large  btn-success" type="button" onClick={this.props.action} value="">&nbsp; Submit &nbsp;</button>
            </div>
        )
    }
}

export default textAnswer;