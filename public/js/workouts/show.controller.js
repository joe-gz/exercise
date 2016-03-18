"use strict";

angular.module("workouts").controller("WorkoutShowController", function (
  $scope,
  $stateParams,
  WorkoutFactory,
  TagFactory
){
  console.log('show controller');

  WorkoutFactory.get({id:$stateParams.id}).$promise.then(function(data) {
    console.log(data);
    $scope.data = data
  })

  $scope.newTag = new TagFactory();
});
