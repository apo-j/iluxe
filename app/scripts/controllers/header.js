/**
 * Created by Pluto on 12/30/13.
 */
'use strict';

angular.module('controllers')
    .controller('HeaderCtrl', ['$scope', 'Header',
        function ($scope, Header) {
            $scope.headerId = Configuration.AppConfig.headerId;
            $scope.header = Header.get({pageId: $scope.headerId});

            $scope.dataLoaded = $scope.header.$resolved;

            $scope.$watch('header.$resolved', function(value){
                $scope.dataLoaded = value;
            });
    }]);