const express = require('express')
const app = express()
var bodyParser = require("body-parser");
var Course = require("./models/course.model");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

const port = 3000


app.get('/courses', (req, res) => {
  res.render("course",{});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



