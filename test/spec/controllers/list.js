'use strict';

describe('Controller: ListCtrl', function () {

    // load the controller's module
    beforeEach(
        module('spangular', ['ngResource'])
    );

    var scope;

    // Initialize the controller and a e2e scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
//        MainCtrl = $controller('MainCtrl', {
//            $scope: scope
//        });
    }));

});
