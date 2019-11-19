import React from 'react';
import OrderQuestion from '../OrderQuestion/OrderQuestion';
import Row from '../OrderQuestion/Row';
import { DragDropContext } from 'react-beautiful-dnd';
import { shallow, mount } from 'enzyme';

// crash test
describe("OrderQuestion component renders correctly", () => {
    let wrapper;
    beforeEach(() => {wrapper = shallow(<OrderQuestion id = {1} />);})

    // crash test
    it("renders without crashing", () => {
        expect(wrapper.find('div.orderQuestion').length).toBe(1);
    });

    // drag context test
    it ("dragdrop context renders", () => {
        expect(wrapper.find(DragDropContext).length).toBe(1);
    });

    // row render test
    it("row of images renders", () => {
        expect(wrapper.find(Row).length).toBe(1);
    });
})
