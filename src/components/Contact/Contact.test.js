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
        let wrapper;
        describe('states change when form is changed', () => {
            it('name changes when name is entered', () => {
                wrapper = shallow(<Contact />);
                let input = wrapper.find('#nameInput');
                expect(wrapper.find('#nameInput').length).toBe(1);
                input.simulate('change', {target:{value: 'Yoda'}});
                expect(wrapper.state().name).toEqual('Yoda')
            });
            it('email changes when email is entered', () => {
                wrapper = shallow(<Contact />);
                let input = wrapper.find('#emailInput');
                expect(wrapper.find('#emailInput').length).toBe(1);
                input.simulate('change', {target:{value: 'babyyoda@gmail.com'}});
                expect(wrapper.state().email).toEqual('babyyoda@gmail.com')
            });
            it('message changes when subject is entered', () => {
                wrapper = shallow(<Contact />);
                let input = wrapper.find('#subjectInput');
                expect(wrapper.find('#subjectInput').length).toBe(1);
                input.simulate('change', {target:{value: 'Baby yoda is adorable!!!'}});
                expect(wrapper.state().subject).toEqual('Baby yoda is adorable!!!')
            });
            it('email changes when message is entered', () => {
                wrapper = shallow(<Contact />);
                let input = wrapper.find('#messageInput');
                expect(wrapper.find('#messageInput').length).toBe(1);
                input.simulate('change', {target:{value: 'I love baby yoda.'}});
                expect(wrapper.state().message).toEqual('I love baby yoda.')
            });
        });
        // test the handle submit interaction
        
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