"use strict";

angular.module("workouts").controller("WorkoutShowController", function (
  $scope,
  $stateParams,
  WorkoutFactory
){
  console.log('show controller');

  $scope.getResults = function(results){
      $scope.workoutShow = results.description
      $scope.feelingShow = results.feelings
      $scope.timeShow = results.time
    };

  WorkoutFactory.get({id:$stateParams.id}).$promise.then(function(data) {
    console.log(data);
    $scope.data = data
    $scope.getResults($scope.data)
  })
});
