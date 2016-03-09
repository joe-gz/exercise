"use strict";

(function(){
  angular
  .module("workouts")
  .factory("WorkoutFactory", [
    "$resource",
    WorkoutFactoryFunction
  ]);

  function WorkoutFactoryFunction($resource){
    console.log('workout factory');
    return $resource("/workouts", {}, {
      update: {method: "PUT"}
    });
  }
}());
