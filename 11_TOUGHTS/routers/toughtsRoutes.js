const express = require('express')
const router = express.Router()
const ToughtsController = require('../controllers/ToughtController')

// helpers
const checkAuth = require('../helpers/auth').checkAuth

router.get('/add',ToughtsController.createTought, checkAuth)
router.post('/add',ToughtsController.createToughtSave, checkAuth)
router.get('/dashboard',ToughtsController.dashboard, checkAuth)
router.post('/remove',ToughtsController.removeTought, checkAuth)
router.get('/edit/:id',ToughtsController.editTought, checkAuth)
router.post('/edit',ToughtsController.editToughtPost, checkAuth)
router.get('/',ToughtsController.showToughts)

module.exports = router