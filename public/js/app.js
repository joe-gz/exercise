"use strict";

(function(){
  angular
  .module("exercise", [
    "ui.router",
    "workouts",
    "tags"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
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
    .state("tagsIndex", {
      url: "/tags",
      templateUrl: "js/workouts/index.html",
      controller: "TagIndexController",
      controllerAs: "TagShowViewModel"
    });
  }
}());
