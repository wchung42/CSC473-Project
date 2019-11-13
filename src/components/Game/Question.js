import React, { Component } from 'react';
import games from './games.json';
import 'bootstrap/dist/css/bootstrap.css';

class riddleQuestion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gameIndex: this.props.id,
            questionIndex: this.props.qId,
            imageIndex: this.props.iId
        }
    }

    componentDidUpdate(prevProps) {
        console.log("Log from question.js")
        console.log(prevProps.qId)
        console.log(this.props.qId)
        if (prevProps.qId !== this.props.qId) {

            this.setState({
                questionIndex: this.props.qId,
                imageIndex: this.props.iId
            })
        }
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log(nextProps)
    //     console.log(nextState)
    //     return this.state.questionIndex != nextState.questionIndex;
    // }

    render() {
        // choose what type of question to return in the future
        return (
            <div key={this.props.qId} className="Question">
                <h1 className="gameTitle">{games[this.state.gameIndex].Title} Challenge</h1>
                <p className="text-center quest">
                    {games[this.state.gameIndex].Game_Story[this.state.questionIndex].replace("\\n", "\n")}
                </p>
                <img className="imgG" src={games[this.state.gameIndex].Images[this.state.imageIndex]} />
            </div>
        )
    }
}

export default riddleQuestion
