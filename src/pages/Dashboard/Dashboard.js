import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import StatusCounts from '../../components/StatusCounts/StatusCounts';
import UploadButton from '../../components/UploadButton/UploadButton';

export default function Dashboard() {
  const [samples, setSamples] = useState([]);
  const activeCount = samples.filter((s) => s.State === 'active').length;
  const queuedCount = samples.filter((s) => s.State === 'queued').length;
  const onHoldCount = samples.filter((s) => s.State === 'hold').length;

  return (
    <Grid container direction="column" spacing={2} justify="center">
      <Grid item>
        <h2>Dashboard</h2>
      </Grid>
      <Grid container item spacing={5} justify="center" alignItems="center">
        <Grid item>
          <StatusCounts
            active={activeCount}
            queued={queuedCount}
            onHold={onHoldCount}
          />
        </Grid>
        <Grid item>
          <UploadButton setSamples={setSamples} />
        </Grid>
      </Grid>
      <Grid item>
        <hr style={{ height: '2px', backgroundColor: 'blue', color: 'blue', width: '90%' }} />
      </Grid>
    </Grid>
  );
}
