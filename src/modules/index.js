const AdminRouter  = require('./admin/router.js')
const UserRouter = require('./users/router.js')
const tempRouter = require('./temporary/router.js')
const codeRouter = require('./email/router.js')


module.exports = [
    AdminRouter,
    UserRouter,
    tempRouter,
    codeRouter
]