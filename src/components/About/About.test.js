import React from 'react';
import { shallow } from 'enzyme';
import About from './About'


describe('about page', () => {
    it('check that has navigation', () => {
      const wrapper = shallow(< About />);
      expect(wrapper.hasClass('navigation'))
    });

    it('check that has user',()=>{
        const wrapper = shallow(< About />); 
        expect(wrapper.hasClass('username'))

    })

    it('find the heading of page',()=>{
        const wrapper = shallow(< About />); 
        expect(wrapper.find('div.heading').length).toBe(1);
    })








});