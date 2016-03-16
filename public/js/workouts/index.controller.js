"use strict";
console.log('controller');

angular.module("workouts").controller("WorkoutIndexController", function (
  $scope,
  WorkoutFactory,
  TagFactory
){

  $scope.workoutArray = []
  $scope.feelingsArray = []
  $scope.timeArray = []


  $scope.getResults = function(results){
    for (var i = 0; i < results.length; i++){
      var feelings = results[i].feelings;
      var time = results[i].time;
      var workout = results[i]
      $scope.workoutArray.push(workout)
      $scope.feelingsArray.push({'feelings':feelings})
      $scope.timeArray.push({'time':time})
    }
    console.log($scope.workoutArray);
  };

  $scope.loadWorkout = function(workoutData){
      console.log(workoutData);

      $scope.workout = workoutData.data;
      $scope.getResults($scope.workout);
    };

    WorkoutFactory.getWorkoutsData().then($scope.loadWorkout)

  $scope.tags = TagFactory.query();
  $scope.newTag = new TagFactory();

});
