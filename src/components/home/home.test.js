import React from 'react';
import { shallow } from 'enzyme';
import Home from './home'

describe('<Home /> component testing', () => {
    describe("<Home /> renders correctly", () => {
        let wrapper;
        it("renders without crashing", () => { 
            wrapper = shallow(<Home />);
            expect(wrapper.find('div.landing').length).toBe(1);
        });
        it('renders out image', () => {
            wrapper = shallow(<Home />);
            expect(wrapper.find('img.hp-image').length).toBe(1);
        });
    })
})