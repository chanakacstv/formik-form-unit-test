import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from './utils/testUtils';
import App from './App';

/**
 * Factory function to create a ShallowWrapper for the GuessWords component.
 * @function setup
 * @return { ShallowWrapper } 
 */
const setup = () => {
  return shallow(<App />);
} 

test('App render without error', () => {
  const wrapper = setup();
  const component = wrapper.find(`[data-test="component-app"]`);
  expect(component.length).toBe(1);
});
