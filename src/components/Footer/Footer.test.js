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
describe('<footer /> component testing', () => {
    test('footer Testing', () => {

      const footer= shallow(<Footer />);

      expect(footer.text()).toEqual('Home·Games·About·Faq·ContactEscape Team © 2019');
      expect(footer.find('div.footer-info').length).toBe(1)

});
test('render out footer', () => {

  const footer= shallow(<Footer />);

 
  expect(footer.find('div.footer-info').length).toBe(1)

})
test('render out footer-social', () => {

  const footer= shallow(<Footer />);

 
  expect(footer.find('div.footer-social').length).toBe(1)

})
test('render out footer-info', () => {

  const footer= shallow(<Footer />);

 
  expect(footer.find('div.footer-info').length).toBe(1)

})
test('render out footer-info', () => {

  const footer= shallow(<Footer />);

 
  expect(footer.find('div.footer-info').length).toBe(1)

})


})
describe('<footer /> text and icon testing', () => {

  test('testing icon in footer', () => {

    const footer= shallow(<Footer />);
  
   
    expect(footer.find('i.fa-facebook').length).toBe(1)
    expect(footer.find('i.fa-twitter').length).toBe(1)
    expect(footer.find('i.fa-linkedin').length).toBe(1)
    expect(footer.find('i.fa-github').length).toBe(1)
  
  })
  test('testing icon in footer', () => {

    const footer= shallow(<Footer />);
  
    expect(footer.find('p').children().length).toBe(10);
   

  })



})
    