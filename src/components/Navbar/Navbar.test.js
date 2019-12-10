import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';


describe('<Navbar /> component testing', () => {
    describe("<Navbar /> renders correctly", () => {
        let wrapper;
        it("renders without crashing", () => { 
            wrapper = shallow(<Navbar />);
            expect(1);
        });
       
    })
})
describe('<navbar /> component testing', () => {
    test('navbar render testing', () => {
  
      const nav= shallow(<Navbar  />);

      expect(nav.text()).toEqual('Sign in<DrawerToggleButton /><Authenticator />');
      //expect(nav.find('div.navbar').length).toBe(1)
  
});
})