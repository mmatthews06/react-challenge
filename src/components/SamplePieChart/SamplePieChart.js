import React from 'react';
import PropTypes from 'prop-types';

import {
  ResponsiveContainer,
  Pie,
  PieChart,
} from 'recharts';

export default function SamplePieChart({ active, queued, onHold }) {
  const data = [
    { label: 'Active', value: active },
    { label: 'Queued', value: queued },
    { label: 'Active', value: onHold },
  ];

  return (
    <ResponsiveContainer>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="label"
          innerRadius="50%"
          fill="#8884d8"
          label
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

SamplePieChart.propTypes = {
  active: PropTypes.number.isRequired,
  queued: PropTypes.number.isRequired,
  onHold: PropTypes.number.isRequired,
};
