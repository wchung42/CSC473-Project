import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';


describe('<Navbar /> component testing', () => {
    describe("<Navbar /> renders correctly", () => {
        let wrapper;
        it("renders without crashing", () => { 
            wrapper = shallow(<Navbar />);
            expect(1);
        });
       
    })
})