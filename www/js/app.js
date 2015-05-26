// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html",
        controller: 'VisitsCtrl' 
      }
    }
  })

  .state('app.browse', {
    url: "/browse",
    views: {
        'menuContent': {
          templateUrl: "templates/browse.html",
          controller: 'VisitsCtrl'
       }
    }
  })
  .state('app.visits', {
    url: "/visits",
    views: {
      'menuContent': {
        templateUrl: "templates/visits.html",
        controller: 'VisitsCtrl'
      }
    }
  })

  .state('app.customer', {
    url: "/visits/:id",
    views: {
      'menuContent': {
        templateUrl: "templates/visits.html",
        controller: 'VisitsCtrl'
      }
    }
  })

  .state('app.visit', {
    url: "/visit/:visitId",
    views: {
      'menuContent': {
        templateUrl: "templates/visit.html",
        controller: 'VisitCtrl'
      }
    }
  })

  .state('app.new', {
    url: "/visits/:visitId/new",
    views: {
      'menuContent': {
        templateUrl: "templates/new.html",
        controller: 'NewCtrl'
      }
    }
  })

  .state('app.map', {
      url: "/map",
      views: {
        'menuContent': {
          templateUrl: "templates/map.html",
          controller: 'MapCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/visits');
});
