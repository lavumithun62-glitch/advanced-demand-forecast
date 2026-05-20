```javascript
const express = require('express');
const router = express.Router();
const forecastController = require('../controllers/forecastController');
const { authMiddleware } = require('../middleware/auth');

// All forecast routes require authentication
router.use(authMiddleware);

// Routes
router.post('/', forecastController.generateForecast);
router.get('/', forecastController.listForecasts);
router.get('/:id', forecastController.getForecast);

module.exports = router;
```

