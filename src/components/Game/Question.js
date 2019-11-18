import React, { Component } from 'react';
import games from './games.json';
import 'bootstrap/dist/css/bootstrap.css';

class riddleQuestion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gameIndex: this.props.id,
            questionIndex: this.props.questionId,
            imageIndex: this.props.imageId
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.questionId !== this.props.questionId) {
            this.setState({
                questionIndex: this.props.questionId,
                imageIndex: this.props.imageId
            })
        }
    }

    render() {
        // choose what type of question to return in the future
        return (
            <div key={this.props.questionId} className="Question">
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
