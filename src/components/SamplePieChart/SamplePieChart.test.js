/* global describe, expect, it */
import React from 'react';
import { shallow } from 'enzyme';

import SamplePieChart from './SamplePieChart';

describe('SamplePieChart', () => {
  it('should render an empty message', () => {
    expect(shallow(<SamplePieChart active={0} queued={0} onHold={0} />)).toMatchSnapshot();
  });

  it('should match a snapshot', () => {
    expect(shallow(<SamplePieChart active={20} queued={10} onHold={3} />)).toMatchSnapshot();
  });
});
