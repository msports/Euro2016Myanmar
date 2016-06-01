angular.module('app.controllers', [])

.controller('matchCtrl', ['$scope', 'matches', function($scope, matches, LoadingService) {

  matches.success(function(data) {
    $scope.matches = data.data.matches;

  })
}])

.controller('standingCtrl', ['$scope', 'standings', function($scope, standings) {
  standings.success(function(data) {
    $scope.standings = data.data.standings;
    LoadingService.hide();
  })
}])

.controller('teamCtrl', ['$scope', 'teams', function($scope, teams) {
  teams.success(function(data) {
    $scope.teams = data.data.teams;
  })
}])

.controller('goalCtrl', function($scope, $sce, goalService, LoadingService) {

  $scope.isGoalVideo = function (item) {
    if((item.data.title.indexOf(" goal ") > 0 || item.data.title.indexOf("score") > 0) &&
          item.data.link_flair_text === "Media") {
      return true;
    }
    return false;
  };

  $scope.trustUrl = function (url) {
    return $sce.trustAsResourceUrl(url);
  };

  $scope.trustUrlAlt = function (url) {
    var urlSplit = url.split('/');
    var videoId = urlSplit[urlSplit.length - 1];
    return $sce.trustAsResourceUrl('http://cdn.streamable.com/video/mp4-mobile/' + videoId + '.mp4');
  };

  $scope.toggleVideo = function (item) {
    if(item.showVideo) {
      item.showVideo = !item.showVideo;
    } else {
      item.showVideo = true;
    }
  };

  $scope.toggleAlt = function (item) {
    if(item.showAlt) {
      item.showAlt = !item.showAlt;
    } else {
      item.showAlt = true;
    }
  };

  $scope.getGoals = function () {
    goalService.getGoals().then(function (response) {
      LoadingService.hide();
      $scope.goals = response.data.data.children;
    }, function (error) {

    });
  };

  $scope.getGoals();
})
.controller('videoCtrl', function($scope) {

})



.controller('playerCtrl', function($scope) {

})

.controller('pageCtrl', function($scope) {

})
.controller('starWarsFilmsCtrl', function($scope,FilmService) {
	$scope.films = [];

	FilmService.getFilms().then(function(res) {
		$scope.films = res;
	});

})

.controller('filmTitleCtrl', function($scope,$stateParams,FilmService) {
	$scope.film = {};

	FilmService.getFilm($stateParams.id).then(function(res) {
		$scope.film = res;
	});

})
