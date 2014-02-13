/**
 * Created by Pluto on 12/30/13.
 */
'use strict';

describe('Controller: AboutCtrl', function () {

    // load the controller's module
    beforeEach(module('iluxeApp'));

    var AboutCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        AboutCtrl = $controller('AboutCtrl', {
            $scope: scope
        });
    }));

    it('should have the current page about ', function () {
        expect(scope.currentPage).toBe(2);
    });
});
