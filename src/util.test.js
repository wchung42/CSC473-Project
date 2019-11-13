import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';


test('backdropClickHandler Testing',()=>{
    let component=renderer.create(<App />).getInstance();
  
    component.backdropClickHandler();
  
    expect(component.state.data).toBeFalsy;
  
  })