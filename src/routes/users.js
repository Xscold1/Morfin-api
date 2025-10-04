const express = require('express');
const router = express.Router();
const {register} = require("../controllers/users");
const { registerSchema } = require("../utils/schemaValidation");
const validate = require("../middleware/validate");

router.post("/register", validate(registerSchema), register);

module.exports = router;