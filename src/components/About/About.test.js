import React from 'react';
import { shallow } from 'enzyme';
import About from './About'


describe('about page', () => {
    

    it('check that has navigation', () => {
      const wrapper = shallow(< About />);
      expect(wrapper.hasClass('navigation'))
    });
    it('check about page child length', () => {
        const wrapper = shallow(< About />);
        expect(wrapper.find('div.about-container').children().length).toBe(4);
      });

      it('check about childs parent', () => {
        const wrapper = shallow(< About />);
        expect(wrapper.find('div.heading').parent().length).toEqual(1);
      });

    it('check that has user',()=>{
        const wrapper = shallow(< About />); 
        expect(wrapper.hasClass('username'))

    })

    it('find the heading of page',()=>{
        const wrapper = shallow(< About />); 
        expect(wrapper.find('div.heading').length).toBe(1);
    })

    it('find the mission stage',()=>{
        const wrapper = shallow(< About />); 
        expect(wrapper.find('div.mission-statement').length).toBe(1);


    })

    it('find the meet-team',()=>{
        const wrapper = shallow(< About />); 
        expect(wrapper.find('div.meet-team').length).toBe(1);

    })

    

    








});