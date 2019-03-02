var mongoose = require("mongoose");

var CategorySchema = new mongoose.Schema({
    name : String,
    pic : String,
    description : String,
    created : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model('Category',CategorySchema);

