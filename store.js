
```javascript
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import forecastReducer from './slices/forecastSlice';
import notificationReducer from './slices/notificationSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    forecast: forecastReducer,
    notification: notificationReducer
  }
});

export default store;
```

