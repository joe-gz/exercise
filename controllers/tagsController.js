var express = require('express');
var TagModel = require('../models/tags');
var router = express.Router();

var tagsController = {};

tagsController.allTags = function(req,res){
  TagModel.find(function(err,tags){
    if(tags){
      res.json(tags)
    } else {
      console.log(err);
    }
  });
}

tagsController.createTag = function(req,res){
  var tag = {
    description:req.body.exerciseType
  };
  console.log(tag);
  new TagModel(tag).save().then(function(err,tag){
    if (err){
      console.log(err);
    } else {
      console.log('success');
      res.json(tag)
    }
  })
}

tagsController.deleteTag = function(req,res){
  TagModel.findById(req.params.id).then(function(tag){
    return tag.remove();
  }).then(function(){
    console.log("delete");
    res.json({success: true});
  })
}

module.exports = tagsController;
