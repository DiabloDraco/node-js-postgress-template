const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()
app.use(express.json())
var whitelist = ['https://hillhouse-capital.org']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions))
app.use(express.static(path.join(__dirname, './uploads')))
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const appRouter = require('./modules/index.js')
app.use(appRouter)



app.listen(process.env.PORT || 5555, () => console.log('server run'))