/* global describe, expect, it */
import React from 'react';
import { shallow } from 'enzyme';

import SampleTable from './SampleTable';

describe('SampleTable', () => {
  it('should render an empty message', () => {
    expect(shallow(<SampleTable samples={[]} />)).toMatchSnapshot();
  });

  it('should match a snapshot', () => {
    expect(shallow(
      <SampleTable
        samples={[
          {
            'Sample Number': 1,
            Type: 'client',
            ID: 'ABC1234',
          },
          {
            'Sample Number': 2,
            Type: 'job',
            ID: 'DEF4567',
          },
        ]}
      />,
    )).toMatchSnapshot();
  });
});
