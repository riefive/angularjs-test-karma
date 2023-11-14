var angular = require('angular');
require('angular-mocks/ngMock');
require('angular-mocks/ngMockE2E');
require('angular-mocks/ngAnimateMock');

describe('AngularJS Controller', function() {
    var module = angular.mock.module;
    var inject = angular.mock.inject;
    var $controller;

    beforeEach(module('sampleApp'));

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe('$scope.ID', function() {
        it('Check the scope object', function() {
            var $scope = {};
            var controller = $controller('AngularJSController', { $scope: $scope });
            expect($scope.ID).toEqual(5);
        });
    });
});