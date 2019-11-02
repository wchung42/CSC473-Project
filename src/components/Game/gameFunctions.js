import games from './games.json';
import React from 'react';
import ReactDOM from "react-dom";

// const render = Component =>
//     ReactDOM.render(Component, document.getElementById("root"));
// render(returnValue);


function getAnswer(gameIndex, questionIndex) {
    return function () {
        let userAnswer = document.getElementById("answer").value;
        let answer = games[gameIndex].answers[questionIndex];
        console.log(games[gameIndex].questions[questionIndex]);
        console.log(userAnswer);
        console.log(answer);
        if (userAnswer == answer) {
            document.getElementById("result").innerText = "Correct";
            console.log(questionIndex)
        }
        else {
            document.getElementById("result").innerText = "Wrong";
            console.log(questionIndex)
        }
    }
}

export default getAnswer