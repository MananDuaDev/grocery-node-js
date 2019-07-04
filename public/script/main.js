var app = angular.module("loginApp",[]);
app.controller("loginCtrl", function($scope, $http){
	$scope.email="";
	$scope.password="";
	
	
	 $scope.hide = false;
	 $scope.logIn = function() {
        $scope.hide = !$scope.hide;

    }
    $scope.signUp=function() {
    	$scope.hidesignup = !$scope.hidesignup;
    	$scope.hidelog = true;
    }
    $scope.create=function()
    {
    	console.log(`hello	`)
    	$http.post('/v1/grocery',{firstNameText:$scope.firstName})
    	.then(function(response){
            console.log(response);
              });
    	// $http.post('v1/grocery',{$scope.lastName})
    	// .then(function(response){
     //        console.log(response);
     //          });
    	// $http.post('v1/grocery',{$scope.newEmail})
    	// .then(function(response){
     //        console.log(response);
     //          });
    	// $http.post('v1/grocery',{$scope.newPassword})
    	// .then(function(response){
     //        console.log(response);
     //          });
    }

})
 