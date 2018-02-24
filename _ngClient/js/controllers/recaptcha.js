 
angularnodeApp.controller('recaptchaCtrl', [  '$scope', 'vcRecaptchaService', '$resource', '$http',  '$q', 'nameService',  
    function( $scope,   vcRecaptchaService, $resource,  $http, $q, nameService ) {
 	
		$scope.currentName = nameService.getName();	
			
		//$scope.reCapthchaPublicKey = "set me "; //reCapthchaPublicKey; // google?
		$scope.reCapthchaPublicKey = "6Lf9BA8TAAAAAAAK4zMLOQsASOhm_gTiBKtmQjA4"; // get your own for a real system
 
		var reCAPTCHAid = -1;
		
		//$scope.formData	 = {}; // the formdata 
		// test data
		$scope.formData = { "name" : "alpha", "email": "alpha@example.com" , "password" : "sdfsdfs"}
 		
		
		var expCallback =	function ()
		{
		//	alert("expCallback");
		}		
		
		$scope.showResponse = function()
		{
			var recaptchaResponse = vcRecaptchaService.getResponse();
			alert(recaptchaResponse);
		}
					
		$scope.clearReCAPTCHA = function()
			{	  
				if (reCAPTCHAid > -1)   
				{
					 grecaptcha.reset(reCAPTCHAid); // reset the google reCAPTCHA 
				}
				else
				{
					reCAPTCHAid = grecaptcha.render('captchadiv', {
								 'sitekey': $scope.reCapthchaPublicKey ,
								 'expired-callback': expCallback
							});		 	
				}		 
			}			 // clearReCAPTCHA	
			
			
		// 	test data to send to the server
		var doc = 	{"eventId":"222","eventName":"Workshop 1","type":"Workshops" };
 		
			 $scope.signUp = function(){
              console.log($scope.formData);
							$scope.result = {};
							var request = {};
							// prepare the request data for sending
							request.name =  $scope.formData.name
							request.email =  $scope.formData.email;
							request.password =  $scope.formData.password;
							request.data = doc;
							
							request.recaptchaResponse = vcRecaptchaService.getResponse(); // attach the request for server authenication
							
							// move this to a service for better solution using $q.defer
							console.log("deprecated?");
							var deferred = $q.defer();
							 $http.post('/api/v1/request', request)				
									.success(function(request) { 
														deferred.resolve(request);
											 }).error(function(msg, code) {
													deferred.reject({"error" : msg , "code" : code});
											 
											 });
							 //return deferred.promise;
							 
							 deferred.promise.then(function(result) {
								    $scope.result = result;
									$scope.clearReCAPTCHA();
							 },
							 function(error)
							 {
								$scope.result =   error; 
								$scope.clearReCAPTCHA();
							 });							     
        } // signUp
 
 		  angular.element(document).ready(function () {
				// ensure the recaptch script is ready
				 $scope.clearReCAPTCHA();	
				});	
		}]); // recpathcaCtrl
		
		function vcRecaptchaApiLoaded()
		{
			console.log("vcRecaptchaApiLoaded()");
			//var deferredRecaptcha = $q.defer(); 
			//deferred.resolve('recaptcha code loaded');
		}
