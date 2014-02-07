'use strict';

angular.module('starterApp', [
		'ngCookies',
		'ngResource',
		'ngSanitize',
		'ngRoute',
		'ngAnimate',
		'mgcrea.ngStrap'
	])
	.config(function ($routeProvider, $httpProvider) {

		$routeProvider
			.when('/', {
				templateUrl: 'views/welcome.html',
				controller: 'WelcomeCtrl'
			})
			.when('/welcome', {
				templateUrl: 'views/welcome.html',
				controller: 'WelcomeCtrl'
			})
			.when('/login', {
			  templateUrl: 'views/login.html',
			  controller: 'LoginCtrl'
			})
.when('/widgets', {
  templateUrl: 'views/widgets.html',
  controller: 'WidgetsCtrl'
})
			.otherwise({
				redirectTo: '/'
			});


		// httpResponseInterceptor to pass HTTP error codes (e.g. 404) back to the resolved HTTP promise
		// http interceptor returns errors to $resource calls that would otherwise just hang
		var interceptor = function ($location, $q, $log) {

			function success(response) {
				return response;
			}

			function error(response) {
				$log.error("$httpProvider.interceptor: Error -> %s", response.status);
				// return $q.reject(response);
				return response; // immediately return the error
			}

			return function (promise) {
				return promise.then(success, error);
			}
		};
		$httpProvider.responseInterceptors.push(interceptor);


	});
