import React from 'react';
import PropTypes from 'prop-types';

import {
  Cell,
  Legend,
  ResponsiveContainer,
  Pie,
  PieChart,
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function SamplePieChart({ active, queued, onHold }) {
  const total = active + queued + onHold;
  const data = [
    { label: 'Active', value: active },
    { label: 'Queued', value: queued },
    { label: 'Active', value: onHold },
  ];

  if (total === 0) {
    return <span>No data to show!</span>;
  }

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
        >
          {
            data.map((entry, index) => <Cell key={`cell-${entry.label}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
        <Legend verticalAlign="top" />
      </PieChart>
    </ResponsiveContainer>
  );
}

SamplePieChart.propTypes = {
  active: PropTypes.number.isRequired,
  queued: PropTypes.number.isRequired,
  onHold: PropTypes.number.isRequired,
};
