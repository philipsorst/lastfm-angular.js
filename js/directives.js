'use strict';

/* Directives */

var directives = angular.module('lastfmApp.directives', []);

directives.directive('aspectRatio', function($timeout, $window) {
   return {
       restrict: 'A',
       link: function($scope, $elm, $attrs) {

           var setSize = function() {
               if ($elm.width() > 0) {
                   $elm.css("height", $elm.width() * $attrs.aspectRatio);
               }
           }

           if ($elm.width() > 0) {
               setSize();
           } else {
               $timeout(setSize, 100);
           }

           $(window).resize(function() {
               setSize();
           });
       }
   }
});

/**
 * Derived from https://github.com/angular-ui/
 */
directives.directive('pagination', function() {
	return {
		restrict: 'EA',
		scope: {
			numPages: '=',
			currentPage: '=',
			maxSize: '=',
			setPage: '&',
			nextText: '@',
			previousText: '@'
		},
		templateUrl: 'partials/pagination.html',
		replace: true,
		link: function($scope) {
	    	
			$scope.$watch('numPages + currentPage + maxSize', function() {
	        
				$scope.pages = [];
	    	  
				var maxSize = ( $scope.maxSize && $scope.maxSize < $scope.numPages ) ? $scope.maxSize : $scope.numPages;
				var startPage = $scope.currentPage - Math.floor(maxSize/2);
	        
				if (startPage < 1) {
					startPage = 1;
				}
	        
				if ((startPage + maxSize - 1) > $scope.numPages) {
					startPage = startPage - ((startPage + maxSize - 1) - $scope.numPages );
				}
	        
				if (startPage < 1) {
					startPage = 1;
				}
	        
				for(var i=0; i < maxSize && i < $scope.numPages; i++) {
					$scope.pages.push(startPage + i);
				}
	        
				if ( $scope.currentPage > $scope.numPages ) {
					$scope.selectPage($scope.numPages);
				}
			});
	      
			$scope.noPrevious = function() {
				return $scope.currentPage == 1;
			};
	      
			$scope.noNext = function() {
				return $scope.currentPage == $scope.numPages;
			};
	      
			$scope.isActive = function(page) {
				return $scope.currentPage == page;
			};

			$scope.selectPage = function(page) {
				if ( !$scope.isActive(page) ) {
					$scope.currentPage = page;
					$scope.setPage({ page: page });
				}
			};

			$scope.selectPrevious = function() {
				if ( !$scope.noPrevious() ) {
					$scope.selectPage($scope.currentPage - 1);
				}
			};
	      
			$scope.selectNext = function() {
				if ( !$scope.noNext() ) {
					$scope.selectPage($scope.currentPage + 1);
				}
			};
		}
	};
});