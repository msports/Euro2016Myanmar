angular.module('app.services', [])
.factory('LoadingService', function($http, $ionicLoading) {
  return {
    show: function(email,password) {
	  $ionicLoading.show({
	      template: '<h4>Loading...</h4>'
	    });
    },
    hide: function(chat) {
      $ionicLoading.hide();
    },

  };
})

.factory('goalService', function($http, LoadingService) {
  LoadingService.show();
  var getGoals = function() {
    var req = {
      method: 'GET',
      url: 'http://www.reddit.com/r/soccer.json?sort=new&from=week&limit=100',
    };
    return $http(req);
  };

  var api = {
    getGoals: getGoals,
  };

  return api;

})

.factory('teams', ['$http', function($http) {
  return $http.get('https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/uefa-euro-2016/seasons/16/teams', {
      headers: {
        'X-Mashape-Key': '32jnRgtOormshtgNye0yfOBF827yp1svNfljsn3dKx3WxZHD6H'
      }
    })
    .success(function(data) {
      return data;
    }).error(function(err) {
      return err;
    })
}])

.factory('standings', ['$http', function($http) {
  return $http.get('https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/uefa-euro-2016/seasons/16/standings', {
      headers: {
        'X-Mashape-Key': '32jnRgtOormshtgNye0yfOBF827yp1svNfljsn3dKx3WxZHD6H'
      }
    })
    .success(function(data) {
      return data;
    }).error(function(err) {
      return err;
    })
}])

.factory('FilmService', ['$http','$q',function($http,$q){

	return {
		getFilms:function() {
			var deferred = $q.defer();

			$http.get('https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/uefa-euro-2016/seasons/16/teams', {
          headers: {
            'X-Mashape-Key': '32jnRgtOormshtgNye0yfOBF827yp1svNfljsn3dKx3WxZHD6H'
          }
        }).then(function(res) {
				//console.dir(res.data.results);
				var results = res.data.results.map(function(result) {
					result.id = result.url;
					return result;
				});
				deferred.resolve(results);
			});
			return deferred.promise;
		},
		getFilm:function(url) {
			var deferred = $q.defer();

			$http.get(url).then(function(res) {
				//console.dir(res.data);
				deferred.resolve(res.data);
			});

			return deferred.promise;

		}
	};

}])

.factory('matches', ['$http', function($http, LoadingService) {
  return $http.get('https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/uefa-euro-2016/seasons/16/rounds/round-1/matches', {
      headers: {
        'X-Mashape-Key': '32jnRgtOormshtgNye0yfOBF827yp1svNfljsn3dKx3WxZHD6H'
      }
    })
    .success(function(data) {
      return data;
    }).error(function(err) {
      return err;
    })
}]);
