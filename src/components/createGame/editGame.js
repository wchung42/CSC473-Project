import React, { Component } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import EditQuestions from './editQuestions';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';

class EditGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameId: this.props.gameId,
            editAtQuestion: 0,
            gameTitle: "",
            gameThumbnail: "#",
            gameLocation: "",
            gameDifficulty: "",
            gameStory: "",
            gameCapacity: "",
            gameTimeLimit: "",
            gameTotalQuestions: "",
            gameTotalHints: "",
            gameInstruction: [],
            gameQuestions: [],
            gameQuestionGeos: [],
            gameQuestionVisualAids: [],
            gameHints: [],
            gameAnswerType: [],
            gameVisualAid0: [],
            gameVisualAid1: [],
            gameVisualAid2: [],
            gameVisualAid3: [],
            gameAnswers: [],
            latitude: "",
            longtitude: "",
            gameUpdated: false,
            questionsUpdated: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.upByOne = this.upByOne.bind(this);
        this.updateValue = this.updateValue.bind(this);
    }

    async handleSubmit(e) {
        e.preventDefault();

        let id = this.state.gameId,
            Title = e.target["game-title"].value,
            Thumbnail = e.target["game-thumbnail"].value,
            Location = e.target["game-location"].value,
            Difficulty = e.target["game-difficulty"].value,
            Capacity = e.target["game-capacity"].value,
            Story = e.target["game-story"].value,
            Time_Limit = (Number(e.target["game-time-limit"].value) * 60).toString(),
            Time_Left = (Number(e.target["game-time-limit"].value) * 60).toString(),// similar to Time_Limit
            Geo_Location = [e.target["game-longtitude"].value, e.target["game-latitude"].value],
            Total_Questions = e.target["game-total-questions"].value,
            Total_Hints = e.target["game-total-hints"].value;
        const updatedGame = {
            id: id,
            Title: Title,
            Thumbnail: Thumbnail,
            Location: Location,
            Difficulty: Difficulty,
            Capacity: Capacity,
            Story: Story,
            Time_Limit: Time_Limit,
            Time_Left: Time_Limit,// similar to Time_Limit
            Geo_Location: Geo_Location,
            Total_Questions: Total_Questions,
            Total_Hints: Total_Hints,
        }
        try {
            this.setState({
                gameUpdated: true,
                gameTotalQuestions: Total_Questions
            })
            await API.graphql(graphqlOperation(mutations.updateGame, { input: updatedGame }));
        } catch (error) { console.log("Error on Updating Game: ", error) }

    }
    async upByOne() {
        let current = Number(this.state.editAtQuestion);
        if (current != this.state.gameTotalQuestions - 1) {
            this.setState({
                editAtQuestion: current + 1
            })
        } else {
            this.setState({
                questionsUpdated: true
            })
        }

    }

    updateValue(e) {
        document.getElementById(e.id).value = e.value;
    }

    async componentDidMount() {
        try {
            const apiData = await API.graphql(graphqlOperation(queries.getGame, { id: this.state.gameId }));
            const gameData = apiData.data.getGame;
            const listQuestion = gameData.Questions.items.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
            await this.setState({
                gameTitle: gameData.Title,
                gameThumbnail: gameData.Thumbnail,
                gameLocation: gameData.Location,
                gameStory: gameData.Story,
                gameDifficulty: gameData.Difficulty,
                gameCapacity: gameData.Capacity,
                gameTimeLimit: gameData.Time_Limit,
                gameTotalQuestions: gameData.Total_Questions,
                latitude: gameData.Geo_Location[0],
                longtitude: gameData.Geo_Location[1],
                gameTotalHints: gameData.Total_Hints,
                gameInstruction: listQuestion.map(item => item.Instruction),
                gameQuestions: listQuestion.map(item => item.Question),
                gameQuestionGeos: listQuestion.map(item => item.Question_Geo),
                gameQuestionVisualAids: listQuestion.map(item => item.Question_Aid),
                gameAnswerType: listQuestion.map(item => item.Answer_Type),
                gameVisualAid0: listQuestion.map(item => item.Answer_Aid0),
                gameVisualAid1: listQuestion.map(item => item.Answer_Aid1),
                gameVisualAid2: listQuestion.map(item => item.Answer_Aid2),
                gameVisualAid3: listQuestion.map(item => item.Answer_Aid3),
                gameAnswers: listQuestion.map(item => item.Answer),
                gameHints: listQuestion.map(item => item.Hint),
            })

        } catch (error) { console.log("Error on Retrieving Data of GAMEID ", this.state.gameId, " ", error) }

    }

    render() {
        if (this.state.gameUpdated && !this.state.questionsUpdated) {
            return (<EditQuestions
                key={this.state.editAtQuestion}
                gameId={this.state.gameId}
                editAtQuestion={this.state.editAtQuestion}
                atQuestion={(this.state.editAtQuestion < 10) ? "00" + this.state.editAtQuestion : "0" + this.state.editAtQuestion}
                gameInstruction={this.state.gameInstruction}
                gameQuestions={this.state.gameQuestions}
                gameQuestionGeos={this.state.gameQuestionGeos}
                gameQuestionVisualAids={this.state.gameQuestionVisualAids}
                gameAnswerType={this.state.gameAnswerType}
                gameVisualAid0={this.state.gameVisualAid0}
                gameVisualAid1={this.state.gameVisualAid1}
                gameVisualAid2={this.state.gameVisualAid2}
                gameVisualAid3={this.state.gameVisualAid3}
                gameAnswers={this.state.gameAnswers}
                gameHints={this.state.gameHints}
                func={this.upByOne} />)
        }
        else if (!this.state.gameUpdated && !this.state.questionsUpdated) {
            return (
                <div>
                    <div className='form-area was-validated'>
                        <form onSubmit={this.handleSubmit} action='/gs'>
                            <a href='/'></a>
                            <div className='form-group'>
                                {/* GAME ID = BIGGEST + 1 */}
                                {/* GAME TITLE */}
                                <label for='game-title'>Game Title</label>
                                <input id='game-title' type='text' className='form-control' required defaultValue={this.state.gameTitle}></input>
                                {/* GAME THUMBNAIL */}
                                <label for='game-thumbnail'>Game Thumbnail</label>
                                <input id='game-thumbnail' type='text' className='form-control' required defaultValue={this.state.gameThumbnail}></input>
                                {/* GAME LOCATION */}
                                <label for='game-location'>Location</label>
                                <input id='game-location' type='text' className='form-control' required defaultValue={this.state.gameLocation}></input>
                                {/* GAME GEO LOCATION */}
                                <label for='game-longtitude'>Longtitude</label>
                                <input id='game-longtitude' type='text' className='form-control' required defaultValue={this.state.longtitude}></input>
                                <label for='game-latitude'>Latitude</label>
                                <input id='game-latitude' type='text' className='form-control' required defaultValue={this.state.latitude}></input>
                                {/* GAME DIFFICULTY*/}
                                <label for='game-difficulty'>Difficulty (1-5)</label>
                                <select id='game-difficulty' className='form-control' required defaultValue={this.state.gameDifficulty}>
                                    <option>1</option>(Easy)
                                <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>(Hard)
                                </select>
                                {/* GAME CAPACITY */}
                                <label for='game-capacity'>Capacity (8 max)</label>
                                <select id='game-capacity' className='form-control' required defaultValue={this.state.gameCapacity}>
                                    <option selected>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                </select>
                                {/* <input id='game-capacity' type='number' className='form-control' max='8' requir></input> */}
                                {/* GAME STORY */}
                                <label for='game-story' >Game Story</label>
                                <input id='game-story' type='text' className='form-control' required defaultValue={this.state.gameStory}></input>
                                {/* GAME TIME_LIMIT */}
                                <label for='game-time-limit'>Time Limit (minutes)</label>
                                <input id='game-time-limit' type='number' className='form-control' max='60' required defaultValue={this.state.gameTimeLimit / 60}></input>
                                {/* GAME TIME_LEFT = GAME TIME_LIMIT*/}

                                {/* GAME PLAYERS = [] */}
                                {/* GAME FINISHED = false */}
                                {/* GAME IN_PROGRESS = false */}
                                {/* GAME TOTAL QUESTIONS */}
                                <label for='game-total-questions'>Number of Question (Max 20)</label>
                                <input id='game-total-questions' type='number' className='form-control' max='20' required defaultValue={this.state.gameTotalQuestions}></input>
                                {/* GAME TOTAL HINTS */}
                                <label for='game-total-hints'>Number of Hints Allowed (Max 20)</label>
                                <input id='game-total-hints' type='number' className='form-control' max='20' required defaultValue={this.state.gameTotalHints}></input>
                                {/* GAME HINT COUNT = 0 */}
                                {/* GAME AT QUESTION = 0 */}
                                {/* GAME QUESTION .................... */}
                                {/* GAME REVIEW = [] */}
                                {/* GAME REVIEW COUNT = 0 */}
                                {/* GAME AVERAGE RATING = 0 */}
                                {/* GAME RECORD = [] */}
                                <br></br>
                                <button type='submit' className='btn-lg btn-success' id="gameSubmitButton">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
        else {
            return (
                <p>GRATZ GAME UPDATED</p>
            )
        }
    }
}
export default EditGame;