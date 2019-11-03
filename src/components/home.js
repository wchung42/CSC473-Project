import React from 'react';
import games from '../games.json';

const Home = () => {
let listItems = games
.filter(game => game.popular == true)
.map(item =>
  <li className="bodyCard" key={item.id} >
    <div className="card">
      <img
        key={item.id}
        className="card-img-top"
        src={require('../images/' + item.thumbnail)}
        onMouseEnter={e => e.currentTarget.src = require('../images/' + item.id + "/1.jpg")}
        onMouseOut={e => e.currentTarget.src = require('../images/' + item.thumbnail)} />
      <div className="card-body">
        <h5 className="card-title">
          <strong>{item.Title} ({item.Difficulty}/5)</strong>
        </h5>
        <p className="card-text"> {item.Story}</p>
        <a href="#" class="btn btn-primary">Play</a>
      </div>
    </div>
  </li >
);

return(
    <section className="middle">
          <header className="Welcome-Section">
          </header>
          

          <body className="Body-Section">
            <p className="popular-game"><strong>POPULAR GAMES</strong></p>
            <ol className="cards" >{listItems}</ol>
          </body>
        </section>
);
}

export default Home;