import React from 'react';
import App from './App';
import Game from './components/Game/Game';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Puzzle from './components/Game/Puzzle'
import Navbar from './components/Navbar/Navbar'

import { shallow, mount } from 'enzyme';
import { isTSAnyKeyword } from '@babel/types';


test('backdropClickHandler Testing',()=>{
  let component=renderer.create(<App />).getInstance();

  component.backdropClickHandler();

  expect(component.state.sideDrawerMenuOpen).toBeFalsy;

})
test('drawerToggleClickHandler Testing',()=>{
  let component=renderer.create(<App />).getInstance();

  component.drawerToggleClickHandler();

  expect(component.state.sideDrawerMenuOpen).toHaveReturned;

})

test('navbar Testing', () => {
  // Render a checkbox with label in the document
  const nav= shallow(<Navbar labelOn="On" labelOff="Off" />);

  expect(nav.text()).toEqual('<drawerToggleButton />');

  
});
