```javascript
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import DashboardMain from './components/dashboard/DashboardMain';
import './App.css';

function App() {
  const { isAuthenticated } = useSelector(state => state.auth);

  // For development - skip login for now
  const isLoggedIn = isAuthenticated || true;

  return (
    <Router>
      {isLoggedIn ? (
        <div className="app-container">
          <Header />
          <div className="app-content">
            <Sidebar />
            <main className="main-content">
              <Routes>
                <Route path="/dashboard" element={<DashboardMain />} />
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
              </Routes>
            </main>
          </div>
        </div>
      ) : (
        <div className="login-page">
          <h1>Please log in</h1>
        </div>
      )}
    </Router>
  );
}

export default App;
```

