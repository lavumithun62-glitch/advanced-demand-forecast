
```javascript
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/slices/authSlice';
import { toggleDropdown } from '../../store/slices/notificationSlice';
import './Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const { unreadCount, showDropdown } = useSelector(state => state.notification);

  const handleLogout = () => {
    dispatch(logout());
    window.location.href = '/login';
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <h1> AI Demand Forecasting</h1>
        </div>

        <div className="header-right">
          {/* Notification Bell */}
          <div className="notification-container">
            <button 
              className="notification-bell"
              onClick={() => dispatch(toggleDropdown())}
>
              
              {unreadCount > 0 && (
                <span className="notification-badge">{unreadCount}</span>
              )}
            </button>

            {showDropdown && (
              <div className="notification-dropdown">
                <div className="notification-header">
                  <h3>Notifications</h3>
                </div>
                <div className="notification-list">
                  {/* Notifications will be listed here */}
                  <p>No new notifications</p>
                </div>
              </div>
            )}
          </div>

          {/* User Menu */}
          <div className="user-menu">
            <span className="user-email">{user?.email || 'User'}</span>
            <button 
              className="logout-btn"
              onClick={handleLogout}
>
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
