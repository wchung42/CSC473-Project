import React from 'react';
import { shallow } from 'enzyme';
import DrawerToggleButton from './DrawerToggleButton'


describe('<DrawerToggleButton/> component testing', () => {
    let wrapper;
    it("check button click render", () => {
        wrapper = shallow(<DrawerToggleButton/ >);
        expect(wrapper.find('button.toggle-button').length).toBe(1)        

    })

    it("check button click render", () => {
        wrapper = shallow(<DrawerToggleButton/ >);
        expect(wrapper.find('button.toggle-button').length).toBe(1)        

    })

    it('testing button length', () => {

        const wrapper= shallow(<DrawerToggleButton />);
      
        expect(wrapper.find('button').children().length).toBe(3); 
    
      })

      
})