import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function SampleTable({ samples }) {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Sample #</TableCell>
            <TableCell align="center">Sample Type</TableCell>
            <TableCell align="center">ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {samples.map((sample) => (
            <TableRow key={sample.ID}>
              <TableCell align="right">{sample['Sample Number']}</TableCell>
              <TableCell align="center">{sample.Type}</TableCell>
              <TableCell align="center">{sample.ID}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SampleTable.propTypes = {
  samples: PropTypes.arrayOf(PropTypes.shape({
    'Sample Number': PropTypes.number,
    Type: PropTypes.string,
    ID: PropTypes.string,
  })).isRequired,
};
