"use strict";

angular.module("workouts").controller("WorkoutShowController", function (
  $scope,
  $stateParams,
  WorkoutFactory
){
console.log('show controller');
  $scope.workoutArray = []
  $scope.feelingsArray = []
  $scope.timeArray = []


  // $scope.getResults = function(results){
  //   for (var i = 0; i < results.length; i++){
  //     var feelings = results[i].feelings;
  //     var time = results[i].time;
  //     var workout = results[i]
  //     $scope.workoutArray.push(workout)
  //     $scope.feelingsArray.push({'feelings':feelings})
  //     $scope.timeArray.push({'time':time})
  //   }
  // };

  $scope.loadWorkout = function(workoutData){
    $scope.workout = workoutData.data;
    console.log($scope.workout);
    // $scope.getResults($scope.workout);
  };

  WorkoutFactory.getOneWorkoutData($stateParams.id).then($scope.loadWorkout)
  // $scope.workout = WorkoutFactory.get({id:$stateParams.id});
});
