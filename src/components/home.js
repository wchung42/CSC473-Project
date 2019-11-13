import React from 'react';
import games from './Game/games.json';

const Home = () => {
  let listItems = games
    .filter(game => game.popular == true)
    .map(item =>
      <li className="bodyCard" key={item.id} >
        <div className="card">
          <img
            key={item.id}
            className="card-img-top"
            src={item.thumbnail} />
          <div className="card-body">
            <h5 className="card-title">
              <strong>{item.Title} ({item.Difficulty}/5)</strong>
            </h5>
            <p className="card-text"> {item.Story}</p>
            <a href="#" className="btn btn-primary">Play</a>
          </div>
        </div>
      </li >
    );

  return (
    <section>
      <header className="Welcome-Section">
      </header>
      <div className="Body-Section">
        <p className="popular-game"><strong>POPULAR GAMES</strong></p>
        <ol className="cards" >{listItems}</ol>
      </div>
    </section>
  );
}

export default Home;