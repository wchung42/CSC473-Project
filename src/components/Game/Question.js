import React, { Component } from 'react';
// import games from './games.json';
import 'bootstrap/dist/css/bootstrap.css';
//props this file needs to render: 
// Questions + AtQuestion + QuestionVisual Aid to render the question
class riddleQuestion extends Component {
    render() {
        return (
            <div key={this.props.qId} className="Question">
                {/* <h1 className="gameTitle">{games[this.state.gameIndex].Title} Challenge</h1> */}
                <p className="text-center quest">
                    {this.props.qContent}
                </p>
                <img className="imgG" src={this.props.qAid} />
            </div>
        )
    }
}

export default riddleQuestion
