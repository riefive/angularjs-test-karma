var sampleApp = angular.module('sampleApp', []);

sampleApp.controller('AngularJSController', function($scope) {
    $scope.ID = 5;
});

sampleApp.directive('testElement', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<h1>This is AngularJS Testing</h1>'
    };
});