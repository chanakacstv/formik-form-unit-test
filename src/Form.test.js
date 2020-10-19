import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from './utils/testUtils';
import Form from './Form';

/**
 * Factory function to create a ShallowWrapper for the GuessWords component.
 * @function setup
 * @return { ShallowWrapper } 
 */
const setup = () => {
  return shallow(<Form />);
}

test('App render without error', () => {
  const wrapper = setup();
  const component = wrapper.find(`[data-test="component-form"]`);
  expect(component.length).toBe(1);
});
