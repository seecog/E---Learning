var Category = require('../models/category.model');

var express = require('express');
var router = express.Router();

router.post('/categories',(req,res)=>{
    var categoryObj = new Category();
    categoryObj.name = req.body.name;
    categoryObj.pic = req.body.pic;
    categoryObj.description = req.body.description;
    categoryObj.save();
    res.json({
        success : true,
        message : "Category saved successfully"
    })
})


router.get("/categories",(req,res)=>{
    Category.find({},(err,categories)=>{
if(err){
    throw err;
}
res.json({
    success : true,
    categories : categories
})
    });
})

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


router.put("/categories/:id",(req,res)=>{
    var id = req.params.id;
    Category.update({
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


router.get('/cattest',(req,res)=>{
   
    res.json({
        success : true,
        message : "Testing fine"
    })
})

module.exports = router;