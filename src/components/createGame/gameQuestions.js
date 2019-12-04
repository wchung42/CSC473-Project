import React, { Component } from 'react';

class GameQuestions extends Component{
    constructor() {
        super()
        this.state = {
            GameName: '',
            storyMade: false ,
            imgLink:'',
        }

    }

    handleChange = (param, e) => {
        console.log(this.state.name);
        this.setState({
            [param]: e.target.value,
        })
        
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

                            <label for = 'name'>Question</label>
                            <input type = 'text' className = 'form-control' required></input>
                            <label for = 'name'>Question Ans Type</label>
                            <select className = 'form-control' required > 
                                <option>Text</option>
                                <option>Number</option>
                                <option>Ordering</option>
                            </select>

                            <label for = 'name'>Visual Aid</label>
                            <input type = 'text' className = 'form-control' value = {this.state.imgLink} required onChange={ this.handleChange.bind(this, 'imgLink')}></input>
                            <br/>
                            <img src ={this.state.imgLink} style={{width:'50%',height:'50%'} } alt ="Visual Aid"></img> 
                            <br/>

                            <br/>
                            <button type = 'submit' className = 'btn-lg btn-success'>Add</button>
                        </div>
                    </form>
                </div>   
            </div>
        )
    }
}

export default GameQuestions;