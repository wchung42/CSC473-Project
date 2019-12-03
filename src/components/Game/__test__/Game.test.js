import React from 'react';
import ReactDOM from 'react-dom';
import Game from './../Game';
import Timer from './../Timer';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import { async } from 'q';

const puppeteer=require('puppeteer');

// describe("Game component testing", () => {
//     // crash test
//     it("renders without crashing", () => {
//         const div = document.createElement("div");
//         ReactDOM.render(<Game />, div);
//         ReactDOM.unmountComponentAtNode(div);
//     });

//     // test getGameID
//     describe("component renders with only one game div", () => {
//         // let wrapper;
//         // beforeEach(() => { wrapper = shallow(<Game />); });
//         let wrapper = mount(<Game />);

//         it('includes a div with className game', () => {
//             expect(wrapper.find(Game).length).toBe(1);
//         });

//     })

//     describe("component renders different pages based on states", () => {
//         let wrapper;
//         beforeEach(() => { wrapper = mount(<Game />); });
        
//         // renders game list
//         it('user starts at game list page', () => {
//             expect(wrapper.find('div.game-list').length).toBe(1);
//         });

//         // renders synopsis
//         it('renders div with className synopsis', () => {
//             // wrapper.setState( {
//             //     gameReady: true,
//             //     gameSynopsis: 1,
//             //     gameStart: 0,
//             // });
//             //wrapper.update();
//             const button = wrapper.find('#bttn0');
//             expect(button.length).toBe(1);
//             button.simulate('click');
//             expect(wrapper.find('div.synopsis').length).toBe(1);
//         });

//         it('renders div with className gameInterface', () => {
//             // wrapper.setState ( {
//             //     gameReady: true,
//             //     gameSynopsis: 0,
//             //     gameStart: 1,
//             // });
//             // wrapper.update();
//             let button = wrapper.find('#bttn0');
//             expect(button.length).toBe(1);
//             button.simulate('click');
//             button = wrapper.find('#start-btn');
//             button.simulate('click');
//             expect(wrapper.find('div.gameInterface').length).toBe(1);
//             expect(wrapper.find(Timer).length).toBe(1);
//         })
//     })

    describe('puppeteer testing', () => {
        test('testing login page',async()=>{
            const browser = await puppeteer.launch({
               
            });
            const page = await browser.newPage();
            await page.goto('https://master.dlhem6nvy7qu4.amplifyapp.com');
            await page.click('button.login');

            let login=await page.$eval('button.login',(button)=>button.className)   
                expect(login).toBe('login');
            
                await browser.close(); 
        },10000);


        

        test('testing login user name ',async() => {

            const browser = await puppeteer.launch({
              
               });
            const page = await browser.newPage();
            await page.goto('https://master.dlhem6nvy7qu4.amplifyapp.com');
            
            await page.click('button.login');
            await page.click('input.Input__input___3e_bf');
            await page.type('input.Input__input___3e_bf','admin12345');
            await page.click('[type=password]');
            await page.type('[type=password]','admin12345')
            await page.click('button.Button__button___vS7Mv');
            await page.click('button.toggle-button');
            
            
            let name=await page.$eval('li',(e)=>e.textContent) 
            expect(name).toBe('Games');

                
            
            await browser.close(); 
        },20000);

        // test('testing location ',async() => {

        //     const browser = await puppeteer.launch({
        //         headless: false,
        //         slowMo:50,
        //         args:['--window-size=1920,1080']
        //        });
        //     const page = await browser.newPage();
        //     await page.goto('https://master.d4apr1nsr4agq.amplifyapp.com/');
            
        //     await page.click('button.login');
        //     await page.click('input.Input__input___3e_bf');
        //     await page.type('input.Input__input___3e_bf','admin2');
        //     await page.click('[type=password]');
        //     await page.type('[type=password]','admin123')
        //     await page.click('button.Button__button___vS7Mv');
        //     await page.click('button.toggle-button');
        //     await page.click('div.toggle-button-line');
        //     await page.waitForSelector('[href="/Game"]');
        //     await page.click('[href="/Game"]');
        //     await page.waitForSelector('button.Location');
        //     await page.click('button.Location');
        //     const location=await page.$eval('button.Location',(button)=>button.className)   
        //     expect(location).toBe('Location');   
                
            
        //     await browser.close(); 
        // },30000);
    
    
        // test('testing exist button',async() => {
    
        //     const browser = await puppeteer.launch({
        //         headless: false,
        //         slowMo:50,
        //         args:['--window-size=1920,1080']
        //     });
        //     const page = await browser.newPage();
        //     await page.goto('https://master.d4apr1nsr4agq.amplifyapp.com/');
        //     await page.click('button.login');
        //     await page.click('input.Input__input___3e_bf');
        //     await page.type('input.Input__input___3e_bf','admin2');
        //     await page.click('[type=password]');
        //     await page.type('[type=password]','admin123')
        //     await page.click('button.Button__button___vS7Mv');
        //     await page.click('button.toggle-button');
        //     await page.click('div.toggle-button-line');
        //     await page.waitForSelector('[href="/Game"]');
        //     await page.click('[href="/Game"]');
        //     await page.waitForSelector('div.exit');
        //     await page.click('div.exit');
        //         const exit=await page.$eval('div.exit',(div)=>div.className)   
        //         expect(exit).toBe('exit');
        
        //         await browser.close();  
        // },30000);
    
        // test('testing hover page get className',async() => {
    
        //     const browser = await puppeteer.launch({
        //         headless: false,
        //         slowMo:80,
        //         args:['--window-size=1920,1080']
        //     });
            
        //     const page = await browser.newPage();
        //     await page.goto('https://master.d4apr1nsr4agq.amplifyapp.com/');
            
        //     await page.click('button.login');
        //     await page.click('input.Input__input___3e_bf');
        //     await page.type('input.Input__input___3e_bf','admin2');
        //     await page.click('[type=password]');
        //     await page.type('[type=password]','admin123')
        //     await page.click('button.Button__button___vS7Mv');
        //     await page.click('button.toggle-button');
        //     await page.click('div.toggle-button-line');
        //     await page.waitForSelector('[href="/Game"]');
        //     await page.click('[href="/Game"]');
        //     await page.waitForSelector('div.game-list');
        //     await page.hover('div.game-list')
        //         const game=await page.$eval('div.game-list',(div)=>div.className)   
        //         expect(game).toBe('game-list');
        
        //         await browser.close();  
            
        // },20000);
    
        // test('testing curious game',async() => {
    
        //     const browser = await puppeteer.launch({
        //         headless: false,
        //         slowMo:80,
        //         args:['--window-size=1920,1080']
        //     });
        //     const page = await browser.newPage();
        //     await page.goto('https://master.d4apr1nsr4agq.amplifyapp.com/');
        //     await page.click('button.login');
        //     await page.click('input.Input__input___3e_bf');
        //     await page.type('input.Input__input___3e_bf','admin2');
        //     await page.click('[type=password]');
        //     await page.type('[type=password]','admin123')
        //     await page.click('button.Button__button___vS7Mv');
        //     await page.click('button.toggle-button');
        //     await page.click('div.toggle-button-line');
        //     await page.waitForSelector('[href="/Game"]');
        //     await page.click('[href="/Game"]');
        //     await page.waitForSelector('button#bttn0');
        //     await page.click('button#bttn1');
        //     await page.click('#start-btn');
        //     const text=await page.$eval('div.synopsis',(e)=>e.textContent);  
        //         expect(text).toBe('Some spirits are strong and manifest in a ghost like form, most are weak and must live on in within a host. The host is usually an object. CCNY is known for having dead in the library due to an impossible engineering department. The Grove School of Engineering has caused this room to become filled with spirits trapped in objects, we need you to set them free!');
        //         expect( await page.$eval('.start',(e)=>e.className)).toBe('start')
        //     await page.click('.start');
        //     await page.waitForSelector('button#start-btn');
        //     await page.click('button#start-btn')
            
        //     await page.waitForSelector('p#timer');
        //     const time=await page.$eval('p#timer',(e)=>e.textContent); 
        //     expect(time).toBe('30:00')

        //        await browser.close();
        // },30000);
        test('testing math game',async() => {
    
            const browser = await puppeteer.launch({
                headless: false,
                slowMo:80,
                args:['--window-size=1920,1080']
            });
            const page = await browser.newPage();
            await page.goto('https://master.d4apr1nsr4agq.amplifyapp.com');
            await page.click('button.login');
            await page.click('input.Input__input___3e_bf');
            await page.type('input.Input__input___3e_bf','admin2');
            await page.click('[type=password]');
            await page.type('[type=password]','admin123')
            await page.click('button.Button__button___vS7Mv');
            await page.click('button.toggle-button');
            await page.click('div.toggle-button-line');
            await page.waitForSelector('[href="/Game"]'); 
            await page.click('[href="/Game"]');
            await page.waitForSelector('button#bttn1');
            await page.click('button#bttn1');
            await page.waitForSelector('div.synopsis'); 
            const text=await page.$eval('div.synopsis',(e)=>e.textContent); 
            expect(text).toBe('Math is hard regardless of your level of education!')
            
            const context = browser.defaultBrowserContext();
            await context.overridePermissions('https://master.d4apr1nsr4agq.amplifyapp.com', ['geolocation']);
            await page.waitForSelector('button#start-btn');
            await page.click('button#start-btn');
            await page.click('button#start-btn');
            
            // page.on('dialog', async dialog => {
            //     console.log(dialog.message());
            //     await dialog.accept();
            //     //await browser.close();
            //   });
              
            await page.waitForSelector('button#num2');
            await page.click('button#num2');
            // await page.click('button#pound');



           // expect( await page.$eval('.start',(e)=>e.className)).toBe('start')
            // await page.waitForSelector('.start');
            // await page.click('.start');
            // await page.waitForSelector('button#start-btn');
            // await page.click('button#start-btn')
            
            // await page.waitForSelector('p#timer');
            // const time=await page.$eval('p#timer',(e)=>e.textContent); 
            // expect(time).toBe('30:00')
            //const question=await page.$eval('h1',(e)=>e.textContent); 
           // expect(question).toBe('chalenge')

            await browser.close();
        },40000);
    
        // test('testing hero of angle game',async() => {
    
        //     const browser = await puppeteer.launch({
        //         headless: false,
        //         slowMo: 80,
        //         args:['window-size = 1920,1080']
        //     });
        //    const page = await browser.newPage();
        //     await page.goto('https://master.dlhem6nvy7qu4.amplifyapp.com');
        //     await page.click('button.login');
        //     await page.click('input.Input__input___3e_bf');
        //     await page.type('input.Input__input___3e_bf','admin12345');
        //     await page.click('[type=password]');
        //     await page.type('[type=password]','admin12345')
        //     await page.click('button.Button__button___vS7Mv');
        //     await page.click('button.toggle-button');
        //     await page.click('div.toggle-button-line');
        //     await page.click('[href="/Game"]');
            
        //     await page.click('#bttn1')
        //     await page.click('#start-btn')
        //     let game1=await page.$eval('h1',(e)=>e.textContent);  
        //     expect(game1).toBe('Hero of the Angle Challenge');
    
        //     // testing the hero of the angle game
        //     await page.click('button#num1');
        //     await page.click('button#num8');
        //     await page.click('button#num6');
        //     await page.click('button#num9');
        //     await page.click('button#pound');
        //     let temp = await page.$eval('div#textAnswer', (div) => div.id);
        //     expect(temp).toBe('textAnswer');
            
        //     await page.click('input#answerBox');
        //     await page.type('input#answerBox', 'time');
        //     await page.click('button#submitBttn');
        //     temp = await page.$eval('div#textAnswer', (div) => div.id);
        //     expect(temp).toBe('textAnswer');
    
        //     await page.click('input#answerBox');
        //     await page.type('input#answerBox', 'cane');
        //     await page.click('button#submitBttn');
        //     temp = await page.$eval('div#textAnswer', (div) => div.id);
        //     expect(temp).toBe('textAnswer');
    
        //     await page.click('input#answerBox');
        //     await page.type('input#answerBox', 'horace webster');
        //     await page.click('button#submitBttn');
        //     temp = await page.$eval('div#numPad', (div) => div.id);
        //     expect(temp).toBe('numPad');
    
        //     await page.click('button#num7');
        //     await page.click('button#pound');
            
        //     await page.click('button#num1');
        //     await page.click('button#num2');
        //     await page.click('button#pound');
        
        //     await browser.close();
        // },20000);


    // describe('go back from each page via exit button', () => {
    //     let wrapper;
    //     beforeEach(() => { wrapper = mount(<Game />); });

    //     it('return to home page from synopsis', () => {
    //         let button = wrapper.find('#bttn0');
    //         expect(button.length).toBe(1);
    //         button.simulate('click');
    //         button = wrapper.find('a.btn-danger');
    //         expect(button.length).toBe(1);
    //         button.simulate('click');
    //         expect(wrapper.find('div.body-page'));
    //     });

    //     it('returns to synopsis page from game page', () => {
    //         let button = wrapper.find('#bttn0');
    //         expect(button.length).toBe(1);
    //         button.simulate('click');
    //         button = wrapper.find('a.btn-danger');
    //         expect(button.length).toBe(1);
    //         button.simulate('click');
    //         expect(wrapper.find('div.gameInterface'));
    //     })
    // });

    // describe('snapshot testing', () => {
    //     it('game list page matches the snapshot', () => {
    //         const tree = renderer.create(<Game />).toJSON();
    //         expect(tree).toMatchSnapshot();
    //     });
        
    // })
    
    })