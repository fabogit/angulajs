var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

	$routeProvider

		.when('/', {
			templateUrl: 'pages/main.html',
			controller: 'mainController'
		})

		.when('/second/', {
			templateUrl: 'pages/second.html',
			controller: 'secondController'
		})

		.when('/second/:id', {
			templateUrl: 'pages/second.html',
			controller: 'secondController'
		});

});

myApp.service('nameService', function () {
	var self = this;

	self.name = 'nome';
	self.namelenght = function () {
		return self.name.length;
	};
});

myApp.controller('mainController', ['$scope', '$log', 'nameService', function ($scope, $log, nameService) {

	$scope.name = nameService.name;

	// update service scope on controller scope change
	$scope.$watch('name', function () {
		nameService.name = $scope.name;
	});

	$log.log(nameService.name);
	$log.log(nameService.namelenght());
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function ($scope, $log, $routeParams, nameService) {

	$scope.id = $routeParams.id || 'no id param';
	$scope.name = nameService.name;

	// update service scope on controller scope change
	$scope.$watch('name', function () {
		nameService.name = $scope.name;
	});

	$log.info(`url param: ${$scope.id}`);

}]);
