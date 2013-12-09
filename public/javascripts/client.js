var Hello = angular.module("HelloApp", ["ngRoute"]);

Hello.config(function($routeProvider){
	$routeProvider.when("/", {
		templateUrl: "/index"
	});
	$routeProvider.when("/about", {
		templateUrl: "/about"
	});
	$routeProvider.when("/contact",{
		templateUrl: "/contact"
	});
	$routeProvider.otherwise({
		redirectTo: "/index"
	});
});

Hello.controller("RouteController", function($scope, $location){
	$scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
});

Hello.controller("HelloController", function($scope, $http) {
	$scope.message = "Hello express.";
	$scope.user = {};

	$scope.hello = function(){
		alert("Hello!");
	}

	$scope.save = function(user){
		var rs = $http.post("/adduser", user);
		rs.error(function(error){
			console.log("Error.");
			console.log(error);
		});

		rs.success(function(message){
			console.log("Success.");
			console.log(message);
			$scope.user = {};
		});
	}
});