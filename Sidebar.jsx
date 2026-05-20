```javascript
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Sidebar.css';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const { user } = useSelector(state => state.auth);

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: '📊' },
    { name: 'Forecasts', path: '/forecast', icon: '📈' },
    { name: 'Reports', path: '/reports', icon: '📄' },
    ...(user?.role === 'admin' ? [
      { name: 'Admin Panel', path: '/admin', icon: '⚙️' }
    ] : [])
  ];

return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <button 
        className="toggle-btn"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? '☰' : '✕'}
      </button>

      <nav className="nav-menu">
        {menuItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
            title={item.name}
          >
            <span className="nav-icon">{item.icon}</span>
            {!isCollapsed && <span className="nav-text">{item.name}</span>}
 </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
```
