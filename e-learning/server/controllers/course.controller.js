var Course = require('../models/course.model');

var express = require('express');
var router = express.Router();

router.post('/courses',(req,res)=>{
    var courseObj = new Course();
    courseObj.name = req.body.name;
    courseObj.pic = req.body.pic;
    courseObj.description = req.body.description;
    courseObj.discount = req.body.discount;
    courseObj.price = req.body.price;
    courseObj.inteview_questions = req.body.inteview_questions;
    courseObj.inteview_questions = req.body.inteview_questions;
    courseObj.category_id = req.body.category_id;
    courseObj.save();
    res.json({
        success : true,
        message : "Course saved successfully"
    })
})


router.get("/courses",(req,res)=>{
    Course.find({}).populate('topics.topic').populate('category_id').exec((err,courses)=>{
if(err){
    throw err;
}
res.json({
    success : true,
    categories : courses
})
    });
})

router.put('/course_add_topic/:id',(req,res)=>{
    var id = req.params.id;
    Course.update({
        _id :id
    },
{
    $push : {topics : {topic : req.body.topic}}
},(err,topic)=>{
if(err){
    throw err;
}
res.json({
    success : true,
    message : "Topic gets added successfully !"
})
})
})

/*
router.delete("/categories/:id",(req,res)=>{
    var id = req.params.id;
    Category.remove({
        _id : id
    },(err,category)=>{
        if(err){
            throw err;
        }
        res.json({
            success : true,
            message : "Record removed successfully !"
        })
    })
})
*/

router.put("/courses/:id",(req,res)=>{
    var id = req.params.id;
    Course.update({
        _id : id
    },{$set : req.body},(err,course)=>{
        if(err){
            throw err;
        }
        res.json({
            success : true,
            message : "Record updated successfully !"
        })
    })
})

router.get('/coursetest',(req,res)=>{
   
    res.json({
        success : true,
        message : "Testing fine"
    })
})

module.exports = router;