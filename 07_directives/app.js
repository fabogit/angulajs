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

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function ($scope, $log, $routeParams, nameService) {

}]);

myApp.directive('searchResult', function(){
	return {
		// allow to call directive in html using Attribute/Element/Class/coMment mode
		restrict: 'AECM',
		template: '<a href="#!" class="list-group-item"><h4 class="list-group-item-heading">Username</h4><p class="list-group-item-text">Address</p></a>',
		// directive name will be replaced using the template itself
		replace: true

	}
})