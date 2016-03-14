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
    .state("workoutShow", {
      url: "/workouts/:id",
      templateUrl: "js/workouts/show.html",
      controller: "WorkoutShowController",
      controllerAs: "WorkoutShowViewModel"
    })
  }
}());
