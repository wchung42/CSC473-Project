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
                qId: 1,
                answerType: 'Number'
            }
            wrapper = shallow(<Answer {...testProps} />);
            expect(wrapper.find('#numPad').length).toBe(1);
        })

        it('numpad should have 12 buttons', () => {
            wrapper = shallow(<Answer id = {1} qId = {1} answerType={'Number'}/>);
            expect(wrapper.find('button.number').length).toBe(12);
        })

        it('text question renders text', () => {
            const testProps = {
                id: 1,
                qId: 2,
                answerType: 'Number'
            }
            
            wrapper = shallow(<Answer {...testProps} />);
            expect(wrapper.find('#textAnswer').length).toBe(1);
        })

        it('text question should render with 1 textfield', () => {
            wrapper = shallow(<Answer id = {1} qId = {2} answerType={'Number'}/>);
            expect(wrapper.find('#textAnswer').length).toBe(1);
        })

        it('text question should render with 1 submit button', () => {
            wrapper = shallow(<Answer id = {1} qId = {2} answerType={'Number'}/>);
            expect(wrapper.find('#submitBttn').length).toBe(1);
        })

        it('ordering question renders drag and drop', () => {
            const testProps = {
                id: 1,
                qId: 7,
                answerType: 'Number'
            }
            wrapper = shallow(<Answer {...testProps} />);
            expect(wrapper.find(OrderQuestion).length).toBe(1);
        })

        it('ordering question renders with 1 submit button', () => {
            wrapper = shallow(<Answer id = {1} qId = {7} answerType={'Number'}/>);
            expect(wrapper.find('#submitButtonOrder').length).toBe(1);
        })
    })

    describe('<Answer /> interactions', () => {
        let wrapper;
        //beforeEach(() => {wrapper = shallow(<Answer />);})

        it('pressing on numpad buttons should call enterNum', () => {
            wrapper = shallow(<Answer id = {1} qId = {1} />)
            const instance = wrapper.instance();
            //jest.spyOn(document, 'getElementById').mockReturnValueOnce({value: 'pound'});
            const spy = jest.spyOn(instance, "enterNum");
            instance.forceUpdate();
            // let button = wrapper.find('#num7');
            // expect(button.length).toBe(1);
            // button.simulate('click', { currentTarget: "" }, spy);
            //expect(spy).toHaveBeenCalled();
            let button;
            for (let i = 0; i < 9; i++) {
                jest.spyOn(document, 'getElementById').mockReturnValueOnce({value: 'pound'});
                button = wrapper.find('#num' + i);
                expect(button.length).toBe(1);
                button.simulate('click', { currentTarget: i}, spy);
                expect(spy).toHaveBeenCalled();
            }
            jest.spyOn(document, 'getElementById').mockReturnValueOnce({value: 'pound'});
            
            button = wrapper.find('#numDot');
            expect(button.length).toBe(1);
            button.simulate('click', { currentTarget: '.'}, spy);
            expect(spy).toHaveBeenCalled();

        })
    })

})