"use strict";

(function(){
  angular
  .module("tags")
  .directive("tagForm",[
    "TagFactory",
    "$state",
    TagFormFunction
  ]);

  function TagFormFunction(TagFactory, $state){
    return{
      templateUrl:"js/tags/form.html",
      scope:{
        tag:"="
      },
      link: function(scope){
        scope.create = function(){
          console.log(scope.tag);
          scope.tag.$save(function(response){
            console.log(response)
            $state.go("workoutIndex", {}, {reload: true});
          });
        },
        scope.update = function(){
          scope.tag.$update({id:scope.tag._id},function(response){
            console.log(response);
          });
        },
        scope.delete = function(){
          scope.tag.$delete({id:scope.tag._id},function(response){
            $state.go("workoutIndex", {}, {reload: true});
          });
        }
      }
    }
  }
}())
