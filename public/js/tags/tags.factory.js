"use strict";

console.log('factory');
(function(){
  angular
  .module("tags")
  .factory("TagFactory", [
    "$resource",
    TagFactoryFunction
  ]);

  function TagFactoryFunction($resource){
    console.log('tag factory');
    return $resource("/tags/:id", {}, {
      update: {method: "PUT"}
    });
  }
}());
