/**
 * Created by Pluto on 12/30/13.
 */
'use strict';

describe('Controller: ContactCtrl', function () {

    // load the controller's module
    beforeEach(module('iluxeApp'));

    var ContactCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ContactCtrl = $controller('ContactCtrl', {
            $scope: scope
        });
    }));

    it('should have the current page contact ', function () {
        expect(scope.currentPage).toBe(3);
    });
});
