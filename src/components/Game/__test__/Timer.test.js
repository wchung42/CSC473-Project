import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './../Timer';
import {convertSeconds} from './../Timer'
import { shallow, mount } from 'enzyme';

// initial test
describe("Timer component", () => {
    it("renders", () => {
        const wrapper = shallow(<Timer />);
        expect(wrapper.exists()).toBe(true);
    })

    // test count
    it("renders with initial time 1 second", () => {
        let wrapper = shallow(<Timer />)
        wrapper.setState({
            count: 1
        })
        expect(wrapper.state('count')).toEqual(1);
    });

    it("renders with initial time 300 seconds", () => {
        let wrapper = shallow(<Timer />)
        wrapper.setState({
            count: 300
        })
        expect(wrapper.state('count')).toEqual(300);
    });

    // test seconds to minute convert function
    describe("converts seconds to minutes", () => {
        const wrapper = shallow(<Timer />);
        it("3599 seconds is 59 minutes 59 seconds", () => {
            const value = wrapper.instance().convertSeconds(3599);
            expect(value).toEqual('59:59');
        });
        it("300 seconds is 5 minutes", () => {
            const value = wrapper.instance().convertSeconds(300);
            expect(value).toEqual('05:00');
        });
        it("60 seconds is 1 minute", () => {
            const value = wrapper.instance().convertSeconds(60);
            expect(value).toEqual('01:00');
        });
        it("30 seconds is 00:30", () => {
            const value = wrapper.instance().convertSeconds(30);
            expect(value).toEqual('00:30');
        });
    });

});

