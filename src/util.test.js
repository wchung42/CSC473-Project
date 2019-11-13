import React from 'react';
import App from './App';
import Game from './components/Game/Game';
import renderer from 'react-test-renderer';


test('backdropClickHandler Testing',()=>{
    let component=renderer.create(<App />).getInstance();
  
    component.backdropClickHandler();
  
    expect(component.state.sideDrawerMenuOpen).toBeFalsy;
  
  })

  test('drawerToggleClickHandler Testing',()=>{
    let component=renderer.create(<App />).getInstance();

    component.drawerToggleClickHandler();

    expect(component.state.sideDrawerMenuOpen).toBe(true);

  })

  test('getGameId',()=>{
    let component=renderer.create(<Game />).getInstance();

    component.getGameId();

    expect(component.state.gameID).toBe(1)

  })

  test('startGame',()=>{
    let component=renderer.create(<Game />).getInstance();

    component.startGame();

    expect(component.state.gameSynopsis).toBe(0);
    expect(component.state.gameStart).toBe(1);

  }
  )