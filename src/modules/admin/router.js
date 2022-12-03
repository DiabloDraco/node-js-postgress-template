const express = require('express')
const router = express.Router()
const controller = require('./controller.js')

router.post('/admin/login',controller.LOGIN)
router.post('/admin/register',controller.REGISTER)
router.get('/admin/user',controller.GET)
router.put('/admin/:adminId',controller.PUT)
router.put('/admin/user/account/:userId',controller.PUT_USER)
router.delete('/admin/user/delete/:userId',controller.DELETE)

// user balance get status
router.get('/user/balance/pending',controller.PENDING)
router.get('/user/balance/successful',controller.SUCCESSFUL)
router.get('/user/balance/rejected',controller.REJECTED)

// user balance put stataus
router.put('/user/balance/successful/:userId',controller.PUT_SUCCESSFUL)
router.put('/user/balance/rejected/:tempId',controller.PUT_REJECTED)

module.exports = router