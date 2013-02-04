'use strict';

/* Controllers */

function TopBarController($scope, $route, $routeParams, PackageService) {
	$scope.packages = Object.keys(PackageService);
	$scope.params = $routeParams;
}

function SideBarController($scope, $route, $routeParams, PackageService) {
	
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
		
		if (entity == undefined) {
			return "";
		}
		
		var src = null;
		angular.forEach(entity.image, function(value) {
			if (value.size == size) {
				src = value["#text"];
			}
		});
		
		if (src != null && src != undefined && src != "") {
			return src;
		}
		
		if (entity.image != undefined) {
			src = entity.image[0]["#text"];
			if (src != null && src != undefined && src != "") {
				return src;
			}
		}
		
		if (size == "small") {
			return "http://cdn.last.fm/flatness/catalogue/noimage/2/default_user_small.png";
		} else if (size == "medium") {
			return "http://cdn.last.fm/flatness/catalogue/noimage/2/default_user_medium.png";
		} else if (size == "large") {
			return "http://cdn.last.fm/flatness/catalogue/noimage/2/default_user_large.png";
		} else if (size == "extralarge") {
			return "http://cdn.last.fm/flatness/catalogue/noimage/2/default_user_mega.png";
		}
	};
	
	$scope.onSelectPage = function(pageNo) {
		console.log("hier");
		console.log(pageNo);
	};
}

function IndexController($scope, $routeParams, $location, PackageService) {
	
	$scope.params = $routeParams;
	
	$scope.pkg = function() {
		if ($routeParams.pkg == undefined) {
			return {};
		}
		return PackageService[$routeParams.pkg];
	};
	
	$scope.includeUrl = function() {
		return "partials/providevalue.html";
	};
	
	$scope.showMethod = function(mthd, paramName, paramValue) {
		$location.url($scope.params.pkg + "/" + mthd + "?" + paramName + "=" +paramValue);
	};
}

