'use strict';

/* Controllers */

function TopBarController($scope, PackageService, $route, $routeParams) {
	$scope.packages = Object.keys(PackageService);
	$scope.params = $routeParams;
}

function SideBarController($scope, PackageService, $route, $routeParams) {
	
	$scope.methods = function() {
		if ($routeParams.pkg == undefined) {
			return [];
		}
		return PackageService[$routeParams.pkg].methods;
	};
	
	$scope.params = $routeParams;
	
	$scope.requiredParamKey = function() {
		return PackageService[$routeParams.pkg].requiredParam;
	};
	
	$scope.requiredParamValue = function() {
		return $routeParams[PackageService[$routeParams.pkg].requiredParam];
	};
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
	
	$scope.image = function(entity, size) {
		var src = null;
		angular.forEach(entity.image, function(value) {
			console.log(value.size, size);
			if (value.size == size) {
				src = value["#text"];
			}
		});
		if (src != null) {
			return src;
		}
		src = entity.image[0]["#text"];
		if (src != null) {
			return src;
		}
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

function PaginationController($scope, $routeParams) {
	console.log($scope);
}