import React from 'react';
import Puzzle from './../Puzzle';
import Endgame from './../Endgame';
import Question from './../Question';
import Answer from './../Answer';
import Timer from './../Timer';
import { shallow, mount } from 'enzyme';

describe("Puzzle component", () => {
    it("Puzzle component renders", () => {
        const wrapper = mount(<Puzzle gameId = {0}/>);
        expect(wrapper.exists()).toBe(true);
    })

    describe("Renders correct page based on win condition", () => {
        it("Renders win page on win condition", () => {
            const wrapper = shallow(<Puzzle gameId = {0}/>)
            wrapper.setState({
                gameState: false
            });
            expect(wrapper.find(Endgame).length).toBe(1);
        })
        it("Renders question and answer while game in session", () => {
            const wrapper = shallow(<Puzzle gameId = {0} />)
            expect(wrapper.find(Question).length).toBe(1);
            expect(wrapper.find(Answer).length).toBe(1);
        })
    })

    it("Timer stops upon win condition", () => {    
        const mock = jest.fn();
        const wrapper = shallow(<Puzzle gameId = {0} gameHandler = {mock}/>);
        wrapper.setState({
            win: true,
        })
        const wrapperInstance = wrapper.instance();
        wrapperInstance.componentDidUpdate();
        expect(wrapper.state('timeStopper')).toBe(1);
    })
})