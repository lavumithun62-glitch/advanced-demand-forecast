```javascript
import React from 'react';
import './ActivityFeed.css';

const ActivityFeed = () => {
  const activities = [
    { id: 1, type: 'forecast', message: 'Forecast generated for Q1', time: '2 hours ago' },
    { id: 2, type: 'upload', message: 'Dataset uploaded successfully', time: '4 hours ago' },
    { id: 3, type: 'report', message: 'Report generated', time: '1 day ago' },
  ];

  return (
    <div>
      <h2 style={{ marginTop: 0 }}>Recent Activity</h2>
      <div className="activity-list">
        {activities.map(activity => (
          <div key={activity.id} className="activity-item">
            <span className="activity-icon">
              {activity.type === 'forecast' && '📊'}
              {activity.type === 'upload' && '⬆️'}
              {activity.type === 'report' && '📄'}
            </span>
            <div className="activity-content">
              <p className="activity-message">{activity.message}</p>
              <p className="activity-time">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
 </div>
  );
};
export default ActivityFeed;
```
