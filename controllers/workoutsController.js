var express = require('express');
var WorkoutModel = require('../models/workouts');
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
  var workout = req.body.description;
  console.log(workout);
  new WorkoutModel({description:workout}).save().then(function(err,workout){
    if (err){
      console.log(JSON.stringify(err));
    } else {
      res.json(workout)
    }
  })
}

module.exports = workoutsController;
