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

	$scope.person = {
		name: 'Name1',
		address: 'Address1'
	};

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function ($scope, $log, $routeParams, nameService) {

}]);

myApp.directive('searchResult', function () {
	return {
		// allow to call directive in html using Attribute/Element/Class/coMment mode
		restrict: 'AECM',
		templateUrl: 'directives/search-result.html',
		// directive name will be replaced using the template itself
		replace: true,
		// Isolate directive scope from parent
		scope: {
			// binds html attributes and scope variables
			// @ = texts
			personName: '@',
			personAddress: '@'
		}
	};
});