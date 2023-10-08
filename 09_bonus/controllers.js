// trust api call
weatherApp.config(['$sceDelegateProvider', function ($sceDelegateProvider) {
	$sceDelegateProvider.resourceUrlWhitelist([
		'self',
		'http://api.openweathermap.org/**'
	]);
}]);

//  controllers
weatherApp.controller('homeController', [
	'$scope',
	'$location',
	'cityService',
	function ($scope, $location, cityService) {

		$scope.city = cityService.city;
		$scope.$watch('city', function () {
			cityService.city = $scope.city;
		});

		$scope.submit = function () {
			$location.path('/forecast');
		};
	},
]);

weatherApp.controller('forecastController', [
	'$scope',
	'$routeParams',
	'cityService',
	'weatherService',
	function ($scope, $routeParams, cityService, weatherService) {

		$scope.city = cityService.city;
		$scope.days = $routeParams.days || '2';

		$scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days)

		$scope.convertToCelsius = function (kelvinDeg) {
			return (kelvinDeg - 273.15).toFixed(1);
		};

		$scope.convertToDate = function (timestamp) {
			return new Date(timestamp * 1000);
		};
	},
]);