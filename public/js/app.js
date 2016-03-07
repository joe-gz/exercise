"use strict";

(function(){
  angular
  .module("fsVisual", [
    "ui.router",
    "workouts"
    ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("workoutIndex", {
      url: "/workouts",
      templateUrl: "js/workouts/index.html",
      controller: "WorkoutIndexController",
      controllerAs: "WorkoutIndexViewModel"
    })
  }
}());
