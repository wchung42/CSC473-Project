import React, { Component } from 'react';
import games from './games.json';

class gamePanel extends Component {
    render() {
        let listItems = games
            .map(item =>
                <li className="card-body" key={item.Id} >
                    <img
                        key={item.Id}
                        className="card-img-top"
                        src={item.Thumbnail} />
                    <h5 className="card-title">
                        <strong>{item.Title}</strong>
                    </h5>
                    <ul className="card-text">
                        <li>Location:</li>
                        <li>Capacity:</li>
                        <li>Game Length:</li>
                        <li>Difficulty: {item.Difficulty}/5</li>
                    </ul>
                    <button id={"bttn" + item.Id} className="btn btn-primary" type="button" onClick={this.props.func} value={item.Id}>START</button>
                </li>
            );
        return (
            <div className="card">
                <ul>{listItems}</ul>
            </div>
        )
    }

}
export default gamePanel;