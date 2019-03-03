var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var TopicSchema = new Schema({
    name : String,
    description : String,
    assignment : String,
    videos : [String],
    created : {type : Date,default : Date.now}

})

module.exports  = mongoose.model('Topic',TopicSchema);