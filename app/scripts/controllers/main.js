'use strict';

angular.module('controllers')
  .controller('MainCtrl', function ($scope) {
    Configuration.CurrentPage = "index";
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
