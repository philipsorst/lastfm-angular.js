'use strict';

var services = angular.module('lastfmApp.services', []);

services.factory('LastFm', function($http) {

	var lastfmService = {
		fetch: function(routeParams) {
			
			var lfmParams = {
                "format": "json",
                "method": routeParams.pkg + "." + routeParams.mthd,
                "api_key": account.key
            };
			
			for(var propt in routeParams){
			    if (propt != "pkg" && propt != "mthd") {
			    	lfmParams[propt] = routeParams[propt];
			    }
			}
			
			var promise = $http.get(
                    'http://ws.audioscrobbler.com/2.0/',
                    { "params": lfmParams }
                ).then(function(response) {
                    return response.data;
                });
			return promise;
		}
	};

	return lastfmService;
});


services.value('PackageService', {

    "user": { 
    	"methods": [
    	    {
    	        "name": "getInfo",
    	    },
    	    {
    	        "name": "getFriends"
    	    }
        ],
        "requiredParam": "user",
        "initialMethod": "getInfo"
    },
	"artist": {
		"methods": [
	        {
                "name": "getInfo"
            }
        ],
        "requiredParam": "artist",
        "initialMethod": "getInfo"
	},
	"tag": {
		"methods": [
	        {
                "name": "getInfo"
            }
        ],
        "requiredParam": "tag",
        "initialMethod": "getInfo"
	}
});
