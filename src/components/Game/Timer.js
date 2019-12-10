import React, { Component } from 'react';
import Endgame from './Endgame';
import Puzzle from './Puzzle';
import './Game.css'
import * as mutations from '../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';
//props this file needs to operate: Time limit
class Timer extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            isPaused: false,
            isReady: this.props.gameInProgress,
            isFinished: this.props.gameFinished
        }
        this.gameHandler = this.gameHandler.bind(this);
        this.gameReady = this.gameReady.bind(this);
    }

    gameHandler() {
        this.setState({
            isPaused: true
        })
    }

    async gameReady() {
        await this.setState({
            isReady: true
        })
        const gameStart = {
            id: this.props.gameID,
            Capacity: 0,
            In_Progress: true
        }
        await API.graphql(graphqlOperation(mutations.updateGame, { input: gameStart }));
    }

    convertSeconds(seconds) {
        let min = Math.floor(seconds / 60);
        let sec = seconds % 60;
        return String(min).padStart(2, '0') + ':' + String(sec).padStart(2, '0');
    }

    render() {
        const { count } = this.state;
        //time out
        if (this.state.count === 0) {
            clearInterval(this.myInterval);
            return <Endgame
                gameId={this.props.gameID}
                gameUserName={this.props.gameUserName}
                gameReviewCount={this.props.gameReviewCount}
                gameAverageRating={this.props.gameAverageRating}
                outcome={false} />;
            //not time out and win the game
        } else {
            if (this.state.isFinished) {
                console.log("Win game yet? ", this.state.isFinished)
                const winPage = <Endgame
                    gameId={this.props.gameID}
                    gameUserName={this.props.gameUserName}
                    gameReviewCount={this.props.gameReviewCount}
                    gameAverageRating={this.props.gameAverageRating}
                    outcome={this.state.isFinished} />;
                return (
                    <div>
                        {winPage}
                    </div>
                )
            }
            else {
                //render instruction to play the game with "GO" button.
                // once is pressed => isPaused: false + updateGame with Capacity: 0 to prevent more ppl joining game.
                // now they are moveing forward at the same pace. 
                if (!this.state.isReady) {
                    return (
                        <div id="Ready">
                            <div className='instruction-questions'>
                                <h4><strong>Types of Questions</strong></h4>
                                <ul>
                                    <li>Combination</li>
                                    <p>
                                        Enter the combination into the numpad and hit the POUND(#) key.
                                        If the POUND(#) key flashes RED, your answer is incorrect!
                                    </p>
                                    <br />
                                    <img src='https://user-images.githubusercontent.com/15526256/70118142-572f0b00-1635-11ea-8051-513754791f7a.gif'
                                        alt='numpad gif'
                                        className='instruction-gifs' />
                                    <br />
                                    <br />
                                    <li>Text</li>
                                    <p>
                                        To complete these types of questions, simply enter your answer into the textbox and click SUBMIT.
                    <br></br>
                                        <strong>NOTE: ANSWERS NOT CASE SENSITIVE</strong>
                                    </p>
                                    <br />
                                    <img src='https://user-images.githubusercontent.com/15526256/70118449-023fc480-1636-11ea-97a1-192d94088285.gif'
                                        alt='text gif'
                                        className='instruction-gifs' />
                                    <br />
                                    <br />
                                    <li>Ordering</li>
                                    <p>
                                        These questions are completed by dragging and dropping the images into the correct order and hitting SUBMIT.
                                    </p>
                                    <br />
                                    <img src='https://user-images.githubusercontent.com/15526256/70117945-c821f300-1634-11ea-9b3e-e86832e7cf32.gif'
                                        alt='dnd gif'
                                        className='instruction-gifs'
                                    />
                                </ul>
                            </div>
                            <br /><br />
                            <h3 id="Hello"> EVERYONE READY? IF SO PRESS THE BUTTON </h3>
                            <button style={{ fontSize: '3vh' }} className="btn btn-lg btn-primary" onClick={this.gameReady}>
                                START
                            </button>
                        </div>
                    )
                }
                else {

                }
                return (
                    <div id="time">
                        <h3 id="timer"><strong>{this.convertSeconds(count)}</strong></h3>
                        <Puzzle
                            gID={this.props.gameID}
                            gTitle={this.props.gameTitle}
                            gTimeLimit={this.props.gameTimeLimit}
                            gTimeLeft={count}
                            gTotalQuestions={this.props.gameTotalQuestions}
                            gPlayers={this.props.gamePlayers}
                            gTotalHints={this.props.gameTotalHints}
                            gHintCount={this.props.gameHintCount}
                            gAtQuestion={this.props.gameAtQuestion}
                            gQuestions={this.props.gameQuestions}
                            gQuestionGeos={this.props.gameQuestionGeos}
                            gQuestionVisualAids={this.props.gameQuestionVisualAids}
                            gHints={this.props.gameHints}
                            gAnswerType={this.props.gameAnswerType}
                            gVisualAid0={this.props.gameVisualAid0}
                            gVisualAid1={this.props.gameVisualAid1}
                            gVisualAid2={this.props.gameVisualAid2}
                            gVisualAid3={this.props.gameVisualAid3}
                            gAnswers={this.props.gameAnswers}
                            gAidStuffs={this.props.gameAidStuffs}
                            gameHandler={this.gameHandler}
                        />
                    </div>
                )
            }

        }

    }

    async componentDidMount() {
        this._isMounted = true;
        const { startCount } = this.props;
        this.setState({
            count: startCount,
            isPaused: false
        })
        this.myInterval = setInterval(() => {
            if (!this.state.isPaused && !this.state.isFinished && this.state.isReady) {
                this.setState(prevState => ({
                    count: prevState.count - 1
                }))
            }
        }, 1000)
    }
    async componentWillUnmount() {
        this._isMounted = false;
        clearInterval(this.myInterval);
    }

}

export default Timer;