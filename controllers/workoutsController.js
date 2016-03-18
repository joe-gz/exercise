var express = require('express');
var WorkoutModel = require('../models/workouts');
var TagModel = require("../models/tags");
var router = express.Router();

var workoutsController = {};

workoutsController.allWorkouts = function(req,res){
  console.log('allWorkouts');
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

workoutsController.updateWorkout = function(req,res){
  WorkoutModel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}).then(function(workout){
    console.log(workout);
    res.json(workout);
  });
};

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
  console.log('test');
  var exercise = req.body.exerciseType;
  TagModel.findOne({exerciseType: exercise}).then(function(tag){
    WorkoutModel.findById(req.params.id, function(err, docs){
      if(err){
        console.log(err)
      }
      else{
        docs.tags.push(tag);
        docs.save(function(err){
          if(!err){
            console.log('no err');
            res.json(docs)
          }
          else{
            console.log(err);
          }
        })
      }
    });
  });
};

module.exports = workoutsController;
