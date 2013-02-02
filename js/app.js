'use strict';

console.log(account.key);

// Declare app level module which depends on filters, and services
angular.module('lastfmApp', [ 'lastfmApp.filters', 'lastfmApp.services', 'lastfmApp.directives' ]).config(
		[ '$routeProvider', function($routeProvider) {
			
			$routeProvider.when('/:pkg', {
				templateUrl : 'partials/include.html',
				controller : IndexController
			});
			
			$routeProvider.when('/:pkg/:mthd', {
				templateUrl : 'partials/include.html',
				controller: MethodController
			});
			
			$routeProvider.otherwise({
				redirectTo : 'user/'
			});
		} ]);