// MODULE
var angularApp = angular.module('angularApp', ['ngMessages', 'ngResource']);

// CONTROLLERS
angularApp.controller('mainController', [
	// order should be the same of the function args
	'$scope', '$log', '$filter', '$resource',
	function ($scope, $log, $filter, $resource) {
		$log.warn($scope);

		$scope.var = 'interpolated var';

		$scope.formattedUp = $filter('uppercase')($scope.var);
		$log.info($scope.formattedUp);

		$log.info('$resource:')
		$log.warn($resource);
	}
]);
