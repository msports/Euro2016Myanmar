angular.module('app.services', [])

.factory('goalService', function($http) {

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

.factory('matches', ['$http', function($http) {
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
