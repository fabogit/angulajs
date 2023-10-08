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
	'cityService',
	function ($scope, cityService) {

		$scope.city = cityService.city;
		$scope.$watch('city', function () {
			cityService.city = $scope.city;
		});
	},
]);

weatherApp.controller('forecastController', [
	'$scope',
	'$resource',
	'$routeParams',
	'cityService',
	function ($scope, $resource, $routeParams, cityService) {

		$scope.city = cityService.city;

		$scope.days = $routeParams.days || '2';

		// set api key! http://openweathermap.org/appid
		// http://api.openweathermap.org/data/2.5/forecast/daily?APPID=API_KEY

		API_KEY = 'api-key';

		$scope.weaterAPI = $resource(
			`http://api.openweathermap.org/data/2.5/forecast/daily?APPID=${API_KEY}`,
			{ get: { method: 'JSONP' } }
		);

		$scope.weatherResult = $scope.weaterAPI.get({ q: $scope.city, cnt: $scope.days });

		$scope.convertToCelsius = function (kelvinDeg) {
			return (kelvinDeg - 273.15).toFixed(1);
		};

		$scope.convertToDate = function (timestamp) {
			return new Date(timestamp * 1000);
		};
	},
]);