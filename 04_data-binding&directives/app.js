var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$timeout', '$filter',
	function ($scope, $timeout, $filter) {

		$scope.name = 'interpolated string';
		$scope.input = '';
		$scope.maxChars = 5;
		$scope.myList = []

		$scope.lowercaseInput = function () {
			return $filter('lowercase')($scope.input);
		};


		$scope.$watch('input', function (newVal, oldVal) {
			console.log(`Changed Old: ${oldVal}, New: ${newVal}`);
		});

		$timeout(function () {
			$scope.name = 'timeout';
		}, 3000);
	}
]);
