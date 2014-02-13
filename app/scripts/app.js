'use strict';
angular.module('controllers', []);
angular.module('filters', []);


angular.module("appForce", [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'controllers',
  'services',
  'filters',
  'directives',
  'ui.bootstrap'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactCtrl'
        })
        .otherwise({
        redirectTo: '/'
      });
  });
