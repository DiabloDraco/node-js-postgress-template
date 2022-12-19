const express = require('express')
const router = express.Router()
const controller = require('./controller.js')


router.put('/user/email/put',controller.PUT)
router.post('/user/email/post/:codeId',controller.POST)


module.exports = router