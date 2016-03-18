"use strict";

(function(){
  angular
  .module("workouts")
  .directive("workoutForm",[
    "WorkoutFactory",
    "$state",
    WorkoutFormFunction
  ]);

  function WorkoutFormFunction(WorkoutFactory,$state){
    return{
      templateUrl:"js/workouts/form.html",
      scope:{
        workout:"="
      },
      link: function(scope){
        scope.create = function(){
          console.log(scope.workout);
          scope.workout.$save(function(response){
            $state.go("workoutIndex", {}, {reload: true});
          });
        },
        scope.update = function(){
          scope.workout.$update({id:scope.workout._id},function(response){
            console.log(response);
          });
        },
        scope.delete = function(){
          scope.workout.$delete({id:scope.workout._id},function(response){
            $state.go("workoutIndex", {}, {reload: true});
          });
        }
      }
    }
  }
}())
