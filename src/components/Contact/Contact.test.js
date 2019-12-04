import React from 'react';
import { shallow } from 'enzyme';
import Contact from './Contact'

describe('<Contact /> component testing', () => {
    describe("<Contact /> renders correctly", () => {
        let wrapper;
        it("renders without crashing", () => { 
            wrapper = shallow(<Contact />);
            expect(wrapper.find('div.container').length).toBe(1);
        });
        it('renders out the form', () => {
            wrapper = shallow(<Contact />);
            expect(wrapper.find('div.form-group').length).toBe(1);
        });
        it('has correct number of form elements', () => {
            wrapper = shallow(<Contact />);
            expect(wrapper.find('label').length).toBe(4);
            expect(wrapper.find('input').length).toBe(3);
            expect(wrapper.find('textarea').length).toBe(1);
        });
        it('has one submit button', () => {
            wrapper = shallow(<Contact />);
            expect(wrapper.find('button#submit-button').length).toBe(1);
        })
    });
    describe("<Contact /> interactions", () => {
        
    })

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