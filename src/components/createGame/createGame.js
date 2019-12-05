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
import GameStory from './gameStory'

class CreateGame extends Component {
    constructor() {
        super()
        this.state = {
            GameName: '',
            gameMade: false,
            storyMade: '',
        }

    }

    handleChange = (param, e) => {
        console.log(this.state.name);
        this.setState({
            [param]: e.target.value,
        })

    }

    handlegameMade = () => {
        this.setState({
            gameMade: true,
        });
    }

    render() {
        return (
            <div className='container'>
                <div id='heading-title'>
                    <h1>Create Game</h1>
                </div>
                <div className='form-area was-validated'>
                    <form onSubmit={this.handlegameMade} action='/gs'>
                        <a href='/'></a>
                        <div className='form-group'>
                            <label for='name'>Game Title</label>
                            <input type='text' className='form-control' id='tit' value={this.state.GameName} required onChange={this.handleChange.bind(this, 'GameName')}></input>
                            <label for='name'>Game Thumbnail</label>
                            <input type='text' className='form-control' required></input>

                            <label for='name'>Location</label>
                            <input type='text' className='form-control' required></input>

                            <label for='name'>Capacity (8 max)</label>
                            <input type='number' className='form-control' max='8' required></input>

                            <label for='name'>Difficulty (1-5)</label>
                            <select className='form-control' required >
                                <option>1 (Easy)</option>
                                <option>2</option>
                                <option>3</option>
                                <option >4</option>
                                <option>5 (Hard)</option>
                            </select>

                            <label for='name'>Time Limit (minutes)</label>
                            <input type='number' className='form-control' max='60' required ></input>

                            <br></br>
                            <button type='submit' className='btn-lg btn-success'>Create</button>
                        </div>
                    </form>
                </div>
            </div>
        )

    }
}

export default CreateGame;