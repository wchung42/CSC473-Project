import React, { Component } from 'react';
import Endgame from './Endgame';
import Puzzle from './Puzzle';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            isPaused: false
        }
        this.gameHandler = this.gameHandler.bind(this);
    }

    gameHandler() {
        this.setState({
            isPaused: true
        })
    }

    convertSeconds (seconds) {
        let min = Math.floor(seconds / 60);
        let sec = seconds % 60;
        return String(min).padStart(2, '0') + ':' + String(sec).padStart(2, '0');
    }

    render () {
        const { count } = this.state;
        
        if (this.state.count == 0) {
            clearInterval(this.myInterval);
            return <Endgame outcome = {false}/>;
            
        } else {
            return (
            <div id = "time">
                <h1>Time: { this.convertSeconds(count) }</h1>
                <Puzzle gameHandler = {this.gameHandler} />
            </div>
            )
        }
        
    }

    componentDidMount () {
        const {startCount} = this.props;
        this.setState({
            count: startCount
        })
        this.myInterval = setInterval(() => {
            if (!this.state.isPaused) {
                this.setState(prevState => ({
                count: prevState.count - 1
            }))}
        }, 1000)
    }

}

export default Timer;