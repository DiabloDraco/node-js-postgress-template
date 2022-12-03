const express = require('express')
const router = express.Router()
const controller = require('./controller.js')

router.post('/user/addscore',controller.ADD_BALANCE)


module.exports = router