import React, { Component } from 'react';
// import games from './games.json';
import 'bootstrap/dist/css/bootstrap.css';
//props this file needs to render: 
// Questions + AtQuestion + QuestionVisual Aid to render the question
class riddleQuestion extends Component {
    render() {
        // console.log("Inside Question.js: ", this.props.qGeo);
        return (
            <div key={this.props.qId} className="Question">
                {/* <h1 className="gameTitle">{games[this.state.gameIndex].Title} Challenge</h1> */}
                <p className="text-center quest">
                    {this.props.qContent}

                </p>
                {
                    (this.props.qAid === "#") ? "" : <img className="imgG card-img-top" src={this.props.qAid} alt={this.props.qId + " Image"} />
                }


            </div>
        )
    }
}

export default riddleQuestion
