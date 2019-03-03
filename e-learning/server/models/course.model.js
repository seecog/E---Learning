var mongoose = require("mongoose");
var Category = require("./category.model");
var Schema = mongoose.Schema;
var CourseSchema = new Schema({
name : String,
pic : String,
description : String,
topics  : [{
    topic : {
    type : Schema.Types.ObjectId,ref : 'Topic'
    }}],
reviews : [{
    type : Schema.Types.ObjectId, ref : 'Review'
}],
discount : Number,
price : Number,
inteview_questions : String,
category_id : {
    type : Schema.Types.ObjectId,ref : 'Category'
},
created : {type : Date,default : Date.now}

})

module.exports = mongoose.model('Course',CourseSchema);