/* global describe, expect, it */
import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  it('should match a snapshot', () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});
