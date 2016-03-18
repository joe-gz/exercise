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
    exerciseType:req.body.exerciseType
  };
  console.log("req: " + req.body.exerciseType)
  console.log("This is the tag: " + tag);
  new TagModel(tag).save().then(function(tag){
      console.log('success');
      console.log(tag);
      res.json(tag)
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
