import React, { Component } from 'react';
import games from './games.json';

class gamePanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameId: this.props.gameId
        }
    }
    render() {
        return (
            <div className="card">
                <img
                    key={games[this.state.gameId].Id}
                    className="card-img-top"
                    src={games[this.state.gameId].Thumbnail} />
                <div className="card-body">
                    <h5 className="card-title">
                        <strong>{games[this.state.gameId].Title}</strong>
                    </h5>
                    <ul className="card-text">
                        <li>Location:</li>
                        <li>Capacity:</li>
                        <li>Game Length:</li>
                        <li>Difficulty: {games[this.state.gameId].Difficulty}/5</li>
                    </ul>
                    <button id={"bttn" + this.state.gameId} className="btn btn-primary" type="button" onClick={this.props.func} value={this.state.gameId}>START</button>
                </div>
            </div>
        )
    }

}
export default gamePanel;