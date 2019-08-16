import React from 'react';
import Grid from '@material-ui/core/Grid';
import StatusCounts from '../../components/StatusCounts/StatusCounts';

export default function Dashboard() {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <h2>Dashboard</h2>
      </Grid>
      <Grid container item spacing={2} justify="center">
        <Grid item>
          <StatusCounts active={20} />
        </Grid>
        <Grid item>
          <div style={{ height: '50px', width: '100px', background: 'lightblue' }}>Upload Button</div>
        </Grid>
      </Grid>
      <Grid item>
        <hr style={{ height: '2px', backgroundColor: 'darkblue', color: 'darkblue' }} />
      </Grid>
    </Grid>
  );
}
