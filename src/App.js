import React, { Component } from 'react';
import './App.css';
import games from './games.json';
// import Sherapd from "./images/shepard0.jpeg";
// import Harris from "./images/harris0.jpeg";
// import Wingate from "./images/wingate0.jpeg";
// import Marshak from "./images/marshak0.jpeg";



class App extends Component {
  // this state later will be written into a file in a backend so creator can generate new games without coding
  render = () => {
    let thumbNails = ["Sherapd", "Harris", "Wingate", "Marshak"]
    console.log(games)
    //listLength to automatically generate the <ul>

    let listItems = games
      .filter(item => item.popular == true)
      .map(item =>
        <li key={item.id}>
          {item.Title}
          {/* <img src={require({ item[images] })} /> */}
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
            Hello World
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