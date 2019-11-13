import React from 'react';
import ReactDOM from 'react-dom';
import Game from './../Game';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';


// crash test
it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Game />, div);
    ReactDOM.unmountComponentAtNode(div);
});

// test getGameID
describe("component renders with only one game div", () => {
    // let wrapper;
    // beforeEach(() => { wrapper = shallow(<Game />); });
    let wrapper = mount(<Game />);

    it('includes a div with className game', () => {
        expect(wrapper.find(Game).length).toBe(1);
    });

})


