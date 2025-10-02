const router = require('express').Router();
const {get, create, update, remove} = require('../controllers/fixedExpense')

// router.get('/', get)
router.post('/', create)
// router.put('/:id', show)
// router.delete('/:id', remove)

module.exports = router