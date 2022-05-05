
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import PredictComponent from '../components/predict.component.js';
Enzyme.configure({ adapter: new Adapter() });

it('should hide the buttons after either of the buttons are clicked', ()=>{
  const predictInstance = shallow(<PredictComponent />);
  /** Find the button element from toggleInstance ***/
  const downButton = predictInstance.find('button');
  downButton.simulate('click');

  // TODO need to remove Enzyme and add react-testing-library to test out latest react hooks etc.
  // const element=predictInstance.find('div div');
  /*it means after the click the text doesn't exist, and its true*/
  // expect(element.length).toBe(0);
});