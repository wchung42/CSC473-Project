import React from 'react';
import { shallow } from 'enzyme';
import SideDraw from './SideDrawerMenu'
import sideDrawerMenu from './SideDrawerMenu';
import { exportAllDeclaration } from '@babel/types';
import DrawerToggleButton from './DrawerToggleButton'


describe('<sideDrawerMenu/> component testing', () => {
    let wrapper;
    it("sideDraw child testing", () => {
       const DrawerToggle=shallow(<DrawerToggleButton/ >);
         wrapper = shallow(<sideDrawerMenu/ >);
        DrawerToggle.find('.toggle-button').simulate('click');
        //expect(wrapper.find('div.side-drawer-divider').length).toBe(1)
        expect(wrapper.hasClass('side-drawer-divider'))
            

    })
    it("sideDraw parent class testing", () => {
        const DrawerToggle=shallow(<DrawerToggleButton/ >);
          wrapper = shallow(<sideDrawerMenu/ >);
        // DrawerToggle.find('.toggle-button').simulate('click');
         
         expect(wrapper.hasClass('animateDrawer'))


})

})
