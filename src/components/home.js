import React from 'react';
import games from './Game/games.json';
import DnDQuestion from './DndQuestion/DnDQuestion';

const Home = () => {
  let listItems = games
    .filter(game => game.Popular == true)
    .map(item =>
      <li className="bodyCard" key={item.id} >
        <div className="card">
          <img
            key={item.Id}
            className="card-img-top"
            src={item.Thumbnail} />
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

  return (
    <div className="body-page">
      <header className="Welcome-Section">
      </header>
      <body className="Body-Section">
        <p className="popular-game"><strong>POPULAR GAMES</strong></p>
        <ol className="cards" >{listItems}</ol>
      </body>
      <DnDQuestion />
    </div>
  );
}

export default Home;