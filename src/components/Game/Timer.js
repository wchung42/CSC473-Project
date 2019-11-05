import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
    }

    convertSeconds (seconds) {
        let min = Math.floor(seconds / 60);
        let sec = seconds % 60;
        return String(min).padStart(2, '0') + ':' + String(sec).padStart(2, '0');
    }

    render () {
        const { count } = this.state;
        
        return (
            <div id = "time">
                <h1>Time: { this.convertSeconds(count) }</h1>
            </div>
        )
    }

    componentDidMount () {
        const {startCount} = this.props;
        this.setState({
            count: startCount
        })
        this.myInterval = setInterval(() => {
            this.setState(prevState => ({
                count: prevState.count - 1
            }))
        }, 1000)
    }

    componentWillUnmount () {
        clearInterval(this.myInterval);
    }
}

export default Timer;