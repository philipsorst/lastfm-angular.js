'use strict';

/* Services */

var services = angular.module('lastfmApp.services', []);

services.value('PackageService', {
    "user":  [
        {
            "name": "getInfo"
        },
	    {
        	"name": "getFriends"
	    }
    ],
	"artist": [
        {
            "name": "getInfo"
        }
    ],
	"tag": [
        {
            "name": "getInfo"
        }
    ]
});
