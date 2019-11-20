import React from 'react';
import Answer from '../Answer';
import { shallow, mount } from 'enzyme';
import OrderQuestion from '../OrderQuestion/OrderQuestion';

describe("<Answer/> component", () => {
    describe("<Answer/> renders correctly", () => {
        let wrapper;
        it("renders without crashing", () => { 
            wrapper = shallow(<Answer id = {1}/>);
            expect(wrapper.find('div.answerSpace').length).toBe(1);
        })

        it('number question renders numpad', () => {
            const testProps = {
                id: 1,
                qId: 1
            }
            wrapper = shallow(<Answer {...testProps} />);
            expect(wrapper.find('#numPad').length).toBe(1);
        })

        it('numpad should have 12 buttons', () => {
            wrapper = shallow(<Answer id = {1} qId = {1}/>);
            expect(wrapper.find('button.number').length).toBe(12);
        })

        it('text question renders text', () => {
            const testProps = {
                id: 1,
                qId: 2
            }
            
            wrapper = shallow(<Answer {...testProps} />);
            expect(wrapper.find('#textAnswer').length).toBe(1);
        })

        it('text question should have 1 textfield', () => {
            wrapper = shallow(<Answer id = {1} qId = {2}/>);
            expect(wrapper.find('#textAnswer').length).toBe(1);
        })

        it('ordering question renders drag and drop', () => {
            const testProps = {
                id: 1,
                qId: 7
            }
            
            wrapper = shallow(<Answer {...testProps} />);
            expect(wrapper.find(OrderQuestion).length).toBe(1);
        })
    })

})