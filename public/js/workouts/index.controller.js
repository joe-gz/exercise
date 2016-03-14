"use strict";
 console.log('controller');
(function(){
  angular
  .module("workouts")
  .controller('WorkoutIndexController', [
    "WorkoutFactory",
    WorkoutIndexControllerFunction
  ]);

  function WorkoutIndexControllerFunction(WorkoutFactory){
    console.log('workout controller');
    this.workouts = WorkoutFactory.query();
    this.newWorkout = new WorkoutFactory();
  }
}());
