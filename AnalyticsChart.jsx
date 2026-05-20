```javascript
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AnalyticsChart = ({ data }) => {
  // Sample data for chart
  const chartData = [
    { date: 'Jan 1', forecast: 1200, actual: 1000 },
    { date: 'Jan 2', forecast: 1400, actual: 1210 },
    { date: 'Jan 3', forecast: 1600, actual: 1290 },
    { date: 'Jan 4', forecast: 1500, actual: 1400 },
    { date: 'Jan 5', forecast: 1800, actual: 1600 },
    { date: 'Jan 6', forecast: 1900, actual: 1890 },
    { date: 'Jan 7', forecast: 2100, actual: 2000 },
  ];

  return (
    <div>
      <h2 style={{ marginTop: 0 }}>Forecast Trends</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="forecast" stroke="#667eea" strokeWidth={2} />
          <Line type="monotone" dataKey="actual" stroke="#2ecc71" strokeWidth={2} />
 </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsChart;
```
