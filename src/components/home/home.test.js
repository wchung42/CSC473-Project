import React from 'react';
import { shallow } from 'enzyme';
import Home from './home'
//import Navbar from './components/Navbar/Navbar'

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

        it('renders out text in home page', () => {
            wrapper = shallow(<Home/>);

            expect(wrapper.find('div.banner-text').length).toBe(1);
        
        });

        it('renders out play button',()=>{
            wrapper=shallow(<Home />);

            expect(wrapper.find('div#play-now-button').length).toBe(1);
        })

        it('renders out intro section',()=>{
            wrapper=shallow(<Home />);

            expect(wrapper.find('div#intro').length).toBe(1);
        })

        it('renders out mission-text section',()=>{
            wrapper=shallow(<Home />);

            expect(wrapper.find('div.mission-text').length).toBe(3);
        })


    })
})
