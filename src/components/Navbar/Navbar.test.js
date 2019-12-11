import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';



describe('<navbar /> component testing', () => {
    test('navbar render testing', () => {
  
      const nav= shallow(<Navbar  />);

      expect(nav.text()).toEqual('Sign in<DrawerToggleButton /><Authenticator />');
      //expect(nav.find('div.navbar').length).toBe(1)
  
});

    test('navbar render testing', () => {
  
    const nav= shallow(<Navbar  />);
    expect(nav.find('Navbar.navigation').length).toBe(1)

})
test('checking navbar children length', () => {
  
    const nav= shallow(<Navbar  />);
    //expect(nav.find('Navbar.navigation').length).toBe(1)
    expect(nav.find('Navbar.navigation').children().length).toBe(4);

})

test('checking logo is render', () => {
  
    const nav= shallow(<Navbar  />);
    //expect(nav.find('Navbar.navigation').length).toBe(1)
    expect(nav.find('div.nav-logo').length).toBe(1)

})

})
