var angular = require('angular');
require('angular-mocks/ngMock'),
require('angular-mocks/ngMockE2E'),
require('angular-mocks/ngAnimateMock')

describe('Rest Controller', function() {
    var module = angular.mock.module;
    var inject = angular.mock.inject;
    var $http, $httpBackend, $controller, $scope, restController;

    beforeEach(module('sampleApp'));

    beforeEach(inject(function (_$http_, _$httpBackend_, _$controller_) {
        $http = _$http_;
        $httpBackend = _$httpBackend_;
        $controller = _$controller_;
    }));

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($rootScope) {
        $scope = $rootScope.$new();
        restController = $controller('RestController', { $scope: $scope });
    }));
    
    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
    
    it('should attach a list of awesomeThings to the scope', function () {
        expect($scope.awesomeThings.length).toBe(3);
    });

    it('should get first and last name of scientists from json', function () {
        var response = [
            { firstName: 'Isaac', lastName: 'Newton', address: '101 June Street', city:'New York', state: 'NY' }
        ];
    
        $httpBackend.whenGET($scope.url).respond(response);
        $scope.getJson(); // Method to test
        $httpBackend.flush(); // Simulates response from server
    
        expect($scope.values[0]).toEqual('Isaac Newton');
    });
});