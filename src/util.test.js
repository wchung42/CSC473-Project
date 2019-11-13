import React from 'react';
import App from './App';
import Game from './components/Game/Game';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Puzzle from './components/Game/Puzzle'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

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
  
  const nav= shallow(<Navbar  />);

  expect(nav.text()).toEqual('<drawerToggleButton />');

  
});

test('footer Testing', () => {

  const footer= shallow(<Footer />);

  expect(footer.text()).toEqual('Home·Games·About·Faq·ContactEscape Team © 2019');

  
});
