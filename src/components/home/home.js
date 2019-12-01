import React, { Component } from 'react';
import './home.css';
// Amplify.configure(aws_exports);
// console.log(aws_exports)
//declare query to listGames


class home extends React.Component {
  render() {
    return (
      <div className='landing'>
        
        <img className="hp-image"src={require("./hp.jpg")} alt="logo" />
        
        <div className='banner-text'>
          <h1>IMAGINE ESCAPE ROOMS WITHOUT THE ROOM</h1>
          <h4><strong>Welcome To Escape!</strong></h4>
        </div>
        
        <div id = 'play-now-button'>
          <button className = 'btn-lg btn-danger'>PLAY NOW</button>
        </div>
        <section id='intro'>
          <h3 id='headline'>Introduction</h3>
            <ul>
              <li>
                <strong>Goal</strong>
                <br/>
                 Players cooperatively discover clues, solve puzzles, and accomplish tasks in games in order to know more about our school's history in a limited amount of time
              </li>
              <li>
              <strong>Feature</strong>
              <br/>
                Players play with games according to their geolocation
              </li>
              <li>
                <strong>Step</strong>
                <br/>
                Sign up  
                <br/>                               
                Start the game                  
              </li>
              
            </ul>
          </section>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}
export default home;
