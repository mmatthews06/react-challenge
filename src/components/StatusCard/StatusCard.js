import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  status: {
    fontSize: '1em',
  },
  subTitle: {
    fontSize: '0.75em',
  },
  value: {
    fontSize: '4em',
  },
}));

export default function Status({ label, value }) {
  const classes = useStyles();
  return (
    <Grid container direction="column" spacing={1} justify="center">
      <Grid item>
        <Typography variant="overline" className={classes.status}>
          {label}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1" className={classes.subTitle}>
          Last 7 days
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1" className={classes.value}>
          {value}
        </Typography>
      </Grid>
    </Grid>
  );
}

Status.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
