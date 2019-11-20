import React from 'react';
import ReactDOM from 'react-dom';
import Game from './../Game';
import Timer from './../Timer';
import { shallow, mount } from 'enzyme';

const puppeteer=require('puppeteer');

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

describe("component renders different pages based on states", () => {
    let wrapper;
    beforeEach(() => { wrapper = shallow(<Game />); });
    
    // renders game list
    it('renders div with className game-list', () => {
        wrapper.setState( {
            gameReady: false,
            gameSynopsis: 0,
            gameStart: 0,
        });
        wrapper.update();
        expect(wrapper.find('div.game-list').length).toBe(1);
    });

    // renders synopsis
    it('renders div with className synopsis', () => {
        wrapper.setState( {
            gameReady: true,
            gameSynopsis: 1,
            gameStart: 0,
        });
        wrapper.update();
        expect(wrapper.find('div.synopsis').length).toBe(1);
    });

    it('renders div with className gameInterface', () => {
        wrapper.setState ( {
            gameReady: true,
            gameSynopsis: 0,
            gameStart: 1,
        });
        wrapper.update();
        expect(wrapper.find('div.gameInterface').length).toBe(1);
        expect(wrapper.find(Timer).length).toBe(1);
    })
});

test('testing location button ',async() => {

    const browser = await puppeteer.launch({
        headless: false,
        slowMo:180,
        args:['--window-size=1920,1080']
    });
    const page = await browser.newPage();
    await page.goto('https://master.dlhem6nvy7qu4.amplifyapp.com/Game');
    
    await page.click('button.Location');
        let location=await page.$eval('button.Location',(button)=>button.className)   
        expect(location).toBe('Location');
    
        await browser.close(); 
  },10000);

  test('testing exist button',async() => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://master.dlhem6nvy7qu4.amplifyapp.com/Game');
    
    await page.click('div.exit');
        let exit=await page.$eval('div.exit',(div)=>div.className)   
        expect(exit).toBe('exit');
  
        
  },20000);

  test('testing hover page get className',async() => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://master.dlhem6nvy7qu4.amplifyapp.com/Game');
    
    await page.hover('div.game-list')
        let game=await page.$eval('div.game-list',(div)=>div.className)   
        expect(game).toBe('game-list');
  
       
  },20000);

  test('testing start game',async() => {

    const browser = await puppeteer.launch({
        headless: false,
        slowMo:180,
        args:['--window-size=1920,1080']
    });
    const page = await browser.newPage();
    await page.goto('https://master.dlhem6nvy7qu4.amplifyapp.com/Game');
    
    await page.click('#bttn0')
    await page.click('#start-btn')
        let game=await page.$eval('#timer',(e)=>e.textContent);  
        expect(game).toBe('05:00');
  
        await browser.close();
  },20000);




