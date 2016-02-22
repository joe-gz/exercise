require("../db/schema");
var mongoose = require('mongoose');

var TagModel = mongoose.model('Tag')
module.exports = TagModel
