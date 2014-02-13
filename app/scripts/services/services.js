/**
 * Created by Pluto on 1/2/14.
 */
'use strict';
angular.module('services', ['ngResource']);

angular.module('services').factory('Header', ['$resource',
    function($resource){
        //TO DO should send appid too get get the header
        //appid get be fetched from Configuration object
        return $resource('data/headers/:pageId.json');
      }]);

angular.module('services').factory('Configuration', ['$resource',
    function($resource){
        //TODO load with cache
        return $resource(Configuration.AppConfigUrl + ':appId.json');
      }]);