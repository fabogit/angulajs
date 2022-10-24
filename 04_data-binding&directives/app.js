var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$timeout', '$filter',
	function ($scope, $timeout, $filter) {

		$scope.myVar = 'interpolated string waiting 3s...';
		$scope.input = '';
		$scope.charNum = 5;
		$scope.myList = [];
		$scope.rules = [
			{ruleName: "Must be 5 characters"},
			{ruleName: "Must be unique"},
			{ruleName: "Must be lowercase"}
		]

		$scope.lowercaseInput = function () {
			return $filter('lowercase')($scope.input);
		};

		$timeout(function () {
			$scope.myVar = 'timeout done!';
		}, 3000);

		// watchers and digest loop, $scope.$apply() if need to include
		$scope.$watch('input', function (newVal, oldVal) {
			console.log(`Changed, Old: ${oldVal}, New: ${newVal}`);
		});

	}
]);
