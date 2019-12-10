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

      it('testing button class name', () => {

        const wrapper = shallow(<div className="toggle-button-line" />);
        expect(wrapper.is('.toggle-button-line')).toEqual(true);
    
      })

      it('testing button event', () => {
        const wrapper= shallow(<DrawerToggleButton />);
        expect(wrapper.find('.toggle-button').length).toEqual(1);
        wrapper.find('.toggle-button').simulate('click');
        expect(wrapper.find('.toggle-button').length).toEqual(1);
      })





 
          

      


})