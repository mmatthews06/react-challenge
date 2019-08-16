/* global describe, expect, it */
import React from 'react';
import { shallow } from 'enzyme';

import StatusCard from './StatusCard';

describe('StatusCard', () => {
  it('should match a snapshot', () => {
    expect(shallow(<StatusCard label="hello!" value={20} />)).toMatchSnapshot();
  });
});
