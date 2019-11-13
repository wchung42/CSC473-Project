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

describe('MyComponent', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App debug />);
    expect(component).toMatchSnapshot();
  });
});

it('should render banner text correctly with given strings', () => {
  const strings = ['one', 'two'];
  const component = shallow(<App list={strings} />);
  expect(component).toMatchSnapshot();
});

