angular.module("tags").controller("TagIndexController", function(
  $scope,
  TagFactory
){
  $scope.tags = TagFactory.query();
  $scope.newTag = new TagFactory();
});
