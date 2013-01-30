'use strict';

// Declare app level module which depends on filters, and services
angular.module('lastfmApp', [ 'lastfmApp.filters', 'lastfmApp.services', 'lastfmApp.directives' ]).config(
		[ '$routeProvider', function($routeProvider) {
			
			$routeProvider.when('/:pkg', {
				//templateUrl : 'partials/partial1.html',
				//controller : MyCtrl1
			});
			
			$routeProvider.when('/:pkg/:mthd', {
				//templateUrl : 'partials/partial1.html',
				//controller : MyCtrl1
			});
			
			$routeProvider.otherwise({
				redirectTo : '/user/getInfo'
			});
		} ]);