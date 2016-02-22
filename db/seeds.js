var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/exercise");

var WorkoutModel = require('../models/workouts');
var TagModel = require('../models/tags');
var UserModel = require('../models/users');

WorkoutModel.remove({},function(err){
  console.log(err);
})

UserModel.remove({},function(err){
  console.log(err);
})

TagModel.remove({},function(err){
  console.log(err);
})

var workout1 = new WorkoutModel({description:"awesome workout",feelings:5,time:1})
var workout2 = new WorkoutModel({description:"Becky's Monday morning workout",feelings:3,time:0.75})
var workout3 = new WorkoutModel({description:"Joe's rowing",feelings:2,time:0.5})

var workouts = [workout1,workout2,workout3]

for (var i = 0; i < workouts.length; i++){
  workouts[i].save(function(err){
    if (err){
      console.log(err);
    } else {
      console.log('Workout complete!');
    }
  })
}
