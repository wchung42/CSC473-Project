import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

// https://medium.com/codeclan/testing-react-with-jest-and-enzyme-20505fec4675
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('backdropClickHandler Testing',()=>{
  let component=renderer.create(<App />).getInstance();

  component.backdropClickHandler();

  expect(component.state.sideDrawerMenuOpen).toBeFalsy;

})
test('drawerToggleClickHandler Testing',()=>{
  let component=renderer.create(<App />).getInstance();

  component.drawerToggleClickHandler();

  expect(component.state.sideDrawerMenuOpen).toHaveReturned;

})
const puppeteer=require('puppeteer');

test('testing hero of angle game',async() => {
    const browser = await puppeteer.launch({
        // headless: false,
        // slowMo: 180,
        // args:['window-size = 1920,1080']
    });
    const page = await browser.newPage();
    await page.goto('https://master.dlhem6nvy7qu4.amplifyapp.com');
    await page.click('button.login');
    await page.click('input.Input__input___3e_bf');
    await page.type('input.Input__input___3e_bf','admin2');
    await page.click('[type=password]');
    await page.type('[type=password]','admin12345')
    await page.click('button.Button__button___vS7Mv');
    await page.click('button.toggle-button');
    await page.click('div.toggle-button-line');
    await page.click('[href="/Game"]');
    
    await page.click('#bttn1')
    await page.click('#start-btn')
    let game1=await page.$eval('h1',(e)=>e.textContent);  
    expect(game1).toBe('Hero of the Angle Challenge');

    // testing the hero of the angle game
    await page.click('button#num1');
    await page.click('button#num8');
    await page.click('button#num6');
    await page.click('button#num9');
    await page.click('button#pound');
    let temp = await page.$eval('div#textAnswer', (div) => div.id);
    expect(temp).toBe('textAnswer');
    
    await page.click('input#answerBox');
    await page.type('input#answerBox', 'time');
    await page.click('button#submitBttn');
    temp = await page.$eval('div#textAnswer', (div) => div.id);
    expect(temp).toBe('textAnswer');

    await page.click('input#answerBox');
    await page.type('input#answerBox', 'cane');
    await page.click('button#submitBttn');
    temp = await page.$eval('div#textAnswer', (div) => div.id);
    expect(temp).toBe('textAnswer');

    await page.click('input#answerBox');
    await page.type('input#answerBox', 'horace webster');
    await page.click('button#submitBttn');
    temp = await page.$eval('div#numPad', (div) => div.id);
    expect(temp).toBe('numPad');

    await page.click('button#num7');
    await page.click('button#pound');
    
    await page.click('button#num1');
    await page.click('button#num2');
    await page.click('button#pound');

    await browser.close();
},20000);

