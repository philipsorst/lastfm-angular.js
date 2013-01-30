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