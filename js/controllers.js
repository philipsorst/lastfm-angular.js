'use strict';

/* Controllers */

function TopBarController($scope, PackageService, $route, $routeParams) {
	$scope.packages = Object.keys(PackageService);
	$scope.params = $routeParams;
}

function SideBarController($scope, PackageService, $route, $routeParams) {
	$scope.methods = function() {
		return PackageService[$routeParams.pkg];
	};
	$scope.params = $routeParams;
}

function RouteController($scope, $routeParams) {
	$scope.params = $routeParams;
}

function MethodController($scope, $routeParams, LastFm) {
	
	$scope.params = $routeParams;
	
	LastFm.fetch($routeParams).then(function(d) {
		$scope.data = d;
	});
	
	$scope.includeUrl = function() {
		return "partials/" + $scope.params.pkg + "/" + $scope.params.mthd + ".html";
	};
}

function IndexController($scope, $routeParams, $location) {
	
	$scope.params = $routeParams;
	
	$scope.includeUrl = function() {
		return "partials/" + $scope.params.pkg + "/index.html";
	};
	
	$scope.showMethod = function(mthd, paramName, paramValue) {
		$location.url($scope.params.pkg + "/" + mthd + "?" + paramName + "=" +paramValue);
	};
}