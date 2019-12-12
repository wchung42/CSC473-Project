import React from 'react';
import { shallow } from 'enzyme';
import Home from './home'
//import Navbar from './components/Navbar/Navbar'
const puppeteer=require('puppeteer');
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

test('testing exist button',async() => {
    
            const browser = await puppeteer.launch({
                headless: false,
                slowMo:50,
                args:['--window-size=1920,1080']
            });
            const page = await browser.newPage();
            await page.goto('https://master.d4apr1nsr4agq.amplifyapp.com/');
          
        

            await page.click('button.login');
            await page.click('input.Input__input___3e_bf');
            await page.type('input.Input__input___3e_bf','admin2');
            await page.click('[type=password]');
            await page.type('[type=password]','admin123')
            await page.click('button.Button__button___vS7Mv');
            await page.click('button.toggle-button');
            await page.click('div.toggle-button-line');
            await page.waitForSelector('[href="/About"]');
            await page.click('[href="/About"]');
            await page.waitForSelector('button.toggle-button');
            await page.click('button.toggle-button');
            await page.click('div.toggle-button-line');
            await page.waitForSelector('[href="/Contact"]');
            await page.click('[href="/Contact"]');
            await page.waitForSelector('input#nameInput');
            await page.click('input#nameInput');
            await page.type('input#nameInput','admin2');
            await page.waitForSelector('input#emailInput');
            await page.click('input#emailInput');
            await page.type('input#emailInput','example@com');
            await page.waitForSelector('input#subjectInput');
            await page.click('input#subjectInput');
            await page.type('input#subjectInput','test');
            await page.waitForSelector('textarea#messageInput');
            await page.click('textarea#messageInput');
            await page.type('textarea#messageInput','message');
            await page.waitForSelector('button#submit-button');
            await page.click('button#submit-button');
            await page.type('textarea#messageInput','message');
            await page.waitForSelector('button.toggle-button');
            await page.click('button.toggle-button');
            await page.click('div.toggle-button-line');
            await page.waitForSelector('[href="/Home"]');
            await page.click('[href="/Home"]');
            await page.waitForSelector('div#play-now-button');
            await page.click('div#play-now-button');

            const game=await page.$eval('div.game-list',(div)=>div.className)   
                expect(game).toBe('game-list');



            //await page.click('button.Button__button___vS7Mv');
            // await page.click('button.toggle-button');
            // await page.click('div.toggle-button-line');
            // await page.waitForSelector('[href="/Home"]');
            // await page.click('[href="/Home"]');
            // const about=await page.$eval('mission-statement',(div)=>div.className)   
            // expect(about).toBe('about-container')
            // await page.waitForSelector('div.game-list');
            // await page.hover('div.game-list')
            //     const game=await page.$eval('div.game-list',(div)=>div.className)   
            //     expect(game).toBe('game-list');
        
                await browser.close();  

        },20000)