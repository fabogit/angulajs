// MODULE
var angularApp = angular.module('angularApp', ['ngMessages', 'ngResource']);

// CONTROLLERS
angularApp.controller('mainController', [
	// order should be the same of the function args
	'$scope', '$log', '$filter', '$resource',
	function ($scope, $log, $filter, $resource) {
		$log.warn($scope);

		$scope.name = 'nome';

		$scope.formattedName = $filter('uppercase')($scope.name);
		$log.info($scope.formattedName);

		$log.warn($resource);
	}
]);
