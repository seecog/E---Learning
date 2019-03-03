var Topic = require('../models/topic.model');

var express = require('express');
var router = express.Router();

router.post('/topics', (req, res) => {
    var topicObj = new Topic();
    topicObj.name = req.body.name;
    topicObj.description = req.body.description;
    topicObj.assignment = req.body.assignment;
    topicObj.save();
    res.json({
        success: true,
        message: "Topic saved successfully"
    })
})



router.get("/topics", (req, res) => {
    Topic.find({}, (err, topics) => {
        if (err) {
            throw err;
        }
        res.json({
            success: true,
            categories: topics
        })
    })
});



router.delete("/topics/:id",(req,res)=>{
    var id = req.params.id;
    Topic.remove({
        _id : id
    },(err,topic)=>{
        if(err){
            throw err;
        }
        res.json({
            success : true,
            message : "Record removed successfully !"
        })
    })
})


router.put("/topics/:id",(req,res)=>{
    var id = req.params.id;
    Topic.update({
        _id : id
    },{$set : req.body},(err,category)=>{
        if(err){
            throw err;
        }
        res.json({
            success : true,
            message : "Record updated successfully !"
        })
    })
})

router.put("/topic_add_video/:id",(req,res)=>{
    Topic.update({
        _id : req.params.id
    },{$push : {videos : req.body.video}},(err,video)=>{
        if(err){
            throw err;
        }
        res.json({
            success : "Video added successfully !"
        })
    })
})

/*
router.put("/topicsvideos/:id",(req,res)=>{
    var id = req.params.id;
    Topic.update({
        _id : id
    },{$push : {videos : req.body.video}},(err,category)=>{
        if(err){
            throw err;
        }
        res.json({
            success : true,
            message : "Record updated successfully !"
        })
    })
})
*/

router.get('/topictest', (req, res) => {

    res.json({
        success: true,
        message: "Testing fine"
    })
})

module.exports = router;