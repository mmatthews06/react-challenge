import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import StatusCard from '../StatusCard/StatusCard';

export default function StatusCounts({ active }) {
  return (
    <Grid container>
      <Grid item>
        <StatusCard label="Active" value={active} />
      </Grid>
    </Grid>
  );
}

StatusCounts.propTypes = {
  active: PropTypes.number.isRequired,
};
