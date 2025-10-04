const router = require('express').Router();
const {get, create, update, remove, show} = require('../controllers/fixedExpense')
const validate = require('../middleware/validate')
const {fixedExpense} = require('../utils/schemaValidation')

router.get('/', get)
router.post('/', validate(fixedExpense), create)
router.get('/:id', show)
router.put('/:id', update)
router.delete('/:id', remove)

module.exports = router