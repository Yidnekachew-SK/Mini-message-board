const express = require('express');
const path = require("node:path");
const indexRouter = require('./routes/index.js');
const newRouter = require('./routes/new-message.js');

const app = express();
const port = 3000;

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/new', newRouter);

app.use((req, res) => {
  res.status(404).send("Path not found");
});

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    console.log('server running')
})