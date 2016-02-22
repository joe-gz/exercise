var express = require('express');
var WorkoutModel = require('../models/workouts');
var router = express.Router();

var workoutsController = {};

workoutsController.showWorkouts = function(req,res){
  console.log('hello');
  WorkoutModel.find(function(err,workout){
    if(workout){
      res.json(workout)
    } else {
      console.log(err);
    }
  });
}

module.exports = workoutsController;
