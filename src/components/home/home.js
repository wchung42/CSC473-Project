import React, { Component } from 'react';
import './home.css';
// Amplify.configure(aws_exports);
// console.log(aws_exports)
//declare query to listGames


class home extends Component {
  render() {
    return (
      <div className='landing'>
        
        <img className="hp-image"src={require("./hp.jpg")} alt="logo" />
        
        <div className='banner-text'>
          <h1>NO ROOM? NO PROBLEM!</h1>
          <h4><strong>Welcome To Escape!</strong></h4>
        </div>
        
        <div id = 'play-now-button'>
          <a href = '/game' className = 'btn-lg btn-danger'>PLAY NOW</a>
        </div>
        <br/>
        <div id='intro'>
          {/* <h3 id='headline'>Introduction</h3> */}
            {/* <ul>
              <li>
                <strong>Goal</strong>
                <br/>
                 -players cooperatively discover clues, solve puzzles, and accomplish tasks in games in order to know more about our school's history in a limited amount of time'
              </li>
              <div className = 'intro-dividers'>
                __________________________________
              </div>
              <li>
              <strong>Feature</strong>
              <br/>
                -players play with games according to their geolocation
              </li>
              <div className = 'intro-dividers'>
                __________________________________
              </div>
              <li>
                <strong>Step</strong>
                <br/>
                -sign up  
                <br/>                               
                -start the game                  
              </li>
              
            </ul> */}
            <div className = 'mission-text'>
              <strong>Goal</strong>
                <br/>
              <p>Players cooperatively discover clues, solve puzzles, and accomplish tasks in games in order to know more about our school's history in a limited amount of time</p>
            </div>
            <div className = 'intro-dividers'>
                __________________________________
            </div>
            <div className = 'mission-text'>
              <strong>Feature</strong>
                <br/>
              <p>Geolocation-based. Puzzle games everywhere, anytime.</p>
            </div>
            <div className = 'intro-dividers'>
                __________________________________
            </div>
            <div className = 'mission-text'>
              <strong>How To Play</strong>
                <br/>
              <ol>
                <li>Sign up</li>
                <li>Select a game</li>
                <li>Head to the designated location</li>
                <li>Hit PLAY!</li>
              </ol>
              
            </div>
            <div className = 'intro-dividers'>
                __________________________________
            </div>
          </div>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}
export default home;
