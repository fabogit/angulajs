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

myApp.controller('mainController', ['$scope', '$log', function ($scope, $log) {

	$scope.name = 'Main';

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function ($scope, $log, $routeParams) {

	$scope.id = $routeParams.id || 'no id param';
	$scope.name = 'Second';

	$log.info(`url param: ${$scope.id}`);

}]);
