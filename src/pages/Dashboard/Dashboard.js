import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import StatusCounts from '../../components/StatusCounts/StatusCounts';
import UploadButton from '../../components/UploadButton/UploadButton';
import SamplePieChart from '../../components/SamplePieChart/SamplePieChart';
import SampleTable from '../../components/SampleTable/SampleTable';

export default function Dashboard() {
  const [samples, setSamples] = useState([]);
  const activeCount = samples.filter((s) => s.State === 'active').length;
  const queuedCount = samples.filter((s) => s.State === 'queued').length;
  const onHoldCount = samples.filter((s) => s.State === 'hold').length;

  return (
    <Grid container direction="column" spacing={2} justify="center">
      <Grid item sm>
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
      <Grid container item justify="center" direction="row" style={{ height: '500px ' }}>
        <Grid container item direction="column" sm={6}>
          <Grid item>
            <h2>Run Progress</h2>
          </Grid>
          <Grid item style={{ height: '500px', width: '500px' }}>
            <SamplePieChart
              active={activeCount}
              queued={queuedCount}
              onHold={onHoldCount}
            />
          </Grid>
        </Grid>
        <Grid container item direction="column" sm={6}>
          <Grid item>
            <h2>List of Active Sample Sets / Batches</h2>
          </Grid>
          <Grid item>
            <SampleTable samples={samples} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
