
```javascript
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setForecasts, setLoading, setError } from '../store/slices/forecastSlice';
import forecastService from '../services/forecastService';

export const useForecast = () => {
  const dispatch = useDispatch();
  const { forecasts, loading, error, filters } = useSelector(state => state.forecast);

  // Fetch forecasts
  const fetchForecasts = async (page = 1) => {
    dispatch(setLoading(true));
    try {
      const response = await forecastService.listForecasts(page, 10, filters);
      dispatch(setForecasts(response.data));
      dispatch(setError(null));
    } catch (err) {
      dispatch(setError(err.message || 'Failed to fetch forecasts'));
    } finally {
      dispatch(setLoading(false));
    }
  };

// Generate new forecast
  const generateForecast = async (datasetId, modelType, parameters) => {
    dispatch(setLoading(true));
    try {
      const response = await forecastService.generateForecast(
        datasetId,
        modelType,
        parameters
      );
      dispatch(setError(null));
      return response;
    } catch (err) {
      dispatch(setError(err.message || 'Failed to generate forecast'));
      throw err;
    } finally {
      dispatch(setLoading(false));
    }
  };

return {
    forecasts,
    loading,
    error,
    filters,
    fetchForecasts,
    generateForecast
  };
};
