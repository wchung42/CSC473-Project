import React, { Component } from 'react';


class gamePanel extends Component {

    render() {
        const gameCardListStyle = {
            'list-style-type': 'none'
        }
        let listItems = this.props.games
            .map(item =>
                <div id={"game" + item.id} className="card">
                    <li className="card-body" key={item.id} >
                        <img
                            key={item.id}
                            className="card-img-top"
                            src={item.Thumbnail}
                            alt='' />
                        <h5 className="card-title">
                            <strong>{item.Title}</strong>
                        </h5>
                        <ul className="card-text">
                            <li key="rating">Rating: {item.Average_Rating} ({item.ReviewCount})</li>
                            <li key="location">Location: {item.Location}</li>
                            <li key="capacity"><strong>Capacity: {item.Capacity}</strong></li>
                            <li key="gameLength">Game Length: {item.Time_Limit / 60} minutes</li>
                            <li key="difficulty">Difficulty: {item.Difficulty}/5</li>
                        </ul>
                        {console.log(item.In_Progress)}
                        {
                            (item.In_Progess || item.Capacity === 0) ?
                                <button
                                    disabled={item.In_Progress}
                                    id={"bttn" + item.id}
                                    className="btn btn-lg btn-primary"
                                    type="button"
                                    value={item.id}>
                                    In Progress
                        </button> :
                                <button
                                    disabled={item.Capacity === 0}
                                    id={"bttn" + item.id}
                                    className="btn btn-lg btn-primary"
                                    type="button"
                                    onClick={this.props.func}
                                    value={item.id}>
                                    More Info
                        </button>
                        }
                    </li>
                </div>
            );
        return (
            <ul style={gameCardListStyle}>{listItems}</ul>
        )
    }

}
export default gamePanel;

//Props this file needs to run:
// id, thumbnail, title,location, capacity, timelimite, difficulty