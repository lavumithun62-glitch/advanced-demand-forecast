```javascript
const forecastService = require('../services/forecasting/forecastService');

/**
 * POST /api/forecast
 * Generate new forecast
 */
exports.generateForecast = async (req, res) => {
  try {
    const { datasetId, modelType, parameters } = req.body;

    if (!datasetId || !modelType) {
      return res.status(400).json({
        success: false,
        error: {
          code: 'VALIDATION_ERROR',
          message: 'datasetId and modelType are required'
        }
      });
    }

    const result = await forecastService.generateForecast({
      datasetId,
      modelType,
      parameters
    });

    res.status(200).json({
      success: true,
      data: result
 });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: {
        code: 'FORECAST_ERROR',
        message: error.message
      }
    });
  }
};

/**
 * GET /api/forecast/:id
 * Get forecast details
 */
exports.getForecast = async (req, res) => {
  try {
    const { id } = req.params;
    const { includeHistory } = req.query;

    // Placeholder - replace with actual database query
    const forecast = {
      id,
modelType: 'arima',
      predictions: [],
      accuracy: {},
      createdAt: new Date().toISOString()
    };

    res.status(200).json({
      success: true,
      data: forecast
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: {
        code: 'FETCH_ERROR',
        message: error.message
      }
    });
  }
};

/**
 * GET /api/forecast
 * List forecasts with pagination
 */
exports.listForecasts = async (req, res) => {
  try {
    const { page = 1, limit = 10, modelType } = req.query;

    // Placeholder - replace with actual database query
    const forecasts = [];

    res.status(200).json({
      success: true,
      data: forecasts,
      pagination: {
        total: 0,
        page: parseInt(page),
        limit: parseInt(limit),
        hasMore: false
      }
    });
  } catch (error) {
 res.status(500).json({
      success: false,
      error: {
        code: 'LIST_ERROR',
        message: error.message
      }
    });
  }
};
```
