// services
weatherApp.service('cityService', function () {
	this.city = 'New York, NY';
});

weatherApp.service("weatherService", [
	"$resource",
	function ($resource) {

		// set api key! http://openweathermap.org/appid
		// http://api.openweathermap.org/data/2.5/forecast/daily?APPID=API_KEY
		API_KEY = "api-key";

		this.GetWeather = function (city, days) {
			var weaterAPI = $resource(
				`http://api.openweathermap.org/data/2.5/forecast/daily?APPID=${API_KEY}`,
				{ get: { method: "JSONP" } }
			);

			return (weatherResult = weaterAPI.get({ q: city, cnt: days }));
		};
	},
]);
