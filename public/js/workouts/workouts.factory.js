"use strict";
console.log('factory');
(function(){
  angular
  .module("workouts")
  .factory("WorkoutFactory", [
    "$resource",
    WorkoutFactoryFunction
  ]);

  function WorkoutFactoryFunction($resource){
    console.log('workout factory');
    return $resource("/workouts/:id", {}, {
      update: {method: "PUT"}
    });
  }
}());
