// Require user to enter neccessary information to create a game
// Submit button will act as next button => render new page that requires user to input information of each question "total_questions" times.
// Once the list of questions is filled => submit => new game is added to DB with questions
// Values that need to be initialized: 
// - Players : []
// - Finished : false
// - At_Question : 0
// - ReviewCount : 0
// - Review : []
import React, { Component } from 'react';
import GameQuestion from './gameQuestions.js';
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';

const ListGames = `query ListGames{
    listGames{
      items{
        id
        Title
      }
    }
  }`;

class CreateGame extends Component {
    constructor() {
        super()
        this.state = {
            id: "",
            gameCreated: false,
            questionsCreated: false,
            totalQuestions: 0,
            gameTitle: "",
            questions: {},
            atQuestion: 0,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.upByOne = this.upByOne.bind(this);
    }
    async componentDidMount() {
        try {
            const apiData = await API.graphql(graphqlOperation(ListGames));
            const games = apiData.data.listGames.items;
            this.setState({ id: games.length.toString() });
        } catch (error) { console.log(error) }
    }

    async handleSubmit(e) {
        e.preventDefault();
        const newGame = {
            id: this.state.id,
            Title: e.target["game-title"].value,
            Thumbnail: e.target["game-thumbnail"].value,
            Location: e.target["game-location"].value,
            Difficulty: e.target["game-difficulty"].value,
            Capacity: e.target["game-capacity"].value,
            Story: e.target["game-story"].value,
            Time_Limit: (Number(e.target["game-time-limit"].value) * 3600).toString(),
            Time_Left: (Number(e.target["game-time-limit"].value) * 3600).toString(),// similar to Time_Limit
            Geo_Location: [e.target["game-longtitude"].value, e.target["game-ladtitude"].value],
            Players: [],
            Finished: false,
            In_Progress: false,
            Total_Questions: e.target["game-total-questions"].value,
            Total_Hints: e.target["game-total-hints"].value,
            Hint_Count: 0,
            At_Question: 0,
            ReviewCount: 0,
            Average_Rating: 0,
        }
        try {
            // await API.graphql(graphqlOperation(mutations.createGame, { input: newGame }));
            await this.setState({
                gameCreated: true,
                gameTitle: e.target["game-title"].value,
                totalQuestions: e.target["game-total-questions"].value
            })
        } catch (error) { console.log(error) }
    }

    upByOne() {
        let current = Number(this.state.atQuestion);
        if (current != this.state.totalQuestions - 1) {
            this.setState({
                atQuestion: current + 1
            })
        } else {
            this.setState({
                questionsCreated: true
            })
        }

    }


    render() {
        let a = <p>Hello World 1</p>;
        const items = [];
        let i = 0;
        if (this.state.gameCreated && !this.state.questionsCreated) {
            return (<GameQuestion
                key={this.state.atQuestion}
                id={"00" + this.state.id}
                atQuestion={(this.state.atQuestion < 10) ? "00" + this.state.atQuestion : "0" + this.state.atQuestion}
                func={this.upByOne} />)
        }
        else if (!this.state.gameCreated && !this.state.questionsCreated) {
            return (
                <div className='container'>
                    <div id='heading-title'>
                        <h1>Create Game</h1>
                    </div>
                    <div className='form-area was-validated'>
                        <form onSubmit={this.handleSubmit} action='/gs'>
                            <a href='/'></a>
                            <div className='form-group'>
                                {/* GAME ID = BIGGEST + 1 */}
                                {/* GAME TITLE */}
                                <label for='game-title'>Game Title</label>
                                <input id='game-title' type='text' className='form-control' required></input>
                                {/* GAME THUMBNAIL */}
                                <label for='game-thumbnail'>Game Thumbnail</label>
                                <input id='game-thumbnail' type='text' className='form-control' required></input>
                                {/* GAME LOCATION */}
                                <label for='game-location'>Location</label>
                                <input id='game-location' type='text' className='form-control' required></input>
                                {/* GAME DIFFICULTY*/}
                                <label for='game-difficulty'>Difficulty (1-5)</label>
                                <select id='game-difficulty' className='form-control' required >
                                    <option>1 (Easy)</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option >4</option>
                                    <option>5 (Hard)</option>
                                </select>
                                {/* GAME CAPACITY */}
                                <label for='game-capacity'>Capacity (8 max)</label>
                                <input id='game-capacity' type='number' className='form-control' max='8' required></input>
                                {/* GAME STORY */}
                                <label for='game-story'>Game Story</label>
                                <input id='game-story' type='text' className='form-control' required></input>
                                {/* GAME TIME_LIMIT */}
                                <label for='game-time-limit'>Time Limit (minutes)</label>
                                <input id='game-time-limit' type='number' className='form-control' max='60' required ></input>
                                {/* GAME TIME_LEFT = GAME TIME_LIMIT*/}
                                {/* GAME GEO LOCATION */}
                                <label for='game-longtitude'>Longtitude</label>
                                <input id='game-longtitude' type='text' className='form-control' required></input>
                                <label for='game-ladtitude'>Ladtitude</label>
                                <input id='game-ladtitude' type='text' className='form-control' required></input>
                                {/* GAME PLAYERS = [] */}
                                {/* GAME FINISHED = false */}
                                {/* GAME IN_PROGRESS = false */}
                                {/* GAME TOTAL QUESTIONS */}
                                <label for='game-total-questions'>Number of Question</label>
                                <input id='game-total-questions' type='number' className='form-control' max='20' required></input>
                                {/* GAME TOTAL HINTS */}
                                <label for='game-total-hints'>Number of Hints Players Allowed to Use</label>
                                <input id='game-total-hints' type='number' className='form-control' max='20' required></input>
                                {/* GAME HINT COUNT = 0 */}
                                {/* GAME AT QUESTION = 0 */}
                                {/* GAME QUESTION .................... */}
                                {/* GAME REVIEW = [] */}
                                {/* GAME REVIEW COUNT = 0 */}
                                {/* GAME AVERAGE RATING = 0 */}
                                {/* GAME RECORD = [] */}
                                <br></br>
                                <button type='submit' className='btn-lg btn-success'>Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
        else {
            return (
                <p>GRATZ NEW GAME CREATED</p>
            )
        }


    }
}

export default CreateGame;