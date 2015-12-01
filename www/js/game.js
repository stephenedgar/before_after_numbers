var gameModule = angular.module('game', []);

gameModule.controller('GameController', ['$scope', '$state',
  function($scope, $state){
    $scope.middleNumber = 16;
    $scope.beforeChoiceOne = 11;
    $scope.beforeChoiceTwo = 15;
    $scope.beforeChoiceThree = 2;
    $scope.afterChoiceOne = 17;
    $scope.afterChoiceTwo = 29;
    $scope.afterChoiceThree = 6;
    $scope.beforeSelected = function(number) {
      if(number == ($scope.middleNumber - 1)) {
        alert("correct");
      }
      else {
        alert("try again");
      }
    }
    $scope.afterSelected = function(number) {
      if(number == ($scope.middleNumber + 1)) {
        alert("correct");
      }
      else {
        alert("try again");
      }
    }
  }
]);