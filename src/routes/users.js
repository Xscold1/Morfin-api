const express = require('express');
const router = express.Router();
const {register} = require("../controllers/users");
const { registerSchema } = require("../utils/userValidation");
const {validate} = require("../middleware/userValidation");

router.post("/register", validate(registerSchema), register);

module.exports = router;