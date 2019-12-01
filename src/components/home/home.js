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
        
        <h1 >Wellcome To Our Website</h1>
        
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
        
      </div>
    );
  }
}
export default home;
