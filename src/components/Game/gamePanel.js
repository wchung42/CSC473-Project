import React, { Component } from 'react';


class gamePanel extends Component {
    
    render() {
        const gameCardListStyle = {
            'list-style-type': 'none'
        }

        let listItems = this.props.games
            .map(item =>
                <li className="card-body" key={item.Id} >
                    <img
                        key={item.id}
                        className="card-img-top"
                        src={item.Thumbnail}
                        alt='' />
                    <h5 className="card-title">
                        <strong>{item.Title}</strong>
                    </h5>
                    <ul className="card-text">
                        <li>Location:</li>
                        <li>Capacity:</li>
                        <li>Game Length:</li>
                        <li>Difficulty: {item.Difficulty}/5</li>
                    </ul>
                    <button id={"bttn" + item.id} className="btn btn-lg btn-primary" type="button" onClick={this.props.func} value={item.id}>START</button>
                </li>
            );
        return ( 
            <div className="card">     
                <ul style = { gameCardListStyle }>{listItems}</ul>
            </div>
        )
    }

}
export default gamePanel;

//Props this file needs to run:
// id, thumbnail, title,location, capacity, timelimite, difficulty