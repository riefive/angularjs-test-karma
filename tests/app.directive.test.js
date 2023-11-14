var angular = require('angular');
require('angular-mocks/ngMock');

describe('AngularJS directives', function() {
    var module = angular.mock.module;
    var inject = angular.mock.inject;
    var $compile, $rootScope;

    beforeEach(module('sampleApp'));

    beforeEach(inject(function(_$compile_, _$rootScope_){
        $compile = _$compile_;
        $rootScope = _$rootScope_;
     }));

     it('Check the directive', function() {
        // Compile a piece of HTML containing the directive
        var element = $compile('<test-element></test-element>')($rootScope);
        $rootScope.$digest();
        expect(element.html()).toContain('This is AngularJS Testing');
    });
});