angularnodeApp.controller('TestsCtrl', ['$scope',  'nameService',
  function($scope, nameService) {
  
    $scope.myName = nameService.getName; // wire up the controller scope function to the service function.
  
  
    $scope.testVariable = "I was set in the controller TestsCtrl";
  }]); // TestCtrl	