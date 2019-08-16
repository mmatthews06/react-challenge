import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import StatusCard from '../StatusCard/StatusCard';

export default function StatusCounts({ active, queued, onHold }) {
  const total = active + queued + onHold;

  return (
    <Grid container spacing={10}>
      <Grid item>
        <StatusCard label="Active" value={active} />
      </Grid>
      <Grid item>
        <StatusCard label="Queued" value={queued} />
      </Grid>
      <Grid item>
        <StatusCard label="On Hold" value={onHold} />
      </Grid>
      <Grid item>
        <StatusCard label="Total" value={total} />
      </Grid>
    </Grid>
  );
}

StatusCounts.propTypes = {
  active: PropTypes.number.isRequired,
  queued: PropTypes.number.isRequired,
  onHold: PropTypes.number.isRequired,
};
