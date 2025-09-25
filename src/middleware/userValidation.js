const code = require("../constants/code");

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(code.VALIDATION_ERROR).json({
      status: code.VALIDATION_ERROR,
      errors: error.details.map(({ path, message }) => ({
        field: path.join("."),
        message
      }))
    });
  }
  next();
};


module.exports = {
  validate,
};