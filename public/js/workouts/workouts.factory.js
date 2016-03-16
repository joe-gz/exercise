// "use strict";
// console.log('factory');
// (function(){
//   angular
//   .module("workouts")
//   .factory("WorkoutFactory", [
//     "$resource",
//     WorkoutFactoryFunction
//   ]);
//
//   function WorkoutFactoryFunction($resource){
//     console.log('workout factory');
//     return $resource("/workouts/:id", {}, {
//       update: {method: "PUT"}
//     });
//   }
// }());

"use strict";
angular.module('workouts')
  .factory('WorkoutFactory', function(
    $http
  ){

  var service = {};

  service.getWorkoutsData = function(){
    console.log('getWorkoutData');
    return $http.get('/workouts');
  };

  service.getOneWorkoutData = function(workout_id){
    console.log('getWorkoutData');
    return $http.get('/workouts/' + workout_id);
  };

  return service;
});
