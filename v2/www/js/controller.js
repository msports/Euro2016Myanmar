angular.module('app.controllers', [])

.controller('starWarsFilmsCtrl', function($scope,TeamService) {
	$scope.teams = [];

	FilmService.getTeams().then(function(res) {
		$scope.teams = res;
	});

})

.controller('teamNameCtrl', function($scope,$stateParams,FilmService) {
	$scope.team = {};

	TeamService.getTeam($stateParams.id).then(function(res) {
		$scope.team = res;
	});

})
