import React, { Component } from 'react';
import './App.css';
import games from './games.json';
// import sherapd from './images/sherapd0.jpg'


class App extends Component {
  // this state later will be written into a file in a backend so creator can generate new games without coding
  render = () => {
    function importAll(r) {
      return r.keys().map(r);
    }
    console.log(games)
    let listItems = games
      .filter(game => game.popular == true)
      .map(item =>
        <li key={item.id}>
          {item.Title}
          <img src={require('./images/' + item.images + '.jpg')} />
          {/* <img src={sherapd} alt={"sherapd"} /> */}
        </li>
      );

    return (
      <div className="App">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
          integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
          crossorigin="anonymous" />
        <link rel="stylesheet" href="styles.css"></link>
        <header>
          <h1 className="greeting">
            ESCAPE
          </h1>
        </header>
        <body className="body">
          <p><strong>Popular Games</strong></p>
          <ul>{listItems}</ul>
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