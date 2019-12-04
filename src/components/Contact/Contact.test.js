import React from 'react';
import { shallow } from 'enzyme';
import Contact from './Contact'

describe('contact page', () => {
    it('check that has navigation', () => {
      const wrapper = shallow(< Contact />);
      expect(wrapper.hasClass('navigation'))
    });

    it('check that has user',()=>{
        const wrapper = shallow(< Contact />); 
        expect(wrapper.hasClass('username'))

    })

    it('find the heading of page',()=>{
        const wrapper = shallow(< Contact />); 
        expect(wrapper.find('div#heading-title').length).toBe(1);
    })

    it('find the form group',()=>{
        const wrapper = shallow(< Contact />); 
        expect(wrapper.find('div.form-group').length).toBe(1);


    })

    it('find the meet-team',()=>{
        const wrapper = shallow(< Contact />); 
        expect(wrapper.find('button.btn-lg').length).toBe(1);

    })

});