const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(express.json());

// add
app.use(cors("*"));
app.use(express.static(path.join(__dirname, "./uploads")));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const appRouter = require("./modules/index.js");
app.use(appRouter);

app.listen(process.env.PORT || 5555, () => console.log("server run"));
