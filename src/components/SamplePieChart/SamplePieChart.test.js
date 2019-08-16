/* global describe, expect, it */
import React from 'react';
import { shallow } from 'enzyme';

import SamplePieChart from './SamplePieChart';

describe('SamplePieChart', () => {
  it('should match a snapshot', () => {
    expect(shallow(<SamplePieChart />)).toMatchSnapshot();
  });
});
