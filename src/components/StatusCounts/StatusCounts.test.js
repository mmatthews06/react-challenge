/* global describe, expect, it */
import React from 'react';
import { shallow } from 'enzyme';

import StatusCounts from './StatusCounts';

describe('StatusCard', () => {
  it('should match a snapshot', () => {
    expect(shallow(<StatusCounts active={20} />)).toMatchSnapshot();
  });
});
