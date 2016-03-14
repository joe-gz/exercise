"use strict";

(function(){
  angular
  .module("exercise", [
    "ui.router",
    "workouts"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    console.log('RouterFunction');
    $stateProvider
    .state("workoutIndex", {
      url: "/",
      templateUrl: "js/workouts/index.html",
      controller: "WorkoutIndexController",
      controllerAs: "WorkoutIndexViewModel"
    })
  }
}());
