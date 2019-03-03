var express = require('express');
var config = require('./config/config');
var app = express();
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/elearning",()=>{
    console.log('The Databse Connected');
})
var router = express.Router();
router.get('/test',(req,res)=>{
res.json({
    message : "routing is fine"
})
})
app.use('/api',router);
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//router start
var categoryRouter = require("./controllers/category.controller");
app.use('/api/admin/',categoryRouter);
var courseRouter = require("./controllers/course.controller");
app.use('/api/admin/',courseRouter);
var topicRouter = require("./controllers/topics.controller");
app.use('/api/admin/',topicRouter);
//router end

app.listen(config.port,()=>{
    console.log('The server starts at ',config.port);
})
