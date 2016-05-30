angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('tabsController.match', {
    url: '/match',
    views: {
      'tab1': {
        templateUrl: 'templates/match.html',
        controller: 'matchCtrl'
      }
    }
  })

  .state('tabsController.standing', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/standing.html',
        controller: 'standingCtrl'
      }
    }
  })

  .state('tabsController.video', {
    url: '/video',
    views: {
      'tab3': {
        templateUrl: 'templates/video.html',
        controller: 'goalCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.team', {
    url: '/team',
    views: {
      'tab4': {
        templateUrl: 'templates/team.html',
        controller: 'teamCtrl'
      }
    }
  })

  .state('tabsController.player', {
    url: '/player',
    views: {
      'tab4': {
        templateUrl: 'templates/player.html',
        controller: 'playerCtrl'
      }
    }
  })

  .state('page', {
    url: '/page7',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

$urlRouterProvider.otherwise('/page1/match')



});
