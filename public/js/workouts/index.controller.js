"use strict";
 console.log('controller');

  angular.module("workouts").controller("WorkoutIndexController", function (
    $scope,
    WorkoutFactory
  ){
    console.log('workout controller');
    $scope.workouts = WorkoutFactory.query();
    $scope.newWorkout = new WorkoutFactory();
  });

  angular.module("tags").controller("TagIndexController", function(
    $scope,
    TagFactory
  ){
    console.log('tags controller');
    $scope.tags = TagFactory.query();
    $scope.newTag = new TagFactory();
  });
