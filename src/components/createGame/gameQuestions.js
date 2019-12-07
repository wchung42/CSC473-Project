import React, { Component } from 'react';
import * as mutations from '../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';

class GameQuestion extends Component {
    constructor() {
        super()
        this.state = {
            imgLink: '',
            hidden: true,
            disable0: true,
            disable1: true,
            disable2: true,
            disable3: true,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleAid0 = this.handleAid0.bind(this);
        this.handleAid1 = this.handleAid1.bind(this);
        this.handleAid2 = this.handleAid2.bind(this);
        this.handleAid3 = this.handleAid3.bind(this);
    }
    async handleSubmit(e) {
        const newQuestion = {
            id: "00" + this.props.id + this.props.atQuestion,
            questionGameId: this.props.id,
            Instruction: document.getElementById("question-instruction").value,
            Question_Geo: [document.getElementById("question-longtitude").value, document.getElementById("question-ladtitude").value],
            Question: document.getElementById("question-question").value,
            Question_Aid: document.getElementById("question-aid").value,
            Answer_Type: document.getElementById("answer-type").value,
            Answer: document.getElementById("answer-answer").value,
            Hint: document.getElementById("question-hint").value,
            Answer_Aid0: (!this.state.disable0) ? [
                document.getElementById("answer-aid00").value.toString(),
                document.getElementById("answer-aid01").value.toString(),
                document.getElementById("answer-aid02").value.toString(),
                document.getElementById("answer-aid03").value.toString()
            ] : [],
            Answer_Aid1: (!this.state.disable1) ? [
                document.getElementById("answer-aid10").value.toString(),
                document.getElementById("answer-aid11").value.toString(),
                document.getElementById("answer-aid12").value.toString(),
                document.getElementById("answer-aid13").value.toString()
            ] : [],
            Answer_Aid2: (!this.state.disable2) ? [
                document.getElementById("answer-aid20").value.toString(),
                document.getElementById("answer-aid21").value.toString(),
                document.getElementById("answer-aid22").value.toString(),
                document.getElementById("answer-aid23").value.toString()
            ] : [],
            Answer_Aid3: (!this.state.disable3) ? [
                document.getElementById("answer-aid30").value.toString(),
                document.getElementById("answer-aid31").value.toString(),
                document.getElementById("answer-aid32").value.toString(),
                document.getElementById("answer-aid33").value.toString()
            ] : [],
        }
        try {
            await API.graphql(graphqlOperation(mutations.createQuestion, { input: newQuestion }));
        } catch (error) { console.log(error) }

        this.props.func();
    }

    async handleOnChange(e) {
        await this.setState({
            imgLink: e.target.value,
            hidden: false
        })

    }

    async handleAid0(e) {

        await this.setState({
            disable0: !this.state.disable0
        })
    }
    async handleAid1(e) {
        await this.setState({
            disable1: !this.state.disable1
        })
    }
    async handleAid2(e) {
        await this.setState({
            disable2: !this.state.disable2
        })
    }
    async handleAid3(e) {
        await this.setState({
            disable3: !this.state.disable3
        })
    }

    render() {
        return (
            <div className='container' >
                <div id='heading-title'>
                    <h1>Game Question {this.props.id}{this.props.atQuestion}</h1>
                </div>
                <div className='form-area was-validated'>
                    <form >
                        <div className='form-group'>

                            {/* Instruction */}
                            <label for='question-instruction'>Instruction for this Question</label>
                            <input id='question-instruction' type='text' className='form-control' required></input>
                            {/* Geo Location */}
                            <label for='question-longtitude'>Longtitude Value for Question</label>
                            <input id='question-longtitude' type='text' className='form-control' required></input>
                            <label for='question-ladtitude'>Lattitude Value for Question</label>
                            <input id='question-ladtitude' type='text' className='form-control' required></input>
                            {/* Question Content */}
                            <label for='question-question'>Content of Question to be displayed</label>
                            <input id='question-question' type='text' className='form-control' required></input>
                            {/* Question Visual Aid */}
                            <label for='question-aid'>Visual Aid for Question</label>
                            <input id="question-aid" type='text' className='form-control' onChange={this.handleOnChange} ></input>
                            <br />
                            <img src={this.state.imgLink} style={{ width: '50%', height: '50%' }} alt="Visual Aid" hidden={this.state.hidden}></img>
                            <br />
                            {/* Answer Type */}
                            <label for='answer-type'>Question Ans Type</label>
                            <select id="answer-type" className='form-control' required >
                                <option>Text</option>
                                <option>Number</option>
                                <option>Ordering</option>
                                <option>New?</option>
                            </select>
                            {/* Answer */}
                            <label for='answer-answer'>Answer for this Question</label>
                            <input id='answer-answer' type='text' className='form-control' required></input>
                            {/* Hint */}
                            <label for='question-hint'>Hint</label>
                            <input id='question-hint' type='text' className='form-control' required></input>

                            {/* Answer Aid 0 */}
                            <label for='answer-aid0'>Answer Aid0 for this Question</label>
                            <input
                                type="checkbox"
                                name="answer-aid0"
                                id="answer-aid0"
                                onChange={this.handleAid0} // Triggers the function in the Part 2
                            />
                            <input id='answer-aid00' hidden={this.state.disable0} type='text' className='form-control'></input>
                            <input id='answer-aid01' hidden={this.state.disable0} type='text' className='form-control'></input>
                            <input id='answer-aid02' hidden={this.state.disable0} type='text' className='form-control'></input>
                            <input id='answer-aid03' hidden={this.state.disable0} type='text' className='form-control'></input>
                            {/* Answer Aid 1 */}

                            <label for='answer-aid1'>Answer Aid1 for this Question</label>
                            <input
                                type="checkbox"
                                name="answer-aid1"
                                id="answer-aid1"
                                onChange={this.handleAid1} // Triggers the function in the Part 2
                            />
                            <input id='answer-aid10' hidden={this.state.disable1} type='text' className='form-control'></input>
                            <input id='answer-aid11' hidden={this.state.disable1} type='text' className='form-control'></input>
                            <input id='answer-aid12' hidden={this.state.disable1} type='text' className='form-control'></input>
                            <input id='answer-aid13' hidden={this.state.disable1} type='text' className='form-control'></input>
                            {/* Answer Aid 2 */}
                            <label for='answer-aid2'>Answer Aid2 for this Question</label>
                            <input
                                type="checkbox"
                                name="answer-aid2"
                                id="answer-aid2"
                                onChange={this.handleAid2} // Triggers the function in the Part 2
                            />
                            <input id='answer-aid20' hidden={this.state.disable2} type='text' className='form-control'></input>
                            <input id='answer-aid21' hidden={this.state.disable2} type='text' className='form-control'></input>
                            <input id='answer-aid22' hidden={this.state.disable2} type='text' className='form-control'></input>
                            <input id='answer-aid23' hidden={this.state.disable2} type='text' className='form-control'></input>
                            {/* Answer Aid 3 */}
                            <label for='answer-aid3'>Answer Aid3 for this Question</label>
                            <input
                                type="checkbox"
                                name="answer-aid3"
                                id="answer-aid3"
                                onChange={this.handleAid3} // Triggers the function in the Part 2
                            />
                            <input id='answer-aid30' hidden={this.state.disable3} type='text' className='form-control'></input>
                            <input id='answer-aid31' hidden={this.state.disable3} type='text' className='form-control'></input>
                            <input id='answer-aid32' hidden={this.state.disable3} type='text' className='form-control'></input>
                            <input id='answer-aid33' hidden={this.state.disable3} type='text' className='form-control'></input>
                            <br />
                            <button type='button' className='btn-lg btn-success' onClick={this.handleSubmit}>Add</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}


export default GameQuestion;