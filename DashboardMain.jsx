
```javascript
import React, { useEffect } from 'react';
import { useForecast } from '../../hooks/useForecast';
import FilterPanel from './FilterPanel';
import AnalyticsChart from './AnalyticsChart';
import ActivityFeed from './ActivityFeed';
import './DashboardMain.css';

const DashboardMain = () => {
  const { forecasts, loading, error, fetchForecasts } = useForecast();

  useEffect(() => {
    fetchForecasts();
  }, []);

  if (loading) return <div className="loading">Loading dashboard...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      
      <FilterPanel />

      <div className="dashboard-grid">
        <div className="chart-section">
          <AnalyticsChart data={forecasts} />
        </div>

        <div className="activity-section">
          <ActivityFeed />
        </div>
      </div>

      <div className="stats-section">
        <div className="stat-card">
<h3>Total Forecasts</h3>
          <p className="stat-value">{forecasts.length}</p>
        </div>
        <div className="stat-card">
          <h3>Avg Accuracy</h3>
          <p className="stat-value">85.3%</p>
        </div>
        <div className="stat-card">
          <h3>Models Used</h3>
          <p className="stat-value">3</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
```
