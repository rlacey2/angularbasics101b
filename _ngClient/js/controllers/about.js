 
angularnodeApp.controller('AboutCtrl', ['$scope',  'nameService',
  function($scope, nameService) {
  
    $scope.testVariable = "I was set in the controller AboutCtrl";
	
	$scope.currentName = nameService.getName();
 
  }]); // AboutCtrl	