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

router.get('/cattest',(req,res)=>{
   
    res.json({
        success : true,
        message : "Testing fine"
    })
})

module.exports = router;