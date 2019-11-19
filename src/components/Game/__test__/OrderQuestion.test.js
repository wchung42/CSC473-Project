import React from 'react';
import OrderQuestion from '../OrderQuestion/OrderQuestion';
import { shallow, mount } from 'enzyme';

// crash test
describe("OrderQuestion component", () => {
    const wrapper = shallow(<OrderQuestion id = {1} />);
    it("renders without crashing", () => {
        expect(wrapper.find('div.orderQuestion').length).toBe(1);
    });
})
