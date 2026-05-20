```javascript
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  forecasts: [],
  currentForecast: null,
  loading: false,
  error: null,
  filters: {
    dateRange: '30d',
    category: 'all',
    region: 'all'
  }
};

const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {
    setForecasts: (state, action) => {
      state.forecasts = action.payload;
    },
    setCurrentForecast: (state, action) => {
      state.currentForecast = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    addForecast: (state, action) => {
      state.forecasts.push(action.payload);
    }
  }
});
export const { 
  setForecasts, 
  setCurrentForecast, 
  setLoading, 
  setError, 
  setFilters,
  addForecast 
} = forecastSlice.actions;

export default forecastSlice.reducer;
```

