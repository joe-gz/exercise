"use strict";

  angular.module("workouts").controller("WorkoutShowController", function (
    $scope,
    $stateParams,
    WorkoutFactory
  ){
    $scope.workout = WorkoutFactory.get({id:$stateParams.id});
  });
