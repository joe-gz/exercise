"use strict";
angular.module('leagues')
  .factory('LeagueFactory', function(
    $http
  ){

  var service = {};

  service.getLeagueData = function(league_id){
    return $http.get('/jsonData/' + league_id + '.json');
  };

  return service;
});
