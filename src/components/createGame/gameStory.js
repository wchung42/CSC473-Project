import React, { Component } from 'react';

class GameStory extends Component{
    constructor() {
        super()
        this.state = {
            GameName: '',
            storyMade: false ,
        }

    }

    handlestoryMade = () =>{
        this.setState({
            storyMade: true,
        });
    }

    render(){
        return(
            <div className ='container'>
                <div id = 'heading-title'>
                    <h1>{this.state.GameName}</h1> 
                </div>
                <div className = 'form-area was-validated'>
                    <form onSubmit={this.handlegameMade} action="/gq">
                        <div className = 'form-group'>
                        <label for = 'name'>Story of game</label>
                        <textarea className = 'form-control' rows = '10' required/>

                        <br/><br/>

                        <label for = 'name'>Instructions</label>
                        <textarea className = 'form-control' rows = '10' required/>
                            
                            <br></br>
                            <button type = 'submit' className = 'btn-lg btn-success'>Create</button>
                        </div>
                    </form>
                </div>   
            </div>
        )
    }
}

export default GameStory;