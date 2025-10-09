const code = require("../constants/code");
const {resError} = require("../utils/response");

module.exports = (schema) => (req, res, next) => {

  if(! req.body) return resError(res, code.BAD_REQUEST, "Body is empty")

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