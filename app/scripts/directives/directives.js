/**
 * Created by xyj on 03/01/14.
 */
'use strict';
angular.module('directives', []);

/*angular.module('directives').directive('myNavbar',
    function($compile, $window){
        return {
            restrict: 'AE',
            scope: {
                items: '=',
                template: '='
              },
            templateUrl:function(element, attr) {
                return '/views/navbar.html';
            },
            compile: function(tElement, tAttr) {
                var contents = tElement.contents().remove();
                var compiledContents;
                return function(scope, iElement, iAttr) {
                    if(!compiledContents) {
                        compiledContents = $compile(contents);
                    }
                    compiledContents(scope, function(clone, scope) {
                        iElement.append(clone);
                    });
                };
            }
        }
    });*/

angular.module('directives').directive( 'afHeader',
    function($http, $templateCache, $compile) {
        return {
            restrict: 'AE',
            scope:{
                url:'=',
                top:'=',
                menu:'='
            },
            compile: function(tElement, tAttr) {
                return function(scope , iElement, iAttrs) {
                    //var tplUrl = scope.header.headerTopTplId;
                    var tplUrl = scope.url;
                    $http.get('/partials/header/' + tplUrl + '.html', {cache: $templateCache}).success(function(tplContent){
                        $compile(tplContent)(scope, function(clone, scope){
                            iElement.html(clone);
                        });
                    });
                }
            }
        };
    });

angular.module('directives').directive( 'afHeaderTop',
    function($http, $templateCache, $compile) {
        return {
            restrict: 'E',
            scope:{
                afdata:"="
            },
            compile: function(tElement, tAttr) {
                return function(scope , iElement, iAttrs) {
                    var tplUrl = scope.afdata.url;
                    $http.get('/partials/header/top/' + tplUrl + '.html', {cache: $templateCache}).success(function(tplContent){
                        $compile(tplContent)(scope, function(clone, scope){
                            iElement.html(clone);
                        });
                    });
                }
            }
        };
    });

angular.module('directives').directive( 'afMenu',
    function($http, $templateCache, $compile) {
        return {
            restrict: 'AE',
            scope:{
                afdata:"="
            },
            compile: function(tElement, tAttr) {
                return function(scope , iElement, iAttrs) {
                    var tplUrl = scope.afdata.url;
                    $http.get('/partials/header/menu/' + tplUrl + '.html', {cache: $templateCache}).success(function(tplContent){
                        $compile(tplContent)(scope, function(clone, scope){
                            iElement.html(clone);
                        });
                    });
                }
            }
        };
    });

angular.module('directives').directive('afNavbarItem',
    function($http, $templateCache, $compile){
        return {
            restrict: 'AE',
            scope:{
              items:'=',
              url:'='
            },
            compile: function(tElement, tAttr) {
                var tplUrl = null;
                return function(scope, iElement, iAttr) {
                    if(!tplUrl){
                        tplUrl = scope.url;
                    }
                    $http.get('/partials/header/menu/components/' + tplUrl + '.html', {cache: $templateCache}).success(function(tplContent){
                        $compile(tplContent)(scope, function(clone, scope){
                             iElement.append(clone);
                        });
                    });
                };
            }
        }
    });