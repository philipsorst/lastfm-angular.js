'use strict';

/* Services */

var services = angular.module('lastfmApp.services', []);

services.value('PackageService', {
	        "user":  [
	                  "getInfo",
	                  "getFriends"
	                  ],
	        "artist": [
	                   "getInfo"
	                  ],
	        "tag": [
	                "getInfo"
	                ]
});
