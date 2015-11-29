var menuModule = angular.module('menu', []);

menuModule.controller('MenuController', ['$scope', '$state',
  function($scope, $state){
    $scope.startGame = function() {
      $state.go('app.game');
    };
  }
]);