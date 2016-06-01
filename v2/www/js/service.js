angular.module('app.services', [])

.factory('FilmService', ['$http','$q',function($http,$q){

	return {
		getTeams:function() {
			var deferred = $q.defer();

			$http.get('https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/uefa-euro-2016/seasons/16/teams', {
          headers: {
            'X-Mashape-Key': '32jnRgtOormshtgNye0yfOBF827yp1svNfljsn3dKx3WxZHD6H'
          }
        }).then(function(res) {
				//console.dir(res.data.results);
				var teams = res.data.teams.name(function(result) {
					team.id = team.url;
					return result;
				});
				deferred.resolve(teams);
			});
			return deferred.promise;
		},
		getTeam:function(url) {
			var deferred = $q.defer();

			$http.get(url).then(function(res) {
				//console.dir(res.data);
				deferred.resolve(res.data);
			});

			return deferred.promise;

		}
	};

}]);
