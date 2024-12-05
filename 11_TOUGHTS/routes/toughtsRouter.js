const express = require('express')
const ToughtController = require('../controllers/ToughtController.js')
const router = express.Router()

// helper
const checkAuth = require('../helpers/auth.js').checkAuth

router.get('/add', checkAuth, ToughtController.createTought)
router.post('/add', checkAuth, ToughtController.createToughtSave)
router.get('/dashboard', checkAuth, ToughtController.dashboard)
router.get('/', ToughtController.showToughts)

module.exports = router