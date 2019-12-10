import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer'


describe('<footer /> component testing', () => {
    let wrapper;
    it("footer child testing", () => {
        wrapper = shallow(<Footer />);
        const child=wrapper.find('div.footer-social')
        expect(child.length).toBe(1);
        //expect(wrapper.find('/Home').simulate('click').toHaveBeenCalled())
       
            
            

    })
})
    