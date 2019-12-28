var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var config = require('./config.js')
const bcrypt = require('bcryptjs')
var passport = require("passport")
var cors = require('cors')

const userRouter = require('./route/userRoute.js')
const taskRouter = require('./route/taskRoute.js')

app.use(bodyParser.json({ type: "application/*+json" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" })); 
app.use(cors())


app.use(userRouter);
app.use('/task', taskRouter);



app.listen(8008, function () {
    console.log("Express server listening on port 8008");
  
  
  });