'use strict';

angular.module('starterApp')
  .controller('MainCtrl', function ($scope, $log, $resource, $window, $http) {

        $log.info("MainCtrl init");

		$scope.ui = {
			panels: {
				topNav : {show:true},
				sideNav : {show:true},
				search : {show:false},
				notification : {show:true},
				cart : {show:false}
			}
		}

		$scope.hideSideNav = function () {$scope.setSideNavVisibility(false)}
		$scope.showSideNav = function () {$scope.setSideNavVisibility(true)}
		$scope.setSideNavVisibility = function (show) {$scope.ui.panels.sideNav.show=show}

		$scope.ui.panels.topNav.dropDown1 = [
			{
				"text": "Another action",
				"href": "#anotherAction"
			},
			{
				"text": "Something else here",
				"click": "$alert('working ngClick!')"
			},
			{
				"divider": true
			},
			{
				"text": "Separated link",
				"href": "#separatedLink"
			}
		];



	});
