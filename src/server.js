const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors(corsOptions))
var corsOptions = {
    origin: 'https://hillhouse-capital.org'
}
app.use(express.static(path.join(__dirname, './uploads')))

const appRouter = require('./modules/index.js')
app.use(appRouter)



app.listen(process.env.PORT || 5555, () => console.log('server run'))