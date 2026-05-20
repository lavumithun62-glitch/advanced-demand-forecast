```javascript
const Joi = require('joi');

const validateForecast = (data) => {
  const schema = Joi.object({
    datasetId: Joi.string().uuid().required(),
    modelType: Joi.string().valid('arima', 'prophet', 'lstm').required(),
    parameters: Joi.object().optional()
  });

  return schema.validate(data);
};

const validateUser = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().valid('user', 'manager', 'admin')
  });

  return schema.validate(data);
};

module.exports = {
  validateForecast,
  validateUser
};
```
