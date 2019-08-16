/* global describe, expect, it */
import React from 'react';
import { shallow } from 'enzyme';

import Dashboard from './Dashboard';

describe('Dashboard', () => {
  it('should match a snapshot', () => {
    expect(shallow(<Dashboard />)).toMatchSnapshot();
  });
});
