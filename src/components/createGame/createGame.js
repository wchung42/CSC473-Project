import React, { Component } from 'react';
class CreateGame extends Component{
    constructor() {
        super()
        this.state = {
            Game: '',
            gameMade: '',
            storyMade: '',
        }

    }

    render(){
        return(
            <div className ='container'>
                <div id = 'heading-title'>
                    <h1>Create Game</h1> 
                </div>
                <div className = 'form-area was-validated'>
                    <form>
                        <div className = 'form-group'>
                            <label for = 'name'>Game Title</label>
                            <input type = 'text' className = 'form-control' required></input>
                            <label for = 'name'>Game Thumbnail</label>
                            <input type = 'text' className = 'form-control' required></input>

                            <label for = 'name'>Location</label>
                            <input type = 'text' className = 'form-control' required></input>

                            <label for = 'name'>Capacity</label>
                            <input type = 'text' className = 'form-control' required></input>

                            <label for = 'name'>Difficulty (1-5)</label>
                            <input type = 'text' className = 'form-control' required></input>

                            <label for = 'name'>Time Limit (minutes)</label>
                            <input type = 'text' className = 'form-control' required></input>

                            <br></br>
                            <button type = 'submit' className = 'btn-lg btn-success'>Create</button>
                        </div>
                    </form>
                </div>   
            </div>
        )
    }
}

export default CreateGame;