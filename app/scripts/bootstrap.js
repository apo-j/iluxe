/**
 * Created by Pluto on 12/28/13.
 */
/*
define(['angular', 'domReady'], function(angular, domReady) {
    domReady(function() {
        angular.bootstrap(document, ['iluxeApp']);
    });
});*/

'use strict';
angular.element(document).ready(function() {
    //send app domain name back to server to fetch app config data before bootstrap
    var appHost = window.location.host;

    if(appHost && appHost.indexOf(':') != -1){
        appHost = appHost.split(':')[0];//remove port number if any
    }

    if(Configuration.Environment === 'PRODUCTION'){
        //TODO call webservice to get the data
    }else{
        $.getJSON(Configuration.AppConfigUrl + appHost +  '.json', function(data){
                Configuration.AppConfig = data;
                angular.bootstrap(document, ['appForce']);
            }
        );
    }
});
