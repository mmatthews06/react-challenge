/* global describe, expect, it, jest, File */
import React from 'react';
import { mount, shallow } from 'enzyme';

import UploadButton from './UploadButton';

describe('UploadButton', () => {
  it('should allow you to upload a file', async (done) => {
    expect.assertions(2);
    const headers = 'foo,bar,baz';
    const row1 = '1,2,3';
    const row2 = '5,6,7';
    const fileText = `${headers}\n${row1}\n${row2}`;

    const mockSetSamples = jest.fn(async (samples) => {
      await expect(samples).toHaveLength(2);
      await expect(samples[0]).toEqual({ foo: 1, bar: 2, baz: 3 });
      done();
    });

    const file = new File([fileText], 'foo.csv');
    const input = mount(<UploadButton setSamples={mockSetSamples} />).find('input');
    input.simulate('change', { target: { files: [file] } });
  });

  it('should match a snapshot', () => {
    expect(shallow(<UploadButton />)).toMatchSnapshot();
  });
});