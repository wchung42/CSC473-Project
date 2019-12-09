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
describe('<navbar /> component testing', () => {
    test('navbar render testing', () => {
  
      const nav= shallow(<Navbar  />);

      expect(nav.text()).toEqual('Sign in<DrawerToggleButton /><Authenticator />');
      //expect(nav.find('div.navbar').length).toBe(1)
  
});
})
describe('<footer /> component testing', () => {
    test('footer Testing', () => {

      const footer= shallow(<Footer />);

      expect(footer.text()).toEqual('Home·Games·About·Faq·ContactEscape Team © 2019');
      expect(footer.find('div.footer-info').length).toBe(1)

});
test('render out footer', () => {

  const footer= shallow(<Footer />);

 
  expect(footer.find('div.footer-info').length).toBe(1)

})
test('render out footer-social', () => {

  const footer= shallow(<Footer />);

 
  expect(footer.find('div.footer-social').length).toBe(1)

})
test('render out footer-info', () => {

  const footer= shallow(<Footer />);

 
  expect(footer.find('div.footer-info').length).toBe(1)

})
test('render out footer-info', () => {

  const footer= shallow(<Footer />);

 
  expect(footer.find('div.footer-info').length).toBe(1)

})


})
describe('<footer /> text and icon testing', () => {

  test('testing icon in footer', () => {

    const footer= shallow(<Footer />);
  
   
    expect(footer.find('i.fa-facebook').length).toBe(1)
    expect(footer.find('i.fa-twitter').length).toBe(1)
    expect(footer.find('i.fa-linkedin').length).toBe(1)
    expect(footer.find('i.fa-github').length).toBe(1)
  
  })
  test('testing icon in footer', () => {

    const footer= shallow(<Footer />);
  
    expect(footer.find('p').children().length).toBe(10);
   

  })



})

// test('Backdrop Testing', () => {

//   const Backdrop = shallow(<backdrop />);

//   expect(Backdrop.find('footer.footer-all').length).toBe(1)


// });



