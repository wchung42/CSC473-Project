import React, { Component } from 'react';

class numberAnswer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameIndex = this.props.gameId,
            answer = ""
        };
        this.enter = this.enter.bind(this);
    }
    //this function will "set state for the answer" to save current value then change the current value of the pound button
    enter(e) {
        let buttonEntered = this.state.answer + e.currentTarget.value;
        document.getElementById("pound").value = buttonEntered;
        this.setState({
            result = buttonEntered
        })
    }

    render() {
        return (
            // Construct Num Pad
            <div id="numPad">
                <button type="button" className="number" onclick={this.enter} value="7">7</button>
                <button type="button" className="number" onclick={this.enter} value="8">8</button>
                <button type="button" className="number" onclick={this.enter} value="9">9</button>

                <button type="button" className="number" onclick={this.enter} value="4">4</button>
                <button type="button" className="number" onclick={this.enter} value="5">5</button>
                <button type="button" className="number" onclick={this.enter} value="6">6</button>

                <button type="button" className="number" onclick={this.enter} value="1">1</button>
                <button type="button" className="number" onclick={this.enter} value="2">2</button>
                <button type="button" className="number" onclick={this.enter} value="3">3</button>

                <button type="button" className="zero" onclick={this.enter} value="0">0</button>
                <button type="button" className="pound" onclick={this.props.action} value="">#</button>
            </div>
        )
    }
}