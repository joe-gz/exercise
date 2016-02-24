var express = require('express');
var TagModel = require('../models/tags');
var router = express.Router();

var tagsController = {};

tagsController.allTags = function(req,res){
  console.log('hello');
  TagModel.find(function(err,tag){
    if(tag){
      res.json(tag)
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
