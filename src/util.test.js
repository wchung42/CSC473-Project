import React from 'react';
import App from './App';
import Game from './components/Game/Game';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Puzzle from './components/Game/Puzzle'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import backdrop from './components/Backdrop/Backdrop'


import { shallow, mount } from 'enzyme';
import { async } from 'q';



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

  expect(nav.text()).toEqual('Sign in<DrawerToggleButton /><Authenticator />');

  
});

test('footer Testing', () => {

  const footer= shallow(<Footer />);

  expect(footer.text()).toEqual('Home·Games·About·Faq·ContactEscape Team © 2019');
  expect(footer.find('div.footer-info').length).toBe(1)

  
});

test('Backdrop Testing', () => {

  const Backdrop = shallow(<backdrop />);

  expect(Backdrop.find('div.backdrop').length).toBe(0)


});



