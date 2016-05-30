angular.module('app.controllers', [])

.controller('matchCtrl', ['$scope', 'matches', function($scope, matches) {
  matches.success(function(data) {
    $scope.matches = data.data.matches;
  })
}])

.controller('standingCtrl', ['$scope', 'standings', function($scope, standings) {
  standings.success(function(data) {
    $scope.standings = data.data.standings;
  })
}])

.controller('videoCtrl', function($scope) {

})

.controller('teamCtrl', function($scope) {

})

.controller('playerCtrl', function($scope) {

})

.controller('pageCtrl', function($scope) {

})
