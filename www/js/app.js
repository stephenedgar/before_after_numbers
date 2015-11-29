// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('before_after_numbers', ['ionic', 'menu', 'game'])

.run(function($ionicPlatform, $state) {
  $ionicPlatform.ready(function() {
    $state.go('app.menu');
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.backButton.previousTitleText(false).text('');
  $ionicConfigProvider.views.swipeBackEnabled(false);
  $stateProvider
  .state('app', {
    templateUrl: 'templates/app.html',
    url: '/app',
    controller: function(){},
    abstract: true
  })
  .state('app.menu', {
    templateUrl: 'templates/menu.html',
    url: '/menu',
    controller: 'MenuController'
  })
  .state('app.game', {
    templateUrl: 'templates/game.html',
    url: '/game',
    controller: 'GameController'
  })

  $urlRouterProvider.otherwise('/menu');
});