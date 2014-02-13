/**
 * Created by Pluto on 12/31/13.
 */
'use strict';

describe('Controller: HeaderCtrl', function () {

    // load the controller's module
    beforeEach(module('iluxeApp'));

    var HeaderCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        HeaderCtrl = $controller('HeaderCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of navbarItems to the scope', function () {
        expect(scope.navbarItems.length).toBe(3);
    });
});