 
angularnodeApp.controller('HomeCtrl', ['$scope' , 'nrzLightify', 'nameService',
		function($scope, nrzLightify, nameService) {
			
			$scope.name= "Angular Basics 101b";
			$scope.yourName = nameService.getName() || "";
			
			nrzLightify({
					type: 'info',
					text: "Angular Basics 101b Home Page" 
				 
				}, 3000);			
			
			$scope.homeData = {};
			$scope.homeData.name = "rlacey2";
			$scope.homeData.description = "Angular Basics 101b";
	
		$scope.saveName = function(n)
		{
			// we are passing the name as a parameter to the function, rather than grabbing from the controller $scope.
			nameService.setName(n);
					nrzLightify({
					type: 'info',
					text: "Hello " + n +". move to the other views to see the name presented" 
				 
				}, 3000);	
		}
		
		}]); // HomeCtrl
	
 
 	
	 