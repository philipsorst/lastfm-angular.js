'use strict';

/* Controllers */

function TopBarController($scope, PackageService, $route, $routeParams) {
	$scope.packages = Object.keys(PackageService);
	$scope.params = $routeParams;
}
//TopBarController.$inject = ["$scope"];

function SideBarController($scope, PackageService, $route, $routeParams) {
	$scope.methods = function() {
		console.log("methods");
		return PackageService[$routeParams.pkg];
	};
	$scope.params = $routeParams;
}
