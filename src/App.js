import React, { Component } from 'react';
import games from './games.json';
import './App.css';
import Navbar from './components/Navbar/Navbar';
// import sherapd from './images/sherapd0.jpg'

class App extends Component {
  // this state later will be written into a file in a backend so creator can generate new games without coding
  render = () => {
    console.log(games)
    let listItems = games
      .filter(game => game.popular == true)
      .map(item =>
        <li className="bodyTitle" key={item.id} onMouseEnter={console.log(item.Story)}>
          <strong>{item.Title} </strong>
          <strong>({item.Difficulty}/5)</strong>
          <br />
          <img className="bodyImage" src={require('./images/' + item.images + '.jpg')} />

        </li >
      );

    return (
      <div className="App">
         <Navbar />                           
                                         
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
          integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
          crossorigin="anonymous" />
        <link rel="stylesheet" href="styles.css"></link>
        <header>
          <h1 className="greeting">
            <br/>
          </h1>
        </header>
        <body className="body">
          <p><strong>Popular Games</strong></p>
          <ol >{listItems}</ol>
        </body>
        <footer>
          <a id="profile-link" href="" target="_blank" className="btn contact-details"><i className="fab fa-github"></i> GitHub</a>
          <a id="facebook" href="" target="_blank" className="btn contact-details"><i className="fab fa-facebook"></i> Facebook</a>
          <a id="instagram" href="" target="_blank" className="btn contact-details"><i className="fab fa-instagram" id="inst-logo"></i> Instagram</a>
          <a id="freecodecamp" href="" target="_blank" className="btn contact-details"><i className="fab fa-free-code-camp"></i> FreeCodeCamp</a>
          <a id="LinkedIn" href="" target="_blank" className="btn contact-details"><i className="fab fa-linkedin"></i> LinkedIn</a>
        </footer>
      </div>
    );
  }
}


export default App;