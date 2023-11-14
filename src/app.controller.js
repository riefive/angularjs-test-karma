var sampleApp = angular.module('sampleApp', []);

sampleApp.controller('AngularJSController', function($scope) {
  $scope.ID = 5;
});

sampleApp.controller('RestController', function ($scope, $http) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  $scope.values = [];
  $scope.url = 'dummy.json'

  $scope.getJson = function() {
    var response = $http.get($scope.url);
    response.then(function(result) {
      const data = result.data;
      for (var i = 0; i < data.length; i++) {
        $scope.values.push(data[i].firstName + ' ' + data[i].lastName);
      }
    })
  }
});

sampleApp.directive('testElement', function () {
  return {
    restrict: 'E',
    replace: true,
    template: '<h1>This is AngularJS Testing</h1>'
  };
});

