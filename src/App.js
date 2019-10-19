//import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import React, { Component } from 'react';

class App extends Component {
  render = () => {
    let games = [
      {
        "id": "1",
        "Title": "Shepard Hall",
        "Difficulty": 4,
        "Story": "This is a very long long long long long long long long long long long long story",
        "tag": "#ccny, #shepard_hall",
        "popular": true
      },
      {
        "id": "2",
        "Title": "Harris Hall",
        "Difficulty": 2,
        "Story": "This is a very short story",
        "tag": "#ccny, #harris_hall",
        "popular": false
      },
      {
        "id": "3",
        "Title": "Wingate Hall",
        "Difficulty": 3,
        "Story": "This is not a story",
        "tag": "#ccny, #wingate_hall",
        "popular": false
      },
      {
        "id": "4",
        "Title": "Marshak Hall",
        "Difficulty": 4,
        "Story": "This is a very short story",
        "tag": "#ccny, #marshak_hall",
        "popular": true
      },
    ];
    console.log(games)
    //listLength to automatically generate the <ul>

    let listItems = games
      .filter(item => item.popular == true)
      .map(item =>
        <li key={item.id}> {item.Title}</li>
      );

  return (

    <div className="App">

      <Navbar />

      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
          integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
          crossorigin="anonymous" />
        <link rel="stylesheet" href="styles.css"></link>
        <body className="body">
          <p>This is Body</p>
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
