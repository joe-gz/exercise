var express = require('express');
var WorkoutModel = require('../models/workouts');
var TagModel = require("../models/tags");
var router = express.Router();

var workoutsController = {};

workoutsController.allWorkouts = function(req,res){
  console.log('hello');
  WorkoutModel.find(function(err,workout){
    if(workout){
      res.json(workout)
    } else {
      console.log(err);
    }
  });
}

workoutsController.showWorkout = function(req,res){
  WorkoutModel.findById(req.params.id).then(function(workout){
    res.json(workout);
  })
}

workoutsController.createWorkout = function(req,res){
  var workout = {
    description:req.body.description,
    feelings: req.body.feelings,
    time: req.body.time
  };
  console.log(workout);
  new WorkoutModel(workout).save().then(function(workout){
    console.log('success');
    res.json(workout)
  })
}

workoutsController.deleteWorkout = function(req,res){
  WorkoutModel.findById(req.params.id).then(function(workout){
    return workout.remove();
  }).then(function(){
    console.log("delete");
    res.json({success: true});
  })
}

workoutsController.updateWorkout = function(req, res){
  WorkoutModel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}).then(function(workout){
    res.json(workout)
  })
}

workoutsController.addTag = function(req, res){
  var exercise = req.body.exerciseType;
  WorkoutModel.findById(req.params.id).then(function(workout){
    TagModel.findOne({exerciseType: exercise}).then(function(tag){
      console.log(workout.tags.push(tag.id))
      console.log(workout.tags);
      workout.tags.push({_id: tag.id, exerciseType: exercise}).save(function(tag){
        console.log(tag);
        res.json(tag);
      })
    })
  })
}


module.exports = workoutsController;
